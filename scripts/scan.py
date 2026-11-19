#!/usr/bin/env python3
"""Scan local AI workspace (skills + plugins) and write docs/data.json for the site.

Usage: python scripts/scan.py
Reads ~/.agents/skills, ~/.claude/skills, ~/.claude/plugins/installed_plugins.json.
Only names, descriptions and categories are written (no paths, no secrets).
"""
import json, re, sys, datetime
from pathlib import Path

HOME = Path.home()
OUT = Path(__file__).resolve().parent.parent / "docs" / "data.json"

SOURCES = {
    "agents": HOME / ".agents" / "skills",
    "claude": HOME / ".claude" / "skills",
}

# Private name->category map lives in scripts/categories.local.json (gitignored):
# {"Categoria": ["skill-name", "prefix-*"], ...}
LOCAL = Path(__file__).resolve().parent / "categories.local.json"
MAP = json.loads(LOCAL.read_text(encoding="utf-8")) if LOCAL.is_file() else {}


def categorize(name):
    for cat, pats in MAP.items():
        for p in pats:
            if name == p or (p.endswith("*") and name.startswith(p[:-1])):
                return cat
    return "Otros"


def read_skill(d: Path):
    f = d / "SKILL.md"
    if not f.is_file():
        return None
    text = f.read_text(encoding="utf-8", errors="replace")
    m = re.match(r"---\s*\n(.*?)\n---", text, re.S)
    desc = ""
    if m:
        dm = re.search(r"^description:\s*(.*?)(?=^\w[\w-]*:|\Z)", m.group(1), re.S | re.M)
        if dm:
            desc = " ".join(dm.group(1).replace(">", " ").replace('"', "").split())
    return desc[:220]


def main():
    skills = {}
    for src, root in SOURCES.items():
        if not root.is_dir():
            continue
        for d in sorted(root.iterdir()):
            if not d.is_dir():
                continue
            desc = read_skill(d)
            if desc is None:
                continue
            e = skills.setdefault(d.name, {"name": d.name, "description": desc,
                                           "category": categorize(d.name), "locations": []})
            e["locations"].append(src + (" (link)" if d.is_symlink() else ""))
    plugins = []
    ip = HOME / ".claude" / "plugins" / "installed_plugins.json"
    if ip.is_file():
        data = json.loads(ip.read_text(encoding="utf-8"))
        for key, v in (data.get("plugins") or {}).items():
            first = v[0] if isinstance(v, list) and v else {}
            plugins.append({"name": key, "version": first.get("version", ""), "scope": first.get("scope", "")})
    out = {
        "generated": datetime.date.today().isoformat(),
        "skills": sorted(skills.values(), key=lambda s: (s["category"], s["name"])),
        "plugins": sorted(plugins, key=lambda p: p["name"]),
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"{len(out['skills'])} skills, {len(plugins)} plugins -> {OUT}")


if __name__ == "__main__":
    sys.exit(main())

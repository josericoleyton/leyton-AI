import os
import json
from PIL import Image

OUT_DIR = os.path.abspath(r'public/images/apartment')
os.makedirs(OUT_DIR, exist_ok=True)

CANVAS_W = 1540
CANVAS_H = 1024

raw_layers = {
    'background': {
        'path': r'C:\Users\joser\.t3\userdata\attachments\027ba5b5-6226-4b3f-bedb-ff7411d797c0-6e96c593-cbbb-408c-bbe0-97fea200c8d1.png',
        'is_bg': True,
    },
    'bookshelf': {
        'path': r'C:\Users\joser\.t3\userdata\attachments\027ba5b5-6226-4b3f-bedb-ff7411d797c0-b0d52eed-460b-4e66-814a-aac4c6aea749.png',
        'type': 'interactive',
        'portal_id': 'bookshelf',
        'z_index': 15,
    },
    'movie_shelf': {
        'path': r'C:\Users\joser\.t3\userdata\attachments\027ba5b5-6226-4b3f-bedb-ff7411d797c0-80a25604-c2f5-4d3e-897f-fe12d26d5f28.png',
        'type': 'interactive',
        'portal_id': 'movies',
        'z_index': 15,
    },
    'film_reel': {
        'path': r'C:\Users\joser\.t3\userdata\attachments\027ba5b5-6226-4b3f-bedb-ff7411d797c0-c31dd3bd-9593-4562-bb07-eae6abffab8c.png',
        'type': 'interactive',
        'portal_id': 'movies',
        'z_index': 16,
    },
    'tv': {
        'path': r'C:\Users\joser\.t3\userdata\attachments\027ba5b5-6226-4b3f-bedb-ff7411d797c0-f159a654-8494-47f2-b1fe-fb6c3a09c335.png',
        'type': 'interactive',
        'portal_id': 'tv',
        'z_index': 16,
    },
    'plant_monstera': {
        'path': r'C:\Users\joser\.t3\userdata\attachments\027ba5b5-6226-4b3f-bedb-ff7411d797c0-c5173d47-00a9-44c0-b213-45fe0321e774.png',
        'type': 'plant',
        'z_index': 12,
    },
    'guitar': {
        'path': r'C:\Users\joser\.t3\userdata\attachments\027ba5b5-6226-4b3f-bedb-ff7411d797c0-7b6e2d5a-b2ee-4968-a84c-5db110db3bb4.png',
        'type': 'interactive',
        'portal_id': 'guitar',
        'z_index': 14,
    },
    'coffee_espresso': {
        'path': r'C:\Users\joser\.t3\userdata\attachments\027ba5b5-6226-4b3f-bedb-ff7411d797c0-779e500e-17cb-4de6-98a3-b65d25fe5aa2.png',
        'type': 'interactive',
        'portal_id': 'coffee',
        'z_index': 16,
    },
    'coffee_grinder': {
        'path': r'C:\Users\joser\.t3\userdata\attachments\027ba5b5-6226-4b3f-bedb-ff7411d797c0-9a809325-2a4f-4832-b179-43f245f7f0ce.png',
        'type': 'interactive',
        'portal_id': 'coffee',
        'z_index': 16,
    },
    'coffee_jar': {
        'path': r'C:\Users\joser\.t3\userdata\attachments\027ba5b5-6226-4b3f-bedb-ff7411d797c0-06193adb-30b2-4c66-9962-2138288299e4.png',
        'type': 'interactive',
        'portal_id': 'coffee',
        'z_index': 16,
    },
    'plant_table': {
        'path': r'C:\Users\joser\.t3\userdata\attachments\027ba5b5-6226-4b3f-bedb-ff7411d797c0-39215605-1709-4c73-9350-b9ffae07ecfb.png',
        'type': 'plant',
        'z_index': 16,
    },
    'cat_grey': {
        'path': r'C:\Users\joser\.t3\userdata\attachments\027ba5b5-6226-4b3f-bedb-ff7411d797c0-6d1f4bb1-dcdd-4a01-b092-c608f498e9fe.png',
        'type': 'cat',
        'z_index': 15,
    },
    'cat_calico': {
        'path': r'C:\Users\joser\.t3\userdata\attachments\027ba5b5-6226-4b3f-bedb-ff7411d797c0-62df1225-7e97-4015-ae93-1b4ebaedea9c.png',
        'type': 'cat',
        'z_index': 15,
    },
    'turntable': {
        'path': r'C:\Users\joser\.t3\userdata\attachments\027ba5b5-6226-4b3f-bedb-ff7411d797c0-acf3babf-e59b-43c2-b214-422d279861b5.png',
        'type': 'interactive',
        'portal_id': 'turntable',
        'z_index': 18,
    },
    'notebook': {
        'path': r'C:\Users\joser\.t3\userdata\attachments\027ba5b5-6226-4b3f-bedb-ff7411d797c0-da200747-f97e-4efd-bffe-c4c5ba102836.png',
        'type': 'desk_prop',
        'z_index': 22,
    },
    'mug': {
        'path': r'C:\Users\joser\.t3\userdata\attachments\027ba5b5-6226-4b3f-bedb-ff7411d797c0-8fde97c5-f74a-455a-af3f-d58478f107a1.png',
        'type': 'desk_prop',
        'z_index': 22,
    },
    'laptop': {
        'path': r'C:\Users\joser\.t3\userdata\attachments\027ba5b5-6226-4b3f-bedb-ff7411d797c0-f40d566c-223d-4dfc-af7a-b54696ec9ac0.png',
        'type': 'interactive',
        'portal_id': 'laptop',
        'z_index': 22,
    },
    'plant_left_fg': {
        'path': r'C:\Users\joser\.t3\userdata\attachments\027ba5b5-6226-4b3f-bedb-ff7411d797c0-71f951a7-1cdb-49c4-8eeb-f0897bb4d45f.png',
        'type': 'plant',
        'z_index': 25,
    },
    'plant_right_fg': {
        'path': r'C:\Users\joser\.t3\userdata\attachments\027ba5b5-6226-4b3f-bedb-ff7411d797c0-d4c736b6-ecd2-4f0f-8793-12e380957c41.png',
        'type': 'plant',
        'z_index': 25,
    },
}

manifest = {}

for name, info in raw_layers.items():
    src_path = info['path']
    im = Image.open(src_path)
    if info.get('is_bg'):
        out_file = f'{name}.webp'
        im.convert('RGB').save(os.path.join(OUT_DIR, out_file), 'WEBP', quality=90)
        im.save(os.path.join(OUT_DIR, f'{name}.png'), 'PNG')
        manifest[name] = {
            'file': f'{name}.png',
            'webp': f'{name}.webp',
            'is_bg': True,
            'width': CANVAS_W,
            'height': CANVAS_H,
        }
        print(f'Processed background: {im.size}')
        continue

    alpha = im.split()[-1]
    bbox = alpha.getbbox()
    if not bbox:
        print(f'Warning: {name} has no content!')
        continue

    min_x, min_y, max_x, max_y = bbox
    crop = im.crop(bbox)
    
    out_png = f'{name}.png'
    crop.save(os.path.join(OUT_DIR, out_png), 'PNG')
    
    left_pct = round((min_x / CANVAS_W) * 100, 4)
    top_pct = round((min_y / CANVAS_H) * 100, 4)
    width_pct = round(((max_x - min_x) / CANVAS_W) * 100, 4)
    height_pct = round(((max_y - min_y) / CANVAS_H) * 100, 4)

    manifest[name] = {
        'file': out_png,
        'type': info.get('type', 'element'),
        'portal_id': info.get('portal_id'),
        'z_index': info.get('z_index', 10),
        'bbox': [min_x, min_y, max_x, max_y],
        'pos': {
            'left': left_pct,
            'top': top_pct,
            'width': width_pct,
            'height': height_pct,
        },
        'dimensions': [max_x - min_x, max_y - min_y],
    }
    print(f'{name:16}: bbox={bbox}, pos={manifest[name]["pos"]}')

with open('src/lib/apartmentManifest.json', 'w') as f:
    json.dump(manifest, f, indent=2)

print('Manifest saved to src/lib/apartmentManifest.json')

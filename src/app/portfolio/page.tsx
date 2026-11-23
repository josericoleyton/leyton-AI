'use client';

import React from 'react';
import { PageTemplate } from '@/components/templates/PageTemplate';
import { Timeline } from '@/components/organisms/Timeline';
import { ProjectCard } from '@/components/molecules/ProjectCard';
import { SkillBadge } from '@/components/molecules/SkillBadge';
import { getPortfolioContent } from '@/lib/content';
import { Compass, GraduationCap, Code2 } from 'lucide-react';

export default function PortfolioPage() {
  const content = getPortfolioContent();

  return (
    <PageTemplate
      title={content.title}
      subtitle={content.subtitle}
      objectKey="laptop"
    >
      {/* 1. Work Philosophy */}
      <section className="p-6 rounded-2xl bg-cream-dark/60 border border-espresso/10">
        <div className="flex items-center space-x-2 text-terracotta mb-2">
          <Compass className="w-4 h-4" />
          <h2 className="text-xs font-bold uppercase tracking-wider text-espresso">
            Filosofía de Trabajo
          </h2>
        </div>
        <p className="text-base font-serif italic text-espresso/90 leading-relaxed">
          &ldquo;{content.philosophy}&rdquo;
        </p>
      </section>

      {/* 2. Featured Project */}
      <section className="space-y-4">
        <h2 className="text-xl font-serif font-bold text-espresso flex items-center space-x-2">
          <span>Proyecto Actual Destacado</span>
        </h2>
        <ProjectCard
          name={content.currentProject.name}
          description={content.currentProject.description}
          status={content.currentProject.status}
          tags={content.currentProject.tags}
          link={content.currentProject.link}
        />
      </section>

      {/* 3. Professional Timeline */}
      <section className="space-y-6">
        <h2 className="text-xl font-serif font-bold text-espresso">
          Trayectoria Profesional
        </h2>
        <Timeline items={content.timeline} />
      </section>

      {/* 4. Tech Stack */}
      <section className="space-y-4">
        <h2 className="text-xl font-serif font-bold text-espresso flex items-center space-x-2">
          <Code2 className="w-5 h-5 text-terracotta" />
          <span>Stack Tecnológico & Habilidades</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {content.techStack.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-2xl bg-cream-light border border-espresso/10"
            >
              <h3 className="text-sm font-semibold text-espresso mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Education */}
      <section className="space-y-4">
        <h2 className="text-xl font-serif font-bold text-espresso flex items-center space-x-2">
          <GraduationCap className="w-5 h-5 text-sage" />
          <span>Formación & Estudios</span>
        </h2>
        <div className="space-y-3">
          {content.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-cream-light border border-espresso/10 flex justify-between items-start"
            >
              <div>
                <h3 className="text-base font-semibold text-espresso">{edu.institution}</h3>
                <p className="text-xs text-espresso/70">{edu.degree}</p>
                {edu.description && (
                  <p className="text-xs text-espresso/80 mt-1">{edu.description}</p>
                )}
              </div>
              <span className="text-xs font-mono font-medium text-terracotta bg-cream-dark px-2.5 py-1 rounded-full">
                {edu.year}
              </span>
            </div>
          ))}
        </div>
      </section>
    </PageTemplate>
  );
}

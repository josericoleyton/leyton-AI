'use client';

import React from 'react';
import { IllustratedPageHeader } from '@/components/molecules/IllustratedPageHeader';

interface PageTemplateProps {
  title: string;
  subtitle: string;
  objectKey: string;
  children: React.ReactNode;
}

export function PageTemplate({
  title,
  subtitle,
  objectKey,
  children,
}: PageTemplateProps) {
  return (
    <article className="min-h-screen bg-cream text-espresso pt-20 pb-28">
      <main className="max-w-4xl mx-auto px-4 sm:px-6">
        <IllustratedPageHeader
          title={title}
          subtitle={subtitle}
          objectKey={objectKey}
        />
        <div className="space-y-12">
          {children}
        </div>
      </main>
    </article>
  );
}

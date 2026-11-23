'use client';

import React from 'react';
import { PageTemplate } from '@/components/templates/PageTemplate';
import { BookCard } from '@/components/molecules/BookCard';
import { getBooksContent } from '@/lib/content';
import { BookOpen, BookmarkCheck } from 'lucide-react';

export default function BooksPage() {
  const content = getBooksContent();

  return (
    <PageTemplate
      title={content.title}
      subtitle={content.subtitle}
      objectKey="books"
    >
      {/* Currently Reading */}
      <section className="p-6 rounded-2xl bg-cream-dark/60 border border-espresso/10">
        <div className="flex items-center space-x-2 text-indigo-900 mb-2">
          <BookmarkCheck className="w-4 h-4" />
          <h2 className="text-xs font-bold uppercase tracking-wider text-espresso">
            Leyendo Actualmente
          </h2>
        </div>
        <h3 className="text-xl font-serif font-bold text-espresso">
          {content.currentlyReading.title}
        </h3>
        <p className="text-xs font-medium text-espresso/70 mb-3">
          por {content.currentlyReading.author}
        </p>
        <p className="text-sm text-espresso/80 leading-relaxed italic bg-cream/70 p-4 rounded-xl border border-espresso/5">
          &ldquo;{content.currentlyReading.thought}&rdquo;
        </p>
      </section>

      {/* Reading List */}
      <section className="space-y-4">
        <div className="flex items-center space-x-2 text-espresso">
          <BookOpen className="w-5 h-5 text-terracotta" />
          <h2 className="text-xl font-serif font-bold">Lecturas Esenciales</h2>
        </div>
        <div className="space-y-3">
          {content.readingList.map((book) => (
            <BookCard
              key={book.title}
              title={book.title}
              author={book.author}
              genre={book.genre}
              takeaway={book.takeaway}
              highlight={book.highlight}
            />
          ))}
        </div>
      </section>
    </PageTemplate>
  );
}

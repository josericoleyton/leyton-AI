import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import '@/styles/globals.css';
import { NavigationProvider } from '@/context/NavigationContext';
import { Navbar } from '@/components/molecules/Navbar';
import { MiniPlayer } from '@/components/organisms/MiniPlayer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jose Leyton — Apartamento & Portafolio',
  description:
    'Un espacio interactivo inspirado en la vida lenta, el diseño reflexivo y la tranquilidad cotidiana.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream text-espresso antialiased font-sans selection:bg-terracotta selection:text-cream min-h-screen">
        <NavigationProvider>
          <Navbar />
          {children}
          <MiniPlayer />
        </NavigationProvider>
      </body>
    </html>
  );
}

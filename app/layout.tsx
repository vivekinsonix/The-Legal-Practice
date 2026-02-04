import { ThemeModeScript } from 'flowbite-react';
import type { Metadata } from 'next';
import { Comfortaa, Libre_Baskerville } from 'next/font/google';
import { ThemeInit } from '../.flowbite-react/init';

import './globals.css';

import CookieBanner from './components/CookieBanner/CookieBanner';
import Header from './components/drawer/header';
import GlobalSpinner from './components/spinner/GlobalSpinner';
import Toaster from './components/toaster/Toaster';
import { DrawerProvider } from './context/DrawerContext';
import Footer from './layout/footer';
import ThemeWrapper from './theme';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans', // default body / UI font
});

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading', // headings / serif font
});

export const metadata: Metadata = {
  title: 'Best Wembley Solicitors | The Legal Practice Expertise',
  description: 'Best Wembley solicitors providing expert legal services. The Legal Practice delivers personalised support in family, property, business law to meet your needs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${comfortaa.variable} ${libreBaskerville.variable}`}>
      <head>
        <ThemeModeScript />
      </head>

      <body className="font-sans bg-white dark:bg-white">
        <DrawerProvider>
          <ThemeWrapper>
            <ThemeInit />
            <Toaster />
            <GlobalSpinner />
            <Header />
            {children}
            <Footer />

            <div style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
              <CookieBanner />
            </div>
          </ThemeWrapper>
        </DrawerProvider>
      </body>
    </html>
  );
}

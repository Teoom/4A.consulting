import type { Metadata } from 'next';
import { Montserrat, Gudea } from 'next/font/google';
import PromoProvider from '@/providers/PromoProvider';

import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat-sans',
  weight: ['400', '500', '600', '700']
});

const gudea = Gudea({
  variable: '--font-gudea-sans',
  weight: '700'
});

export const metadata: Metadata = {
  title: '4A.Consulting',
  description: 'Тестовое задание'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body
        className={`${montserrat.variable} ${gudea.variable} antialiased`}
      >
        <PromoProvider>{children}</PromoProvider>
      </body>
    </html>
  );
}

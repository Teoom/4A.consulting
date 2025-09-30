import type { Metadata } from 'next';
import { Montserrat, Raleway } from 'next/font/google';
import PromoProvider from '@/providers/PromoProvider';

import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat-sans',
  weight: ['400', '500', '600', '700']
});

const raleway = Raleway({
  variable: '--font-raleway-sans',
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
        className={`${montserrat.variable} antialiased`}
      >
        <PromoProvider initialSeconds={10}>
          {children}
        </PromoProvider>
      </body>
    </html>
  );
}

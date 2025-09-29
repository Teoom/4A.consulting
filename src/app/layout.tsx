import type { Metadata } from 'next';
import { Montserrat, Raleway } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700']
});

const raleway = Raleway({
  variable: '--font-raleway',
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
    <html lang='en'>
      <body
        className={`${montserrat.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}

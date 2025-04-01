import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import { GitHub } from '@/styles/global';
import StyledComponentsRegistry from './registry';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Plataforma LoP',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={`${geistSans.variable}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <GitHub
          href='https://github.com/arthurdevv/plataforma-lop'
          target='_blank'
        />
      </body>
    </html>
  );
}

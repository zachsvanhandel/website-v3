import type { Metadata } from 'next';
import { Anonymous_Pro } from 'next/font/google';
import './globals.css';
import Nav from './nav';

const font = Anonymous_Pro({
  subsets: ['latin'],
  weight: '400'
});

export const metadata: Metadata = {
  title: 'Zach Van Handel',
  description: 'Software Engineer (Denver Metropolitan Area)'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <main className='container flex min-h-svh flex-col justify-center mx-auto p-8 p-lg-24 gap-6'>
          {children}

          <Nav />
        </main>
      </body>
    </html>
  );
}

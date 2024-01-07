import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'THE-GAME-SPACE',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className=''>
      <body className={`${inter.className} bg-skin-primary `}>{children}</body>
    </html>
  );
}

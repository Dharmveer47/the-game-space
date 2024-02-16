import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar/page';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'THE-GAME-SPACE',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='theme-dark m-2'>
      <body className={`${inter.className} bg-skin-primary `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar/page';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'THE-GAME-SPACE',
  description: '',
};
type Props = {
  children?: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang='en' className=''>
      <body className={`${inter.className} bg-skin-primary`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

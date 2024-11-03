import type { Metadata } from 'next';
import { Geologica } from 'next/font/google';
import './globals.css';
import Header from '@/layouts/header/header';
import Footer from '@/layouts/footer/footer';

const geologica = Geologica({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home page!',
  description: 'it is home!',
  icons: '/logo.svg	',
  openGraph: {
    type: 'website',
    title: 'Some-Company',
    url: 'https://vercel.com/aakismetklasnis-projects',
    siteName: 'Some-Company',
    description: 'description of a company',
    images: [
      {
        url: '/open-graph-img.jpg',
        width: 600,
        height: 300,
        alt: 'Logo of Some company',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={`${geologica.className} antialiased container mx-auto px-2 flex flex-col min-h-screen justify-between`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { Plus_Jakarta_Sans } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata = {
  title: 'Aniket Kulkarni — UI/UX Designer',
  description:
    'UI/UX Designer crafting intuitive, engaging, and human-centered digital products. Based in Mumbai.',
  metadataBase: new URL('https://aniketkulkarni.design'),
  openGraph: {
    title: 'Aniket Kulkarni — UI/UX Designer',
    description:
      'UI/UX Designer crafting intuitive, engaging, and human-centered digital products. Based in Mumbai.',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#0B0B0F',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="noise-overlay font-sans">
        {children}
        <Toaster position="bottom-right" theme="dark" />
      </body>
    </html>
  );
}

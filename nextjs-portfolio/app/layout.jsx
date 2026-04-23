import { Plus_Jakarta_Sans } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from './providers';
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aniket Kulkarni — UI/UX Designer',
    description:
      'UI/UX Designer crafting intuitive, engaging, and human-centered digital products. Based in Mumbai.',
    url: 'https://aniketkulkarni.design',
    siteName: 'Aniket Kulkarni',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aniket Kulkarni — UI/UX Designer',
    description: 'UI/UX Designer crafting intuitive, engaging, and human-centered digital products.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0B0F' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable} suppressHydrationWarning>
      <body className="noise-overlay font-sans bg-[rgb(var(--bg-rgb))] text-[rgb(var(--text-rgb))] transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" theme="system" />
        </ThemeProvider>
      </body>
    </html>
  );
}

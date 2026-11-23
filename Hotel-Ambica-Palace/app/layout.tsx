import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const viewport: Viewport = {
  themeColor: '#3b2417',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  applicationName: 'Hotel Ambica Palace',
  title: {
    default: 'Hotel Ambica Palace | Hotel Near AIIMS & Safdarjung Hospital, New Delhi',
    template: '%s | Hotel Ambica Palace, New Delhi',
  },
  description: 'Stay at Hotel Ambica Palace in Safdarjung Enclave, New Delhi, an 8-minute walk from Safdarjung Hospital and near AIIMS. Clean AC rooms, free Wi-Fi, 24-hour front desk, couple friendly & local ID accepted.',
  keywords: [
    'Hotel Ambica Palace',
    'Hotel near AIIMS Delhi',
    'Hotel near Safdarjung Hospital',
    'Hotel in Safdarjung Enclave',
    'Budget hotel South Delhi',
    'Couple friendly hotel Delhi',
    'Hotel with local ID accepted Delhi',
    'Rooms near AIIMS',
  ],
  authors: [{ name: 'Hotel Ambica Palace' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Hotel Ambica Palace',
    locale: 'en_IN',
    title: 'Hotel Ambica Palace | Hotel Near AIIMS & Safdarjung Hospital, New Delhi',
    description: 'Clean AC rooms, free Wi-Fi, 24-hr front desk, couple friendly & local ID accepted in Safdarjung Enclave, South Delhi.',
    images: [{ url: '/img/ext-wide.jpg', width: 1200, height: 800, alt: 'Hotel Ambica Palace in Safdarjung Enclave, New Delhi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Ambica Palace | Near AIIMS, New Delhi',
    description: 'Clean AC rooms, free Wi-Fi, 24-hr front desk, couple friendly & local ID accepted in Safdarjung Enclave, South Delhi.',
    images: ['/img/ext-wide.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /></head><body>{children}</body></html>;
}

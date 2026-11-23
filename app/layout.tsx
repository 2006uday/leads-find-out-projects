import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  applicationName: 'Hotel Ambica Palace',
  title: { default: 'Hotel Ambica Palace | Near AIIMS, Safdarjung Enclave, New Delhi', template: '%s | Hotel Ambica Palace, New Delhi' },
  description: 'Stay at Hotel Ambica Palace in Safdarjung Enclave, New Delhi, near AIIMS and Safdarjung Hospital. Explore rooms, amenities, location and booking information.',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: { type: 'website', siteName: 'Hotel Ambica Palace', locale: 'en_IN', title: 'Hotel Ambica Palace | Near AIIMS, New Delhi', description: 'Explore rooms, amenities and location at Hotel Ambica Palace in Safdarjung Enclave, New Delhi.' },
  twitter: { card: 'summary_large_image', title: 'Hotel Ambica Palace | Near AIIMS, New Delhi' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /></head><body>{children}</body></html>;
}

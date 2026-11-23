import type { Metadata } from 'next';
import LegacyPage from './legacy-page';
import { homeJsonLd } from './seo-data';

const description = 'Hotel Ambica Palace in Safdarjung Enclave, New Delhi, offers air-conditioned rooms, free Wi-Fi and a 24-hour front desk near AIIMS and Safdarjung Hospital.';
export const metadata: Metadata = {
  title: 'Hotel Near AIIMS & Safdarjung Hospital, New Delhi',
  description,
  alternates: process.env.NEXT_PUBLIC_SITE_URL ? { canonical: '/' } : undefined,
  openGraph: { title: 'Hotel Ambica Palace | Near AIIMS, New Delhi', description, url: '/', images: [{ url: '/img/ext-wide.jpg', alt: 'Hotel Ambica Palace entrance in New Delhi' }] },
  twitter: { description, images: ['/img/ext-wide.jpg'] },
};

export default function HomePage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd).replace(/</g, '\\u003c') }} /><LegacyPage file="index.html" /></>;
}

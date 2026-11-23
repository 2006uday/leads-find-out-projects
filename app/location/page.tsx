import type { Metadata } from 'next';
import LegacyPage from '../legacy-page';
import { pageMetadata } from '../seo-data';
export const metadata: Metadata = pageMetadata('location');
export default function LocationPage() { return <LegacyPage file="location.html" />; }

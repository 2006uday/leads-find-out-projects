import type { Metadata } from 'next';
import LegacyPage from '../legacy-page';
import { pageMetadata } from '../seo-data';
export const metadata: Metadata = pageMetadata('services');
export default function ServicesPage() { return <LegacyPage file="services.html" />; }

import type { Metadata } from 'next';
import LegacyPage from '../legacy-page';
import { pageMetadata } from '../seo-data';
export const metadata: Metadata = pageMetadata('gallery');
export default function GalleryPage() { return <LegacyPage file="gallery.html" />; }

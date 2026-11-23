import type { Metadata } from 'next';
import LegacyPage from '../legacy-page';
import { pageMetadata } from '../seo-data';
export const metadata: Metadata = pageMetadata('rooms');
export default function RoomsPage() { return <LegacyPage file="rooms.html" />; }

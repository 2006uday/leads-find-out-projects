import type { Metadata } from 'next';
import LegacyPage from '../legacy-page';
import { pageMetadata } from '../seo-data';
export const metadata: Metadata = pageMetadata('book');
export default function BookPage() { return <LegacyPage file="book.html" />; }

import type { Metadata } from 'next';
import LegacyPage from '../legacy-page';
import { pageMetadata } from '../seo-data';
export const metadata: Metadata = pageMetadata('reviews');
export default function ReviewsPage() { return <LegacyPage file="reviews.html" />; }

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import Script from 'next/script';

const routeMap: Record<string, string> = {
  'index.html': '/', 'rooms.html': '/rooms', 'services.html': '/services', 'gallery.html': '/gallery',
  'location.html': '/location', 'reviews.html': '/reviews', 'book.html': '/book',
};

export default async function LegacyPage({ file }: { file: string }) {
  const source = await readFile(path.join(process.cwd(), file), 'utf8');
  const body = source.match(/<body[^>]*>([\s\S]*?)<script src="app\.js"><\/script><\/body>/i)?.[1] ?? '';
  const html = body
    .replace(/<svg width="0"[\s\S]*?<\/svg>/i, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/href="(index|rooms|services|gallery|location|reviews|book)\.html"/g, (_, slug: string) => `href="${routeMap[`${slug}.html`]}"`);
  return <><div dangerouslySetInnerHTML={{ __html: html }} /><Script src="/app.js" strategy="afterInteractive" /></>;
}

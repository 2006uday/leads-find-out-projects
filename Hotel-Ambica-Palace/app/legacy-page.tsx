import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import Script from 'next/script';

const routeMap: Record<string, string> = {
  'index.html': '/',
  'rooms.html': '/rooms',
  'services.html': '/services',
  'gallery.html': '/gallery',
  'location.html': '/location',
  'reviews.html': '/reviews',
  'book.html': '/book',
};

function getFilePath(file: string): string {
  const candidates = [
    path.join(process.cwd(), file),
    path.join(process.cwd(), 'Hotel-Ambica-Palace', file),
    path.resolve(__dirname, '..', '..', file),
    path.resolve(__dirname, '..', file),
  ];
  for (const c of candidates) {
    if (existsSync(c)) return c;
  }
  return candidates[0];
}

export default async function LegacyPage({ file }: { file: string }) {
  const targetPath = getFilePath(file);
  const source = await readFile(/*turbopackIgnore: true*/ targetPath, 'utf8');

  // Robust extraction of <body> contents
  let body = '';
  const bodyMatch = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    body = bodyMatch[1].replace(/<script[^>]*src=["']app\.js["'][^>]*><\/script>/gi, '');
  } else {
    body = source;
  }

  const html = body
    .replace(/<svg width="0"[\s\S]*?<\/svg>/i, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/href="(index|rooms|services|gallery|location|reviews|book)\.html"/g, (_, slug: string) => `href="${routeMap[`${slug}.html`]}"`);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Script src="/app.js" strategy="afterInteractive" />
    </>
  );
}

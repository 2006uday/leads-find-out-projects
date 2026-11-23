# Hotel Ambica Palace website

The site uses Next.js App Router and renders the seven existing pages as server-rendered routes. Start it with `npm install` and `npm run dev`; create a production build with `npm run build`.

## Before launch

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin (for example, `https://www.your-domain.com`) in the deployment environment. This enables absolute canonical URLs, the sitemap entries, and the property URL in structured data. Do not leave the example value from `.env.example` in production. Add the verified domain to Google Search Console and submit `/sitemap.xml` after launch.

Structured data intentionally omits unverified telephone, geo coordinates, and guest ratings. Keep business claims and policy details in page content accurate; update them if the hotel's current terms change.

# Gootap website

React, Vite and Tailwind. Run `npm ci`, then `npm run dev`. Production checks are `npm run typecheck` and `npm run build`. Vercel uses the Vite preset and `dist` output.

## Branding

`public/images/gootap-logo.png` is the complete logo rendered from the supplied Gootap PDF, with the page background and outer whitespace excluded. Letterforms, colours, symbol and trademark are preserved. `brand.logo` in `src/siteContent.js` configures the shared header/footer logo and device illustration branding. `gootap-mark.png` is the symbol from the same PDF, used for the favicon and contact section.

## Content

- `src/siteContent.js`: device prices and availability, planned systems, FAQ, contact details, navigation, SEO and form labels.
- `src/components/Hero.tsx`: opening message and links to both ranges.
- `src/components/Pricing.tsx`: device carousel and planned-system comparison.
- `src/components/Objective.tsx`, `Problem.tsx`, `Contact.tsx`: supporting section headings and layouts.
- `src/index.css`: responsive visual system. Design decisions are recorded in `DESIGN.md`.

Devices retain the supplied range: PVC RM139, Card RM49, Wall RM139, Acrylic RM189 and LED RM289. PVC is marked available; the remaining devices are coming soon. Only available devices open the enquiry form. Product illustrations are labelled; their QR symbols are decorative.

Starter RM1,390 and Plus RM2,390 are planned packages, with proposed prices and specifications subject to confirmation. The site does not promise completed software, verified payment announcements or guaranteed review ratings.

WhatsApp enquiries open with a prefilled message. Visitors must send it themselves. No payment is taken, order confirmed or customer data stored by this site. The connected GitHub account must have repository write access before the changes can be published to the existing Vercel site.

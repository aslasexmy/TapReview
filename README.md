# TaptoGo™ — TapReview website update

React + Vite + Tailwind CSS, retaining the original project's rounded cards and simple component structure. Apple system fonts are used throughout. No database or paid service is required.

## Run and build

Use Node.js 22 or newer:

```sh
npm ci
npm run dev
npm run typecheck
npm run lint
npm run build
npm run preview
```

`dist/` contains the production website. On Vercel, use the Vite preset, build command `npm run build`, and output folder `dist`. Pushing to the branch connected to Vercel should trigger its deployment; confirm success in Vercel.

## Change content in ONE file

All editable page content is in **`src/siteContent.js`**:

- **Text and buttons:** edit the matching section. Use normal punctuation such as ’ or — directly; do not type literal Unicode codes into JSX.
- **Prices:** edit each product's numeric `price`. Product cards, order totals, and WhatsApp messages calculate from the same number.
- **Availability:** use `available` or `comingSoon`. Only available products open the order form. Card NFC can be ordered independently.
- **Product images:** upload photographs to `public/images/`, then enter `/images/your-photo.webp` in the product's `image` field and edit `imageAlt`. Empty or broken images fall back to labelled illustrations. The illustrative QR is decorative, not a real review link.
- **Dimensions:** edit the PVC product's `dimensions` field.
- **WhatsApp:** `contact.whatsappNumber` is `601162988960`, the international form of 01162988960. Use country code and digits only. `displayNumber` controls the readable display. Messages are also editable here.
- **Sections:** switch individual `visibility` settings to `true` or `false`; navigation adjusts automatically.
- **SEO and copyright:** edit `seo` and `footer`.

## Replace the top-left logo

The logo is an actual image element, not text drawn in the navigation component. The supplied SVG is a temporary TaptoGo wordmark.

1. Upload your logo to `public/images/`, for example `my-logo.png`.
2. In **`src/siteContent.js`**, change `brand.logo` to `/images/my-logo.png`.
3. Update `brand.logoAlt` if needed.

Transparent PNG, WebP, or SVG works. A wide logo around a 4:1 ratio fits well. The CSS preserves the proportions; a text fallback appears if the image cannot load.

## Change appearance

Edit the labelled colour, typography, corner, and shadow variables at the top of `src/index.css`. San Francisco is used automatically on Apple devices, with readable system fonts elsewhere. No external fonts are downloaded.

## What was corrected

- TapReview branding and outdated pricing replaced with the five TaptoGo products and their actual availability.
- Testimonials removed completely, together with fabricated ratings, customer counts, review totals, and growth percentages.
- Literal Unicode escape text fixed by using normal English punctuation.
- Invented contact details, guarantees, warranties, delivery promises, and lifetime service claims removed.
- The non-sending contact form removed. Buttons open a properly encoded WhatsApp conversation with the supplied number.
- Shared services accurately state the three-month analytics period and upcoming ecosystem status.
- Accessible ordering modal, keyboard carousel controls, native FAQ controls, mobile navigation, image fallbacks, and reduced-motion support included.

Opening WhatsApp does not send the message automatically, take payment, or confirm an order. Product totals exclude unconfirmed delivery charges. No customer details are stored by the website. Product photography still needs to be supplied.

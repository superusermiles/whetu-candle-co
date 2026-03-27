# Whetū Candle Co. — Development Handoff

## Tech Setup
- **Framework:** Next.js 14+ App Router in `site/`
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Google Fonts:**
  - `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Manrope:wght@400;500;600;700&display=swap`
- **Tailwind theme tokens:**
```ts
colors: {
  primary: '#6B5A46',
  secondary: '#A78F6A',
  accent: '#C9B8A3',
  background: '#F5F0E7',
  text: '#2E2A26',
  muted: '#DCCFBE',
  dark: '#3D342C'
},
fontFamily: {
  heading: ['Cormorant Garamond', 'serif'],
  body: ['Manrope', 'sans-serif']
},
borderRadius: {
  sm: '6px',
  md: '14px',
  lg: '24px',
  xl: '36px'
},
boxShadow: {
  soft: '0 8px 24px rgba(46, 42, 38, 0.08)',
  medium: '0 16px 40px rgba(46, 42, 38, 0.12)',
  hard: '0 24px 70px rgba(46, 42, 38, 0.18)'
}
```
- **Additional npm packages:**
  - `lucide-react` for simple line icons
  - `clsx` for conditional classes

## Component Breakdown

### `SiteHeader`
- **Purpose:** Sticky navigation with logo, links, and enquiry CTA.
- **Props:** `currentPath?: string`
- **Layout:** Horizontal flex bar, transparent over hero and solid flax background after scroll.
- **Responsive:** Desktop shows inline links. Mobile uses a simple sheet or dropdown with stacked links.

### `LogoMark`
- **Purpose:** Render inline logo SVG.
- **Props:** `variant: 'primary' | 'reversed' | 'mono'`, `className?: string`
- **Layout:** Inline-block SVG.
- **Responsive:** Scales cleanly from header size to footer lockup.

### `HeroSplit`
- **Purpose:** Home hero with copy and layered images.
- **Props:** `eyebrow`, `title`, `body`, `primaryCta`, `secondaryCta`, `images`
- **Layout:** 2-column grid with overlapping image cards.
- **Responsive:** Stacks to single column on tablet/mobile, image stack becomes vertical.

### `FeaturedScentCard`
- **Purpose:** Highlight key candle products.
- **Props:** `name`, `notes`, `mood`, `burnTime`, `image`, `alt`
- **Layout:** Rounded card with top image, text body, and pill badge.
- **Responsive:** Three-up desktop, one-up mobile.

### `SectionIntro`
- **Purpose:** Reusable heading + paragraph block for sections.
- **Props:** `eyebrow?`, `title`, `body`, `align?: 'left' | 'center'`
- **Layout:** Max width constrained text block.
- **Responsive:** Center alignment on compact sections, left alignment elsewhere.

### `ValuePillars`
- **Purpose:** Display three core value statements.
- **Props:** Array of items with `icon`, `title`, `body`
- **Layout:** Three-column grid with circular icon holders.
- **Responsive:** Stack vertically on mobile.

### `EditorialImageText`
- **Purpose:** Reusable about-style section with image and narrative copy.
- **Props:** `image`, `alt`, `title`, `body`, `quote?`, `reverse?: boolean`
- **Layout:** 2-column asymmetrical grid.
- **Responsive:** Stacks with image first on mobile.

### `IngredientStrip`
- **Purpose:** Three ingredient/process cards.
- **Props:** Array of `title`, `body`, `image`, `alt`
- **Layout:** Horizontal cards with image thumbnails.
- **Responsive:** Grid becomes single column on mobile.

### `GalleryMasonry`
- **Purpose:** Show supporting lifestyle imagery.
- **Props:** Array of images.
- **Layout:** Three uneven columns for an editorial feel.
- **Responsive:** Stacked cards or horizontal scroll on mobile.

### `ProductCard`
- **Purpose:** Display candle product info in the shop grid.
- **Props:** `name`, `notes`, `finish`, `burnTime`, `price`, `image`, `alt`
- **Layout:** Image top, details middle, enquiry CTA bottom.
- **Responsive:** 3 columns desktop, 2 tablet, 1 mobile.

### `WholesaleForm`
- **Purpose:** Collect wholesale enquiries.
- **Props:** none, or optional `onSubmit`
- **Layout:** Labeled stacked inputs with grouped two-column rows on desktop.
- **Responsive:** All fields single-column on mobile.

### `SiteFooter`
- **Purpose:** Brand sign-off, quick nav, contact details.
- **Props:** none
- **Layout:** Centered dark section with logo, nav row, contact copy.
- **Responsive:** Elements stack with increased spacing on smaller screens.

## Page Routes

### `/`
- **Title:** Whetū Candle Co. | Scents of Aotearoa, poured by hand.
- **Meta description:** Boutique hand-poured soy candles from Raglan, New Zealand — earthy home fragrance inspired by coast, clay, and slow living.
- **Sections:** Header, HeroSplit, Featured Scents, About Snippet, Value Pillars, Wholesale CTA, Footer

### `/about`
- **Title:** About Whetū Candle Co. | Our maker story and studio values
- **Meta description:** Meet the maker behind Whetū Candle Co. and learn about our soy wax, thoughtful ingredients, and sustainability commitments.
- **Sections:** Header, Intro Hero, Maker Story, Ingredients, Sustainability Commitment, Studio Gallery, Contact Prompt, Footer

### `/shop-contact`
- **Title:** Shop & Wholesale Enquiries | Whetū Candle Co.
- **Meta description:** Explore six signature candles from Whetū Candle Co. and get in touch for wholesale, styling, and stockist enquiries.
- **Sections:** Header, Intro, Product Grid, Ritual Banner, Wholesale Form, Contact Details, Footer

## Content

### Global Navigation
- **Logo text:** Whetū Candle Co.
- **Links:** Home / About / Shop & Contact
- **Header CTA:** Wholesale enquiries

### Home Page Copy
**Eyebrow:** Hand-poured in Raglan, New Zealand

**Hero heading:** Scents of Aotearoa, poured by hand.

**Hero body:** Small-batch soy candles inspired by west coast light, native botanicals, and the quiet rituals of home. Designed to warm a room without overpowering it.

**Primary CTA:** Browse the collection
**Secondary CTA:** Our story

**Featured scents section eyebrow:** Signature pours
**Featured scents heading:** Six scents shaped by coast, clay, and evening light.
**Featured scents intro:** A curated collection of grounded, layered fragrances made for slow mornings, dinner-party glow, and gifting with taste.

**Scent card 1**
- Name: Dune
- Notes: Driftwood, flax, sea salt
- Mood: Soft, mineral, sun-warmed.
- Burn time: 45 hours

**Scent card 2**
- Name: Nikau
- Notes: Green fig, moss, crushed leaf
- Mood: Fresh, shaded, restorative.
- Burn time: 45 hours

**Scent card 3**
- Name: Ember
- Notes: Cedar, amber, toasted vanilla
- Mood: Low light, linen, slow evenings.
- Burn time: 50 hours

**About snippet eyebrow:** Our studio
**About snippet heading:** Crafted in small runs, with materials chosen to be used and reused.
**About snippet body:** Whetū began as a quiet studio practice in Raglan — pouring candles that feel grounded in place, generous in scent, and beautiful enough to leave out long after the flame is gone.
**About snippet link:** Read the maker story

**Values heading:** Made with intention
**Value 1 title:** Pure soy wax
**Value 1 body:** Clean-burning soy for a steady, even glow.
**Value 2 title:** Reusable vessels
**Value 2 body:** Designed to live on as keepsakes, planters, or storage.
**Value 3 title:** Small-batch pours
**Value 3 body:** Mixed and poured by hand for consistency and character.

**Wholesale CTA heading:** Stock Whetū in your space.
**Wholesale CTA body:** We partner with boutiques, interior stylists, hospitality spaces, and thoughtful gift stores across Aotearoa.
**Wholesale CTA button:** Start a wholesale enquiry

### About Page Copy
**Intro eyebrow:** Meet the maker
**Intro heading:** A candle studio shaped by coast, calm, and careful process.
**Intro body:** Whetū Candle Co. was built around the idea that scent can hold a sense of place. From a small Raglan studio, each batch is poured by hand with a focus on balance, burn quality, and understated beauty.

**Maker story heading:** From evening ritual to studio craft.
**Maker story body:** Founder Maia started Whetū after years of collecting home fragrance that looked beautiful but burned too strongly or left little behind beyond the first impression. She wanted candles that felt softer, more grounded, and more connected to home. What began at the kitchen bench became a dedicated studio practice: testing wax blends, refining fragrance throw, and designing vessels that suit a shelf as much as a lit table. Today, every pour still happens in small measured runs, with each scent developed to feel atmospheric rather than overpowering.

**Pull quote:** “I wanted each candle to feel like something you’d keep close — a small object that changes the mood of a room without demanding attention.”

**Ingredients heading:** What goes into each pour
**Ingredient 1 title:** Soy wax
**Ingredient 1 body:** Plant-based soy wax for a smooth surface, clean burn, and gentle scent release.
**Ingredient 2 title:** Cotton wicks
**Ingredient 2 body:** Lead-free cotton wicks chosen for an even flame and dependable performance.
**Ingredient 3 title:** Fragrance blends
**Ingredient 3 body:** Layered fragrance compositions that lean earthy, mineral, and quietly floral.

**Sustainability heading:** Sustainability, kept practical.
**Sustainability body:** We focus on choices that make sense over time: recyclable outer packaging, reusable jars, measured small-batch production, and local sourcing where possible. It is a commitment to doing better carefully, not claiming perfection loudly.

**Commitments:**
- Recyclable packaging with minimal excess
- Reusable vessels designed for second life
- Small-run production to reduce waste
- Local and low-waste sourcing where practical

**Gallery heading:** The world of Whetū
**Gallery body:** Natural textures, warm corners, and coastal calm — the interiors and details that shape the brand.

**Contact prompt heading:** Looking to stock Whetū?
**Contact prompt button:** Visit Shop & Contact

### Shop / Contact Page Copy
**Intro eyebrow:** Collection + enquiries
**Intro heading:** Signature candles for shelves, gifting, and slow-lit rooms.
**Intro body:** Explore the core Whetū range below. For wholesale orders, collaborations, or styling enquiries, use the form and we’ll be in touch within three working days.

**Stats:**
- Hand-poured in Raglan
- Soy wax blend
- Reusable vessels

**Products:**
1. **Dune** — Driftwood, flax, sea salt / Matte sand vessel / 45 hours / NZ$42
2. **Nikau** — Green fig, moss, crushed leaf / Stone vessel / 45 hours / NZ$42
3. **Ember** — Cedar, amber, toasted vanilla / Smoked clay vessel / 50 hours / NZ$44
4. **Tide** — Citrus peel, sage, white wood / Soft oat vessel / 45 hours / NZ$42
5. **Harbour** — Black tea, rain, birch / Warm grey vessel / 50 hours / NZ$44
6. **Bloom** — Mānuka honey, jasmine, dry hay / Brushed shell vessel / 45 hours / NZ$42

**Product CTA label:** Enquire about this scent

**Ritual banner heading:** Fragrance for homes that favour texture, calm, and character.
**Ritual banner body:** Each candle is designed to sit easily among linen, timber, ceramics, and the everyday rituals that make a home feel lived in.

**Form heading:** Wholesale enquiries
**Form intro:** Tell us about your store, project, or hospitality space and we’ll send current scent notes, pricing, and lead times.

**Form labels:**
- Full name
- Business name
- Email address
- Phone number
- Store location
- Enquiry type
- Message

**Enquiry type options:**
- Wholesale stockist
- Interior styling project
- Hospitality / accommodation
- Press / collaboration

**Submit button:** Send enquiry

**Contact support heading:** Prefer a direct introduction?
**Contact support body:** Email hello@whetucandleco.nz or message @whetucandleco on Instagram. We reply to wholesale enquiries within three working days.

### Footer Copy
- **Brand line:** Hand-poured soy candles inspired by Aotearoa’s coast and quiet interiors.
- **Links:** Home / About / Shop & Contact
- **Contact:** hello@whetucandleco.nz
- **Instagram:** @whetucandleco
- **Location:** Raglan, New Zealand
- **Sustainability note:** Reusable vessels. Recyclable packaging. Small-batch by design.
- **Copyright:** © 2026 Whetū Candle Co. All rights reserved.

## Image References
1. **Home hero main**
   - URL: https://images.unsplash.com/photo-1603006905003-be475563bc59?w=900&h=1200&fit=crop
   - Dimensions: 900×1200
   - Alt: Hand-poured candle styled on a warm neutral surface with soft morning light.
   - Placement: Home hero large image.
2. **Home hero detail**
   - URL: https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?w=700&h=820&fit=crop
   - Dimensions: 700×820
   - Alt: Minimal candle and vessel styling with earthy shadows and a muted palette.
   - Placement: Home hero overlap image.
3. **Featured / product image A**
   - URL: https://images.unsplash.com/photo-1602874801006-e26f3f93f0a7?w=800&h=900&fit=crop
   - Dimensions: 800×900
   - Alt: Candle in a glass vessel beside dried botanicals.
   - Placement: Featured scents, Shop card 1.
4. **Featured / product image B**
   - URL: https://images.unsplash.com/photo-1612198527270-6f0c8d7a4f2d?w=800&h=900&fit=crop
   - Dimensions: 800×900
   - Alt: Neutral-toned candle and home decor styling on a shelf.
   - Placement: Featured scents, optional secondary product use.
5. **Featured / product image C**
   - URL: https://images.unsplash.com/photo-1608181831718-4f830ddb0c2d?w=800&h=900&fit=crop
   - Dimensions: 800×900
   - Alt: Candle vignette with warm low-angle light and ceramic textures.
   - Placement: Featured scents, Shop card 2.
6. **About snippet / product image D**
   - URL: https://images.unsplash.com/photo-1517705008128-361805f42e86?w=900&h=1100&fit=crop
   - Dimensions: 900×1100
   - Alt: Studio-style arrangement of candles, vessels, and natural textures.
   - Placement: Home about snippet, Shop card 5.
7. **CTA / product image E**
   - URL: https://images.unsplash.com/photo-1616627561950-9f746e330187?w=1000&h=700&fit=crop
   - Dimensions: 1000×700
   - Alt: Warm neutral home scene with candlelit ambience.
   - Placement: Home CTA accent, Shop card 6.
8. **About intro panorama**
   - URL: https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&h=720&fit=crop
   - Dimensions: 1400×720
   - Alt: Warm, curated interior with natural light and relaxed styling.
   - Placement: About hero panorama.
9. **Maker portrait**
   - URL: https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=1100&fit=crop
   - Dimensions: 900×1100
   - Alt: Smiling woman in soft natural light, representing the founder and maker.
   - Placement: About maker story.
10. **Ingredient image A**
   - URL: https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=700&h=600&fit=crop
   - Dimensions: 700×600
   - Alt: Pale botanical stems and natural textures against a neutral backdrop.
   - Placement: About ingredients.
11. **Ingredient image B**
   - URL: https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700&h=600&fit=crop
   - Dimensions: 700×600
   - Alt: Hands carefully handling delicate material in a bright studio setting.
   - Placement: About ingredients.
12. **Ingredient image C**
   - URL: https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=700&h=600&fit=crop
   - Dimensions: 700×600
   - Alt: Glass bottles and fragrance materials arranged neatly on a work surface.
   - Placement: About ingredients.
13. **Sustainability image**
   - URL: https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&h=1100&fit=crop
   - Dimensions: 900×1100
   - Alt: Sunlit neutral interior with reusable objects and natural materials.
   - Placement: About sustainability block.
14. **Gallery image A**
   - URL: https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&h=900&fit=crop
   - Dimensions: 700×900
   - Alt: Warm kitchen or studio corner with wooden textures and neutral styling.
   - Placement: About gallery.
15. **Gallery image B**
   - URL: https://images.unsplash.com/photo-1494526585095-c41746248156?w=700&h=900&fit=crop
   - Dimensions: 700×900
   - Alt: Serene bedroom or living corner with calming natural palette.
   - Placement: About gallery.
16. **Ritual banner image**
   - URL: https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&h=700&fit=crop
   - Dimensions: 900×700
   - Alt: Soft linen and natural decor details in warm coastal light.
   - Placement: Shop ritual banner.
17. **Form support image**
   - URL: https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900&h=1100&fit=crop
   - Dimensions: 900×1100
   - Alt: Thoughtfully styled workspace with papers, objects, and warm natural materials.
   - Placement: Shop contact form support image.

## Logo & Favicon SVG

### Logo SVG
```svg
<svg width="220" height="64" viewBox="0 0 220 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Whetū Candle Co.">
  <g transform="translate(8 6)">
    <path d="M20 0L23.5 8.5L32 12L23.5 15.5L20 24L16.5 15.5L8 12L16.5 8.5L20 0Z" fill="#A78F6A"/>
    <path d="M6 34C10 29 16 26 20 26C24 26 30 29 34 34" stroke="#6B5A46" stroke-width="2.5" stroke-linecap="round"/>
  </g>
  <text x="56" y="30" fill="#2E2A26" font-family="Cormorant Garamond, serif" font-size="28" font-weight="700">Whetū</text>
  <text x="56" y="50" fill="#6B5A46" font-family="Manrope, sans-serif" font-size="12" font-weight="600" letter-spacing="2">CANDLE CO.</text>
</svg>
```

### Favicon SVG
```svg
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="transparent"/>
  <path d="M32 10L35.8 22.2L48 26L35.8 29.8L32 42L28.2 29.8L16 26L28.2 22.2L32 10Z" fill="#A78F6A"/>
  <path d="M18 48C22 43.5 27 41 32 41C37 41 42 43.5 46 48" stroke="#6B5A46" stroke-width="3" stroke-linecap="round"/>
</svg>
```

## Responsive Notes
- **Desktop (1280px+):** Keep the split hero spacious, three-column product and scent grids, and asymmetrical editorial image/text sections.
- **Tablet (768px–1279px):** Reduce hero image overlap, shift some three-column grids to two columns, keep header nav visible if space allows.
- **Mobile (under 768px):** Stack all split layouts, convert multi-column rows to single column, increase tap targets, and make CTA buttons full width where appropriate.
- Keep heading line lengths short on mobile.
- Masonry gallery can become a vertical stack or horizontal snap scroll.
- Footer should stack into centered rows with generous spacing.

## Animation, SEO, and Accessibility Requirements
- Use restrained fade/translate entrance animations only where they do not hurt performance.
- Ensure all images use descriptive alt text.
- Keep color contrast AA-compliant, especially for gold accents on light backgrounds.
- Use semantic landmarks: `header`, `main`, `section`, `footer`, labeled form controls.
- Add metadata titles and descriptions per page.
- Buttons and links need clear focus states.
- Contact form should include accessible labels, error states, and success messaging placeholder.

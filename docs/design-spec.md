# Whetū Candle Co. — Design Spec

## Brand Direction
Whetū Candle Co. should feel like late-afternoon light falling across linen, clay, driftwood, and softly perfumed wax. The site needs to balance artisanal warmth with restrained product styling. It should feel elevated, local, and textural — less glossy ecommerce, more boutique studio journal.

## Color Palette
```css
--primary: #6B5A46;     /* peat brown / brand anchors, headings, buttons */
--secondary: #A78F6A;   /* coastal gold / accents, dividers, subtle highlights */
--accent: #C9B8A3;      /* oat clay / cards, pills, soft surfaces */
--background: #F5F0E7;  /* bone flax / main site background */
--text: #2E2A26;        /* volcanic charcoal / body copy */
--muted: #DCCFBE;       /* dune mist / borders, muted panels */
```

## Typography
- **Heading font:** Cormorant Garamond 600/700
- **Body font:** Manrope 400/500/600
- **Font scale:**
  - **h1:** 4rem / 64px desktop, 3rem / 48px tablet, 2.4rem / 38px mobile
  - **h2:** 2.75rem / 44px desktop, 2.25rem / 36px tablet, 2rem / 32px mobile
  - **h3:** 1.75rem / 28px desktop, 1.5rem / 24px tablet, 1.375rem / 22px mobile
  - **h4:** 1.25rem / 20px
  - **body:** 1rem / 16px
  - **small:** 0.9375rem / 15px
  - **caption:** 0.8125rem / 13px uppercase with letter spacing

## Spacing & Tokens
- **Border radius:**
  - `--radius-sm: 6px`
  - `--radius-md: 14px`
  - `--radius-lg: 24px`
  - `--radius-xl: 36px`
- **Shadow system:**
  - `--shadow-soft: 0 8px 24px rgba(46, 42, 38, 0.08)`
  - `--shadow-medium: 0 16px 40px rgba(46, 42, 38, 0.12)`
  - `--shadow-hard: 0 24px 70px rgba(46, 42, 38, 0.18)`
- **Section padding rhythm:** `py-16 md:py-24 lg:py-32`
- **Container:** `max-w-7xl` with generous horizontal padding (`px-5 md:px-8 lg:px-12`)

## Layout Architecture
- **Hero style:** Split editorial hero with oversized serif headline on the left and a stacked image composition on the right. One tall lifestyle image, one overlapping close-up detail image.
- **Navigation:** Slim sticky top bar with transparent background over hero, then shifts to a soft flax solid background on scroll. Wordmark left, three text links center/right, rounded enquiry button.
- **Section rhythm:** Alternating soft background shifts between flax, clay-tinted panels, and occasional dark brown bands. Content should move between symmetric calm and slightly offset editorial blocks.
- **Footer:** Dark contrasting band with centered logo, short brand line, navigation links, contact details, and a small sustainability note.
- **Overall density:** Airy and spacious, but with enough product detail to feel tangible and intentional.

## Page-by-Page Layout

### Home
**Section order:** Hero → Featured Scents → About Snippet → Studio Values → Wholesale CTA → Footer

1. **Hero**
   - Two-column grid: left column text aligned bottom-left, right column layered imagery.
   - Content: eyebrow “Hand-poured in Raglan”, large headline, short intro paragraph, primary CTA “Browse the collection”, secondary CTA “Our story”.
   - Right side: one portrait-oriented candle lifestyle image with a smaller overlapping ingredient/detail image.
   - Mobile: single column, imagery stacked beneath copy, CTAs full width.
   - Images:
     - https://images.unsplash.com/photo-1603006905003-be475563bc59?w=900&h=1200&fit=crop
     - https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?w=700&h=820&fit=crop

2. **Featured Scents**
   - Three-card grid on desktop, single column on mobile.
   - Each card includes scent name, notes, mood line, burn time badge.
   - Use muted clay card backgrounds with fine gold dividers.
   - Images:
     - https://images.unsplash.com/photo-1602874801006-e26f3f93f0a7?w=800&h=900&fit=crop
     - https://images.unsplash.com/photo-1612198527270-6f0c8d7a4f2d?w=800&h=900&fit=crop
     - https://images.unsplash.com/photo-1608181831718-4f830ddb0c2d?w=800&h=900&fit=crop

3. **About Snippet**
   - Offset two-column section with image left and copy right.
   - Content: studio intro, maker-led positioning, link to About page.
   - Mobile: image first, copy second.
   - Image:
     - https://images.unsplash.com/photo-1517705008128-361805f42e86?w=900&h=1100&fit=crop

4. **Studio Values**
   - Three-column icon/text row: Soy Wax, Reusable Vessels, Small-Batch Pouring.
   - Icons line-based, enclosed in soft circles.
   - No photography here; let typography breathe.

5. **Wholesale CTA**
   - Full-width dark band with centered copy and warm gold button.
   - Content encourages boutiques, stylists, and hospitality partners to enquire.
   - Background texture can be subtle gradient/noise.
   - Image accent:
     - https://images.unsplash.com/photo-1616627561950-9f746e330187?w=1000&h=700&fit=crop

### About
**Section order:** Intro Hero → Maker Story → Ingredients → Sustainability Commitment → Studio Gallery → Contact Prompt → Footer

1. **Intro Hero**
   - Single-column editorial header with centered heading and intro, followed by a wide panoramic studio/lifestyle image.
   - Image:
     - https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&h=720&fit=crop

2. **Maker Story**
   - Two-column grid with portrait image and longform story copy.
   - Pull quote in gold-accent box.
   - Mobile: stacked.
   - Image:
     - https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=1100&fit=crop

3. **Ingredients**
   - Three horizontal blocks covering soy wax, cotton wicks, and fragrance blends.
   - Each block uses a small supporting image and short paragraph.
   - Mobile: stacked cards.
   - Images:
     - https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=700&h=600&fit=crop
     - https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700&h=600&fit=crop
     - https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=700&h=600&fit=crop

4. **Sustainability Commitment**
   - Asymmetric section with checklist-style commitments left and image right.
   - Commitments: recyclable packaging, reusable jars, measured small runs, mindful local sourcing.
   - Image:
     - https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&h=1100&fit=crop

5. **Studio Gallery**
   - Three-image masonry strip.
   - Mobile: swipeable stacked cards.
   - Images:
     - https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&h=900&fit=crop
     - https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&h=900&fit=crop
     - https://images.unsplash.com/photo-1494526585095-c41746248156?w=700&h=900&fit=crop

6. **Contact Prompt**
   - Simple centered section with button to Shop / Contact.

### Shop / Contact
**Section order:** Header Intro → Product Grid → Scent Ritual Banner → Wholesale Enquiry Form → Contact Details / Footer

1. **Header Intro**
   - Left-aligned intro with page title and short explanation of retail/wholesale focus.
   - A small stat row underneath: hand-poured, soy wax, reusable vessels.

2. **Product Grid**
   - 3x2 product card grid desktop, 2 columns tablet, 1 column mobile.
   - Each card: image, scent name, notes, vessel finish, burn time, price, enquiry button.
   - Images:
     - https://images.unsplash.com/photo-1602874801006-e26f3f93f0a7?w=800&h=900&fit=crop
     - https://images.unsplash.com/photo-1608181831718-4f830ddb0c2d?w=800&h=900&fit=crop
     - https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?w=800&h=900&fit=crop
     - https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&h=900&fit=crop
     - https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&h=900&fit=crop
     - https://images.unsplash.com/photo-1616627561950-9f746e330187?w=800&h=900&fit=crop

3. **Scent Ritual Banner**
   - Full-bleed clay panel with short poetic copy about bringing landscape-inspired scent into the home.
   - Optional small image edge crop:
     - https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&h=700&fit=crop

4. **Wholesale Enquiry Form**
   - Two-column layout desktop: form left, contact/support copy right.
   - Fields: Name, Business Name, Email, Phone, Store Location, Enquiry Type, Message.
   - Mobile: stacked, full-width inputs.
   - Supporting image:
     - https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900&h=1100&fit=crop

5. **Contact Details**
   - Compact footer-prelude row with email, Instagram, Raglan location note, wholesale response time.

## Logo Design
- **Concept:** Minimal emblem + wordmark. A four-point star above a gently curved vessel line, paired with an elegant serif wordmark and small sans subtitle.
- **SVG code:**
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
- **Color variants:**
  - **Primary:** brown wordmark, gold star, charcoal supporting text on light background.
  - **Reversed:** flax/gold mark and text on dark brown background.
  - **Monochrome:** single-color charcoal or white.
- **Usage:** Minimum width 96px. Clear space equals the height of the star icon on all sides.

## Favicon Design
- **Concept:** Simplified four-point star with a small curved vessel line.
- **SVG code:**
```svg
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="transparent"/>
  <path d="M32 10L35.8 22.2L48 26L35.8 29.8L32 42L28.2 29.8L16 26L28.2 22.2L32 10Z" fill="#A78F6A"/>
  <path d="M18 48C22 43.5 27 41 32 41C37 41 42 43.5 46 48" stroke="#6B5A46" stroke-width="3" stroke-linecap="round"/>
</svg>
```
- **Colors:** coastal gold star and peat brown base line on transparent background.

## Image Plan

### Home
- Hero lifestyle image: https://images.unsplash.com/photo-1603006905003-be475563bc59?w=900&h=1200&fit=crop
  - **Alt:** Hand-poured candle styled on a warm neutral surface with soft morning light.
  - **Mood/style:** Tactile, calm, warm highlights, close editorial crop.
- Hero detail image: https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?w=700&h=820&fit=crop
  - **Alt:** Minimal candle and vessel styling with earthy shadows and a muted palette.
  - **Mood/style:** Clean, sculptural, artisanal.
- Featured scent card image 1: https://images.unsplash.com/photo-1602874801006-e26f3f93f0a7?w=800&h=900&fit=crop
  - **Alt:** Candle in a glass vessel beside dried botanicals.
  - **Mood/style:** Soft beige, natural, giftable.
- Featured scent card image 2: https://images.unsplash.com/photo-1612198527270-6f0c8d7a4f2d?w=800&h=900&fit=crop
  - **Alt:** Neutral-toned candle and home decor styling on a shelf.
  - **Mood/style:** Calm interior, boutique homeware feel.
- Featured scent card image 3: https://images.unsplash.com/photo-1608181831718-4f830ddb0c2d?w=800&h=900&fit=crop
  - **Alt:** Candle vignette with warm low-angle light and ceramic textures.
  - **Mood/style:** Earthy and evening-lit.
- About snippet image: https://images.unsplash.com/photo-1517705008128-361805f42e86?w=900&h=1100&fit=crop
  - **Alt:** Studio-style arrangement of candles, vessels, and natural textures.
  - **Mood/style:** Maker-focused, handcrafted atmosphere.
- Wholesale CTA image accent: https://images.unsplash.com/photo-1616627561950-9f746e330187?w=1000&h=700&fit=crop
  - **Alt:** Warm neutral home scene with candlelit ambience.
  - **Mood/style:** Inviting and premium.

### About
- Intro panorama: https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&h=720&fit=crop
  - **Alt:** Warm, curated interior with natural light and relaxed styling.
  - **Mood/style:** Elevated coastal interior.
- Maker portrait: https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=1100&fit=crop
  - **Alt:** Smiling woman in soft natural light, representing the founder and maker.
  - **Mood/style:** Genuine, approachable, artisan-led.
- Ingredients image 1: https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=700&h=600&fit=crop
  - **Alt:** Pale botanical stems and natural textures against a neutral backdrop.
  - **Mood/style:** Raw ingredient softness.
- Ingredients image 2: https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700&h=600&fit=crop
  - **Alt:** Hands carefully handling delicate material in a bright studio setting.
  - **Mood/style:** Craft and process.
- Ingredients image 3: https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=700&h=600&fit=crop
  - **Alt:** Glass bottles and fragrance materials arranged neatly on a work surface.
  - **Mood/style:** Refined apothecary detail.
- Sustainability image: https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&h=1100&fit=crop
  - **Alt:** Sunlit neutral interior with reusable objects and natural materials.
  - **Mood/style:** Responsible, airy, calm.
- Gallery image 1: https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&h=900&fit=crop
  - **Alt:** Warm kitchen or studio corner with wooden textures and neutral styling.
  - **Mood/style:** Lived-in artisan studio.
- Gallery image 2: https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&h=900&fit=crop
  - **Alt:** Layered home interior with natural textiles and warm daylight.
  - **Mood/style:** Quiet luxury, coastal warmth.
- Gallery image 3: https://images.unsplash.com/photo-1494526585095-c41746248156?w=700&h=900&fit=crop
  - **Alt:** Serene bedroom or living corner with calming natural palette.
  - **Mood/style:** Restful and domestic.

### Shop / Contact
- Product images 1-6: reuse the six product/lifestyle images above for a cohesive collection feel.
- Ritual banner image: https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&h=700&fit=crop
  - **Alt:** Soft linen and natural decor details in warm coastal light.
  - **Mood/style:** Atmospheric, subtle, textural.
- Wholesale form support image: https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900&h=1100&fit=crop
  - **Alt:** Thoughtfully styled workspace with papers, objects, and warm natural materials.
  - **Mood/style:** Boutique business, collaborative, editorial.

## Interaction & Motion
- Buttons lift by 2px on hover, background deepens slightly, and shadow shifts from soft to medium.
- Navigation links use a subtle gold underline grow animation.
- Product cards scale to `1.01` with image zoom on hover.
- Sections can fade upward on scroll with a restrained 300–500ms duration.
- Page transitions should be simple opacity transitions, not dramatic wipes.
- Form inputs glow with a faint gold ring on focus.
- Logo in header can subtly brighten on hover.
- Loading states should use warm skeleton blocks in muted flax tones.

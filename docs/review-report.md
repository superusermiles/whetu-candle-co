# Review Report: Whetū Candle Co.
**Status: FAIL**
**Live URL:** https://whetu-candle-co.vercel.app
**Date:** 2026-03-27

## Screenshots
- Desktop: site/qa/desktop.png
- Tablet: site/qa/tablet.png
- Mobile: site/qa/mobile.png

## Checklist
- [x] Site is live and accessible (HTTP 200)
- [x] All pages from brief exist and render
- [x] Content matches brief — no placeholder text
- [x] Images load on all pages
- [x] Logo present in header
- [x] Favicon present
- [x] Navigation works (all links)
- [x] Responsive layout holds at all viewports
- [x] Meta tags present (title, description, OG)
- [x] Color palette matches design spec
- [x] Typography matches design spec
- [x] Footer complete with contact info

## Issues Found
1. **Home / Featured Scents:** Prior issue is only partially resolved. The section intro now says “Three signature scents shaped by coast, clay, and evening light.” which matches the three displayed cards, but it still does not match the approved development handoff copy, which specifies “Six scents shaped by coast, clay, and evening light.” This creates a new mismatch against the handoff even though the card-count inconsistency is fixed.
2. **Global structured data:** The schema type is still `Store` in `site/app/layout.tsx`. The re-review requirement was to correct the schema type for the brand. Based on the brand/site, this remains uncorrected.
3. **Homepage metadata copy:** The live home page `<title>` is “Hand-Poured Soy Candles in Raglan | Whetū Candle Co.”, while the approved route metadata in the development handoff specifies “Whetū Candle Co. | Scents of Aotearoa, poured by hand.” This is not one of the four explicitly requested fixes, but it is still a handoff mismatch.
4. **About page metadata copy:** The live about page title is “About Whetū Candle Co. | Raglan Soy Candles” rather than the approved “About Whetū Candle Co. | Our maker story and studio values.”
5. **Shop / Contact metadata copy:** The live shop page title is “Wholesale Soy Candles in Raglan | Whetū Candle Co.” rather than the approved “Shop & Wholesale Enquiries | Whetū Candle Co.”
6. **Shop / Contact / Wholesale form heading:** The section shows both an eyebrow and an `h2` with the same text “Wholesale enquiries,” which reads as duplicated content in the rendered page.

## Verdict
This re-review is a **FAIL**. The live site is up, looks polished, is responsive, and the footer wholesale response-time detail is now present. The home hero heading also now matches the approved handoff copy, and the featured-scents section no longer mismatches the number of displayed cards. However, two key re-review items are still not fully resolved: the homepage featured-scents heading now conflicts with the approved handoff copy, and the structured data schema type remains incorrect in source. There are also remaining metadata mismatches versus the approved handoff on all three routes.
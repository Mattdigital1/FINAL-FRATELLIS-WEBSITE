# Fratelli's Italian Grille — Website Rebuild

A full multi-page static site for Fratelli's Italian Grille (Slidell, LA), rebuilt from the content live on fratellisitaliangrille.net. All copy — menu items, prices, wine list, about story, testimonials — was pulled directly from the existing site so nothing drifts off-brand.

## File structure

```
fratellis-site/
├── index.html         — Home (hero, intro, featured dishes, reviews teaser)
├── about.html         — Our story
├── menu.html          — Full dining menu + catering (16 sections with sticky sub-nav)
├── from-the-bar.html  — Wine list, cocktails, beer
├── testimonials.html  — Google + site reviews with 4.4 rating
├── contact.html       — Hours, address, embedded Google map, contact form
└── styles.css         — Shared stylesheet (palette, typography, components)
```

## Design

- **Palette:** cream (#fbf6ec), wine red (#8b1e2d), olive (#3f5632), gold (#c9a24a), deep ink (#2a1a14)
- **Typography:** Playfair Display (headings), Inter (body), Great Vibes (script flourishes). Loaded from Google Fonts.
- **Layout:** CSS Grid + Flexbox, mobile-responsive down to 375px. Sticky nav header, sticky sub-nav on the menu page.
- **No JS framework required.** Only a tiny inline `onclick` for the mobile hamburger menu. Ship-ready as static HTML.

## What's real vs. placeholder

- **Real:** Every menu dish and price, the entire wine list, specialty cocktails, beer, hours, phone number, address, and the 4 testimonials currently on the live Fratelli's testimonials page.
- **Real but unattributed:** Two additional review quotes pulled from public aggregators (Restaurant Guru, MenuPix). Only "Larry R." is a confirmed real reviewer — the others are labeled "Google Reviewer · Replace with real name" so you don't misattribute them. Swap placeholders against your Google Business Profile before going live.
- **Placeholder (flagged in comments):** The generic food-emoji tiles in hero/dish cards and the split-image blocks are CSS-generated stand-ins. Replace them with real photos once available — they're `<div class="fr-split__media">` or `<div class="fr-dish__image">`, just swap the background for a real image.

## Hosting

This is pure static HTML/CSS — host it anywhere:

- **Simplest:** Upload all 7 files to any web host (cPanel, Netlify drop, Vercel, Cloudflare Pages, GitHub Pages).
- **Preview locally:** Open `index.html` directly in a browser, or run `python3 -m http.server` from the folder.
- **To replace the live Wix site:** Export these files and migrate DNS to the new host, or import as custom code into the new host of your choice.

## Before you publish

1. Replace "Google Reviewer" placeholders in `testimonials.html` with real names from your Google Business Profile.
2. Replace the emoji/gradient image stand-ins with real food photography (see `.fr-split__media`, `.fr-dish__image`, `.fr-hero` background).
3. Wire the contact form up to a mail handler (Formspree, Netlify Forms, or a simple PHP script). Currently it's a client-side `alert()` placeholder.
4. Add a favicon and proper OG/meta images.
5. Verify the embedded Google map loads cleanly in your host's environment.

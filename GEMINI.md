# GEMINI.md — H S Logs Specification
> **Operational Partnership Rules:** All AI agents operating in this workspace (Antigravity CLI or Gemini CLI) must strictly adhere to the operational rules, pre-deployment summaries, and instant audit logging defined in [AGENTS.md](AGENTS.md).

---

## 1. Project Overview & Business Identity
- **Business Name:** H S Logs
- **Sister Business:** H S Garden Maintenance (`https://hsgardenmaintenance.co.uk`)
- **Proprietor / Client:** Hayden Swan
- **Phone / Text / WhatsApp:** `07714 415606`
- **Email:** `haydenswan21@gmail.com`
- **Location & Base:** Heathfield, East Sussex (TN21) — serving Heathfield, Cross in Hand, Horam, Hailsham, Uckfield, Mayfield, Burwash, Robertsbridge, and surrounding High Weald / East Sussex communities.
- **Official Domain:** `https://hslogs.co.uk`
- **Official Socials:** [Facebook Page](https://www.facebook.com/H-S-Gardening-maintenance-315414229382232)
- **Core Value Proposition:** Sourced locally from Forestry Commissions, seasoned in cord lengths, barn air-dried, and hand-processed directly by Hayden. Premium Prime, Beech & Ash firewood tested under 20% moisture content to give customers maximum burning heat, clean combustion, and peak efficiency every single fire. Delivered prompt (4–5 working days) for wood burners, open fires, and commercial pizza vans.

---

## 2. Core Service Offerings & Pricing Structure
1. **Ton Bag Loose (£80 inc. delivery):**
   - **Special Introductory Offer:** **£75** for new website customers with free delivery within 5 miles of Heathfield.
2. **Half Transit Tipper Load (£165 inc. delivery):**
   - Tipped directly onto customer driveway or storage yard.
3. **Full Transit Tipper Load (£330 inc. delivery):**
   - Bulk whole-season winter fuel for high-demand residential burners, estates, and wood-fired pizza ovens.
4. **Ordering Pipeline:**
   - Interactive web order form with 1-click WhatsApp order ticket generation (`07714 415606`) and direct email dispatch.
   - Cash on delivery or direct bank transfer upon drop-off.

---

## 3. Tech Stack & Architecture
- **Frontend Core:** Pure Semantic HTML5, Modular CSS3 (`style.css`), Vanilla JavaScript (`script.js`). Zero heavy framework overhead, 100/100 Core Web Vitals speed.
- **Image Optimization:** High-fidelity, WebP compressed imagery (46+ timber & delivery photos in `images/`).
- **Hero Video & Poster:** 100% authentic 18.0s buttery-smooth seamless continuous looping 720p HD MP4 (`images/logs_hero.mp4`, 3.6MB) and matching poster (`images/logs_hero_poster.webp`) generated from genuine operational photography (raw forestry lorry delivery, hydraulic splitter machine, loaded Transit tipper, Rose & Crown pub drop, customer driveway tip, and ready seasoned firewood). Subpixel floating-point Bicubic interpolation eliminates all stepped camera shake while preserving continuous cinematic pans and push-ins with seamless crossfade continuity. Zero AI hallucinations.
- **Interactive Lightbox:** Pure vanilla modal for full-size viewing of timber gallery & price flyer.
- **SEO & Structured Data:**
  - Semantic Multi-Entity Schema (`@graph` containing `LocalBusiness` and `FAQPage` JSON-LD) with geo-coordinates (`50.9686, 0.2524`), opening hours, explicit price range (`£75 - £330`), 15-town service coverage, and 5 interactive Q&As for Google PAA snippets. Eliminates nested catalog fragments to keep Search Console 100% clean of invalid Product snippet warnings.
  - Complete, unified `sitemap.xml` (all canonical endpoints) and `robots.txt`.
  - Brand entity disambiguation targeting High Weald postcodes (`TN21`, `TN22`, `BN27`, `TN20`, `TN6`, `TN19`, `TN32`, `TN33`) to prevent collision with HubSpot CLI.
  - Full Open Graph social tags across all pages (`index.html`, `gallery.html`, `order.html`, `contact.html`).
- **Version Control & GitHub Pages Deployment:**
  - Repository: `https://github.com/lovefilm2018/hslogs.git`
  - Default Branch: `main` (serves GitHub Pages live via `https://hslogs.co.uk`)
  - **Custom Domain & DNS:** Apex domain `hslogs.co.uk` routed to GitHub Pages 4 Anycast IPs (`185.199.108.153` ... `111.153`) and `www` CNAME to `lovefilm2018.github.io` via IONOS DNS. Enforced HTTPS with Let's Encrypt certificate.
  - **Google Analytics 4:** Property `H S Logs` active via Measurement ID `G-670565ZKYT` on all 4 endpoints (`index.html`, `gallery.html`, `order.html`, `contact.html`).
  - **Google Search Console & Business Profile:** Property verified, sitemap submitted, and full Google Business Profile product catalog documented in `GBP_OPTIMIZATION_GUIDE.md`.

---

## 4. Directory Schema
```text
HSLogs/
├── GEMINI.md                           # Technical specification & project truth
├── AGENTS.md                           # Operational rules & partnership protocol
├── CNAME                               # GitHub Pages custom domain binding (hslogs.co.uk)
├── GBP_OPTIMIZATION_GUIDE.md           # Field-by-field Google Business Profile optimization guide
├── .gitignore                          # Git tracking exclusions
├── index.html                          # Homepage, appliance specs, pricing packages & PAA FAQs
├── gallery.html                        # 46-photo firewood & delivery gallery with lightbox
├── order.html                          # Interactive order form (WhatsApp & email)
├── contact.html                        # Contact details & direct lines
├── style.css                           # Master responsive stylesheet with FAQ & appliance styles
├── script.js                           # Navigation, lightbox, FAQ accordion & order builder
├── sitemap.xml                         # Search engine sitemap
├── robots.txt                          # Crawler indexing instructions
├── favicon.ico                         # Favicon
├── AGY_HSLogs.bat                      # Antigravity CLI launcher (Medium Effort)
├── CLI_HSLogs.bat                      # Gemini CLI launcher
├── IDE_HSLogs.bat                      # Antigravity IDE launcher
└── images/                             # WebP imagery asset catalog
    ├── logo.png                        # H S Logs arch logo
    ├── prices.webp                     # Official price flyer graphic
    └── logs1.webp ... logs43.webp       # 43 high-resolution timber & delivery shots
```

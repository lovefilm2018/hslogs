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
- **Hero Video & Poster:** 100% authentic 16.0s seamless looping 720p HD MP4 (`images/logs_hero.mp4`, 3.9MB) and matching poster (`images/logs_hero_poster.webp`) generated from genuine operational photography (raw forestry lorry delivery, hydraulic splitter machine, loaded Transit tipper, Rose & Crown pub drop, and customer driveway deliveries). Zero AI hallucinations.
- **Interactive Lightbox:** Pure vanilla modal for full-size viewing of timber gallery & price flyer.
- **SEO & Structured Data:**
  - Semantic Local Business Schema (`LocalBusiness` JSON-LD) with geo-coordinates (`50.9686, 0.2524`), opening hours, and direct tel links.
  - Complete `sitemap.xml` and `robots.txt`.
- **Version Control & GitHub Pages Deployment:**
  - Repository: `https://github.com/lovefilm2018/hslogs.git`
  - Default Branch: `main` (serves GitHub Pages live via `https://hslogs.co.uk`)
  - **Mandatory Deployment Rule:** Always stage, commit, and push changes directly to `origin main` so GitHub Pages updates automatically.

---

## 4. Directory Schema
```text
HSLogs/
├── GEMINI.md                           # Technical specification & project truth
├── AGENTS.md                           # Operational rules & partnership protocol
├── index.html                          # Homepage & pricing packages
├── gallery.html                        # 46-photo firewood & delivery gallery with lightbox
├── order.html                          # Interactive order form (WhatsApp & email)
├── contact.html                        # Contact details & direct lines
├── style.css                           # Master responsive stylesheet
├── script.js                           # Navigation, lightbox, & WhatsApp order builder
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

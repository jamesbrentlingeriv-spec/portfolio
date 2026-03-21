<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:7c3aed,100:06b6d4&height=220&section=header&text=James%20Brent%20Lingeriv&fontSize=44&fontColor=ffffff&animation=fadeIn&fontAlignY=38" alt="Portfolio banner" />
</p>

<p align="center">
  <a href="https://github.com/jamesbrentlingeriv-spec"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-jamesbrentlingeriv--spec-181717?logo=github&logoColor=white" /></a>
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" />
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-Vanilla-f7df1e?logo=javascript&logoColor=111827" />
  <img alt="Firebase" src="https://img.shields.io/badge/Firebase-Firestore-FFCA28?logo=firebase&logoColor=111827" />
  <img alt="License" src="https://img.shields.io/badge/License-MIT-7c3aed" />
</p>

<p align="center">
  A modern, dark-themed developer portfolio built with pure HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies. Just fast, clean, hand-crafted code.
</p>

---

## 📁 Repository Structure

```
portfolio/
├── index.html                    # Main portfolio landing page
├── pal-optical.html             # PAL Optical Tool Kit project page (5000+ JS lines)
├── bible-study.html             # Bible Study Suite project page
├── ancient-bible.html           # Ancient Bible Reader project page (Hebrew/Greek)
├── songbook.html                # Songbook project page (OCR + Ultimate Guitar)
├── websites.html                # Client Websites project showcase
├── pomyt.jpg                    # PAL Optical card thumbnail
├── logo.png                     # Bible Study Suite logo
├── abr.png                      # Ancient Bible Reader logo
├── bsuite.gif                   # Bible Study Suite demo video
├── po.mp4                       # PAL Optical demo video
├── lenstally.mp4                # Lens tally demo video
├── home.png                     # Master Dashboard screenshot
├── screenshot/                  # Screenshot assets folder
│   ├── clo.png                 # Contact Lens Orders screenshot
│   ├── receipt.png             # Receipt tool screenshot
│   ├── len.png                 # Lens tally screenshot
│   ├── lin.png                 # Lens Inventory screenshot
│   ├── calc.png                # Calculator screenshot
│   ├── pq.png                  # PAL Quote tool screenshot
│   ├── inv.png                 # Inventory screenshot
│   └── lensview.png            # Lens Guide screenshot
├── screenshot-preview.css       # Universal hover preview styles
└── screenshot-preview.js        # Universal hover preview JavaScript
```

---

## 🚀 Live Site

> **Quick Start:** Open `index.html` directly in a browser, or serve with VS Code Live Server for the optimal local development experience.

**Requirements:**
- Modern browser (Chrome/Edge, Firefox, Safari)
- For local development with fetch API usage, use a local HTTP server:
  ```bash
  # Python 3
  python -m http.server 8000

  # Node.js
  npx serve .

  # VS Code Live Server extension (recommended)
  ```

---

## ✨ Design System

A carefully crafted dark UI system designed for readability and visual impact.

### Color Tokens

| Token | Value | Hex | Usage |
|---|---|---|---|
| `--bg` | `#0a0a0f` | `rgb(10, 10, 15)` | Page background - deep space black |
| `--surface` | `#13131a` | `rgb(19, 19, 26)` | Card / section backgrounds |
| `--border` | `#1e1e2e` | `rgb(30, 30, 46)` | Borders and dividers |
| `--accent` | `#7c3aed` | `rgb(124, 58, 237)` | Primary purple accent |
| `--accent2` | `#06b6d4` | `rgb(6, 182, 212)` | Cyan highlight |
| `--text` | `#e2e8f0` | `rgb(226, 232, 240)` | Primary text - cool white |
| `--muted` | `#64748b` | `rgb(100, 116, 139)` | Secondary / muted text |

### Typography

- **Font Family:** Inter (via Google Fonts CDN)
- **Weights:** 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Base Size:** 16px
- **Line Height:** 1.6

### Visual Effects

- **Scroll Reveals:** CSS `IntersectionObserver` for fade-in animations
- **Radial Glow Orbs:** Background decoration using conic gradients
- **Pulse Badge Indicator:** Animated status indicator
- **Glassmorphism:** Backdrop blur effects on navigation
- **Hover Lift:** Subtle elevation changes on interactive elements

---

## 🗂️ Pages

### `index.html` — Portfolio Home

The main landing page showcasing professional work with a modern, tech-forward aesthetic.

#### Page Sections

**1. Navigation Bar**
- Fixed position with glassmorphism backdrop blur (`backdrop-filter: blur(12px)`)
- Semi-transparent background (`rgba(10, 10, 15, 0.85)`)
- Logo on left, contact links on right
- Stays visible during scroll

**2. Hero Section**
- Bold gradient text treatment: "Code. Create. Innovate."
- Animated "Open to Work" pill badge with pulsing green dot
- Dual CTA buttons: "View Projects" and "Contact Me"
- Radial glow orbs in background for depth
- Responsive height (`min-height: 100vh`)

**3. Projects Grid**
- 3-column responsive grid (1 on mobile, 2 on tablet, 3 on desktop)
- Cards feature:
  - Project thumbnails (image or video)
  - Fade-to-dark gradient overlay for text readability
  - Tag pills with category indicators
  - Hover lift effect with subtle scale
- Projects showcased: PAL Optical Tool Kit, Bible Study Suite, Ancient Bible Reader, Songbook, Client Websites

**4. Skills Section**
- Icon grid with 12 technologies:
  - **Frontend:** React, Next.js, TypeScript
  - **Backend:** Python, Node.js
  - **Databases:** PostgreSQL, MongoDB
  - **DevOps:** Docker, AWS, Terraform
  - **Tools:** Git, Figma
- SVG icons with hover color shift

**5. Contact Section**
- styled link cards for:
  - Email (direct mailto link)
  - GitHub (external link to profile)
  - LinkedIn (external link to profile)
- Gradient borders on hover

**6. Footer**
- Simple attribution
- Capsule render wave animation

---

### `pal-optical.html` — PAL Optical Tool Kit

**Status:** Production-Ready (5,000+ lines of JavaScript)

**Tags:** `Firebase` `Firestore` `PWA` `HTML/JS` `Optical Suite` `Offline-Capable`

A comprehensive, browser-based optical suite that replaces paper-based eyewear order workflows. Built specifically for optical retail and lab environments to digitize prescription write-ups, track inventory, manage patient data, and generate professional documentation.

#### Overview

The optical industry traditionally relies heavily on paper forms, manual calculations, and disconnected processes. This toolkit brings those workflows into a modern, browser-based environment — accessible from any device, with data persisted in real-time via Firebase. The suite is modular: each tool handles a specific part of the process while sharing a consistent UI and data layer.

#### Core Features

**🔐 User Authentication & Staff Management**
- Individual PIN-based login for up to 12 staff members
- Per-user data isolation — users only see their own orders and write-ups
- Initials display for accountability on printed forms
- Secure session management

**📝 P.O.S.T. Write-Up System (Flagship Tool)**
- **Job Ticket Number Tracking:** Firebase-generated sequential order numbers ensure every prescription has a unique identifier
- **Patient Information Input:** Comprehensive data capture including:
  - Name, phone, email, date of birth
  - Guardian information for minors
  - Insurance details with provider selection
  - Multi-language consent forms (English/Spanish/French)
- **Insurance Integration (Drop-down Based):**
  - **VSP (Vision Service Plan):** Commercial plans with automatic 20% frame allowance
  - **EyeMed:** MVC/Managed Vision Care plans - prompts user to specify if it's an "allowance plan" for benefit validation
  - **Medicaid:** Multiple provider options including Aetna Medicaid, Humana Medicaid, Wellcare, and more - automatically prompts for Medicaid-specific billing codes:
    - `92340` (Standard frame and single vision lenses)
    - `92370` (Frame with progressive lenses)
    - Prior authorization tracking for certain lens types
  - **Private Pay:** Cash/self-pay tracking
- **Contact Method Logic:** When "Mail" is selected for contact method, the system automatically prompts for and validates patient address entry including street, city, state, and ZIP code
- **Camera Measurement Tool:** 5-point calibration system using a credit card (85.6mm standard) for accurate pupillary distance (PD) and segment height measurements. Auto-populates measurements directly into the write-up form
- **Lens Catalog (400+ Options):**
  - Progressive lenses (Varilux, Shamir, Unity, etc.)
  - Single vision (plastic, polycarbonate, high-index 1.67/1.74)
  - Transitions and polarized options
  - Auto-pricing with insurance overrides
  - Oversize/high Rx/add-on auto-charging (+$10-30)
- **Multi-Language Forms:** Patient information sheets available in English, Spanish, and French
- **Print Output:** Professional 3-page document generation:
  - Page 1: Dual lab slips for optical lab
  - Page 2: Patient information sheet
  - Page 3: Waivers (expired Rx, Payment on File, thickness warnings)
- **HTML Auto-Save:** Every write-up automatically saves as HTML with patient name and job number timestamp

**📋 Additional Tools in Suite:**

1. **Contact Lens Orders**
   - Supply tracking with inventory management
   - Insurance payment processing
   - Excel export functionality

2. **Dr. Itemized Receipt**
   - Dynamic item entry
   - Insurance adjustment calculations
   - Professional receipt generation

3. **Master Dashboard (home.png)**
   - Unified entry point for all tools
   - Quick access to recent orders

4. **PAL Optical Receipt**
   - Specialized receipt formatting for optical retail

5. **Lab FSV Order Sheet (lenstally.mp4)**
   - FSV (Fitting and Style Verification) order tracking
   - Video demonstration of workflow

6. **Lens Availability**
   - Real-time lens inventory lookup
   - Cross-reference with vendor databases

7. **Optician Calculator**
   - Rx calculations
   - Prism and decentration math

8. **PAL Quote Tool**
   - Insurance verification and quoting

9. **Lens Inventory Management**
   - Stock tracking
   - Reorder alerts

10. **Lens Guide**
    - Educational resource for lens types

#### Technical Architecture

**Frontend:**
- Pure HTML5 with semantic markup
- CSS3 with custom properties (CSS variables) for theming
- Vanilla JavaScript (ES6+) — no frameworks

**Backend/Cloud:**
- **Firebase Firestore:** Real-time NoSQL database for order persistence
- **Firebase Authentication:** Secure staff login with per-user data partitioning
- **Firebase Hosting:** Production deployment (optional)

**Data Structure:**
```
Firestore Database
├── users/{userId}/
│   ├── orders/{orderId}      # Individual prescriptions
│   ├── patients/{patientId}  # Patient records
│   └── settings/           # User preferences
├── inventory/               # Lens catalog (400+ items)
└── audit-log/            # Change tracking (optional)
```

**Browser Features:**
- **Service Worker:** Enables offline functionality after first load
- **PWA Manifest:** Installable as native app on mobile/desktop
- **localStorage:** Session persistence and caching
- **Canvas API:** Used for signature capture and measurement overlays

#### Print & Export Specifications

**Output Formats:**
1. **Printed Documents:** 3-page professional layout on standard 8.5"x11" paper
2. **HTML Export:** Single-file HTML with embedded CSS, named `PatientName_JobNumber_YYYYMMDD.html`
3. **PDF:** Generated via browser print-to-PDF functionality

#### Browser Support

| Browser | Desktop | Mobile | Notes |
|---|---|---|---|
| Chrome/Edge | ✅ | ✅ | Recommended |
| Firefox | ✅ | ✅ | Supported |
| Safari | ✅ | ✅ | iOS and macOS |
| Chrome Android | — | ✅ | PWA installable |
| Safari iOS | — | ✅ | Add to Home Screen |

#### Security & Compliance

- **Authentication:** Firebase Auth with secure PIN-based login
- **Data Isolation:** Per-user data separation at Firestore level
- **HIPAA Considerations:**
  - ⚠️ Current implementation: **NOT HIPAA compliant**
  - **Path to Compliance:** Upgrading Google Firestore under Business Associate Agreement (BAA)
  - Data encryption in transit (TLS 1.3) and at rest
  - Audit logging capability (not enabled by default)

> **Disclaimer:** This system is not currently in active use and in its present state is not HIPAA compliant. Upgrading to Google Firestore under a Business Associate Agreement (BAA) would readily address this.

#### Quick Start

```bash
# Method 1: Direct open
start index.html          # Windows
open index.html           # macOS

# Method 2: HTTP server
npx serve .               # Node.js
python -m http.server 8000  # Python 3
php -S localhost:8000     # PHP
```

**First time setup:**
1. Open Master Dashboard (home.png)
2. Click any tool to access it
3. For P.O.S.T. Write-Up: Login with staff PIN
4. All tools work offline after initial load ✨

---

### `bible-study.html` — Bible Study Suite

**Status:** Production-Ready

**Demo:** [Live Demo on GitHub Pages](https://jamesbrentlingeriv-spec.github.io/biblestudy/)

**Tags:** `Vanilla JS` `IndexedDB` `Audio Recording` `MediaRecorder API` `Web Audio API` `GitHub Pages`

A browser-based Bible study application that transforms passive reading into an active, multimedia study process. Every note and voice recording is anchored to specific verses, building a personal commentary over time.

#### Philosophy

Traditional Bible apps focus on reading and basic note-taking. This suite treats study as an **active, multimedia process** — combining text, audio, and song reflection in a unified interface.

#### Features

**📖 Bible Reader Core**
- **Translation Selector:** KJV, ESV, NIV, and more via bible-api.com
- **Book/Chapter Navigation:** Dropdown selectors with prev/next buttons
- **Verse Search:** Direct lookup (e.g., "John 3:16")
- **Red Letter Text:** Quoted speech highlighted in red for Matthew, Mark, Luke, John
- **Click-to-Insert:** Click any verse to automatically add its reference to your note

**✏️ Notes System**
- **Create & Edit:** Rich text notes with autosave
- **Manual Save:** Explicit save button for control
- **Sidebar List:** All notes accessible in scrollable sidebar
- **Delete:** One-click note removal with confirmation
- **Verse Auto-Detection:** References like "John 3:16" automatically detected and linked

**🎙️ Audio Recording (per-note)**
- **Microphone Access:** HTML5 MediaRecorder API
- **Per-Note Storage:** Each recording tied to the specific note
- **Playback:** In-note audio player
- **Download:** Save recordings as .webm files
- **Delete:** Remove recordings from note
- **Persistence:** IndexedDB storage — recordings survive page refresh

**🎵 Songs & Lyrics (per-note)**
- **Add Songs:** Link a song title and lyrics to any study note
- **View/Delete:** Manage linked songs
- **Insert to Notes:** One-click insert into note content

**📱 Mobile Panel**
- **Desktop:** Bible panel visible immediately
- **Mobile:** Hamburger (☰) menu slides panel in from left
- **Responsive:** Adapts to screen size automatically

#### Technical Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | Vanilla JavaScript | Zero dependencies, maximum control |
| Database | IndexedDB | Large object storage (audio blobs, notes) |
| Cache | localStorage | Simple key/value for settings |
| API | bible-api.com | Bible text (JSON REST API) |
| Hosting | GitHub Pages | Free, always-on hosting |
| Audio | MediaRecorder API | Browser-native recording |
| Storage | IndexedDB | Binary audio data persistence |

#### Data Model

```
NOTE (object store)
├── id: auto-increment
├── title: string
├── content: string (HTML)
├── verses: array[verseRefs]
├── timestamp: Date
├── RECORDING (related)
│   ├── id: auto-increment
│   ├── noteId: foreign key
│   ├── blob: Blob (audio/webm)
│   ├── duration: number (seconds)
│   └── timestamp: Date
└── SONG (related)
    ├── id: auto-increment
    ├── noteId: foreign key
    ├── title: string
    └── lyrics: string
```

#### Run Locally

```bash
# VS Code Live Server (recommended)
# Right-click index.html → Open with Live Server
# → http://127.0.0.1:5500/

# Python
python -m http.server 8000
# → http://localhost:8000

# Node.js
npx serve .
```

> ⚠️ **Important:** A local HTTP server is required — `file://` protocol blocks the fetch API used for Bible text retrieval.

#### Browser Permissions

- **Microphone:** Required for audio recording (user prompted)
- **Storage:** Required for IndexedDB (no prompt, automatic)

---

### `ancient-bible.html` — Ancient Bible Reader

**Status:** Production-Ready

**Tags:** `Ancient Hebrew` `Ancient Greek` `KJV` `Parallel Reader` `RTL` `Strong's Concordance` `Interlinear`

A scholarly-grade parallel scripture reader displaying Ancient Hebrew (Old Testament) or Ancient Greek (New Testament) side-by-side with the King James Version — designed for deep textual and linguistic study without requiring separate interlinear or lexicon resources.

#### Overview

This tool bridges the gap between modern English translations and ancient biblical manuscripts. It provides immediate linguistic context for serious study, sermon preparation, and academic research.

#### Key Features

**🔀 Synchronized Two-Column Layout**
- Ancient text (Hebrew or Greek) on left
- KJV English on right
- Verse-by-verse alignment maintained during scroll
- Both columns scroll in sync for consistent reading

**🔤 Language Modes (Automatic)**
- **Old Testament:** Displays Ancient Hebrew with full Right-to-Left (RTL) rendering
- **New Testament:** Displays Ancient Greek (Koine Greek)
- **Automatic Detection:** Selecting book automatically switches language mode

**📖 Word Lookup System**
- **Tap-to-Define:** Click any word in ancient text to reveal:
  - Transliteration (pronunciation guide)
  - Strong's Concordance number
  - Plain-English lexical definition
  - Part of speech identification
- **Hover Definitions:** Quick preview on desktop

**🔍 Cross-Reference Search**
- **Search by Strong's Number:** Find every occurrence of a specific Hebrew/Greek word across entire Bible
- **Concordance View:** See word usage patterns and translation variations
- **Deep Linking:** Share specific word studies via URL

**🎨 Typography & Rendering**
- **RTL Text:** Proper Hebrew rendering with Unicode support
- **Cantillation Marks:** Hebrew vowel points and accents preserved
- **Greek Diacritics:** Breathing marks, accents, iota subscript
- **Custom Fonts:** SBL Hebrew, SBL Greek for academic accuracy

**🔖 Bookmarks Panel**
- **Dual Mode Bookmarks:** Separate bookmark lists for Hebrew and Greek modes
- **Quick Return:** Jump back to saved passages
- **Persistent:** Saved in localStorage

#### Sample Parallel View

| Ancient Hebrew | KJV Translation |
|---|---|
| בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ | In the beginning God created the heaven and the earth. |
| יוֹחָנָן ג׳ טז | For God so loved the world... |

#### Technical Implementation

**Data Sources:**
- Open Scripture APIs (Ancient Hebrew/Greek text)
- Strong's Concordance database (lexical definitions)
- KJV via bible-api.com

**Rendering Challenges Solved:**
- **RTL CSS:** `direction: rtl`, `unicode-bidi: bidi-override`
- **Font Loading:** WebFont Loader for SBL fonts
- **Word Alignment:** Verse-level synchronization despite different sentence structures
- **Unicode Handling:** Proper display of Hebrew final forms, Greek accents

#### Use Cases

1. **Serious Bible Study:** Understand original language nuances
2. **Sermon Preparation:** Verify translation accuracy
3. **Academic Research:** Quick reference without heavy software
4. **Language Learning:** Hebrew/Greek vocabulary acquisition

---

### `songbook.html` — Songbook

**Status:** Production-Ready

**Tags:** `OCR` `Ultimate Guitar` `Tesseract.js` `Music` `Chord Charts` `Perform Mode`

A personal songbook solving the "scattered songs" problem every musician faces. Combines web import, OCR transcription, and performance features into one unified tool.

#### The Problem

Musicians accumulate songs from multiple sources:
- Handwritten notes
- Printed chord charts
- Ultimate Guitar tabs
- Screenshots of lyrics

This tool consolidates everything into a single, searchable, accessible library.

#### Import Methods

**Method 1: Ultimate Guitar Import**
- Paste any Ultimate Guitar URL
- App fetches chord chart + lyrics
- Strips formatting cruft (ads, comments, metadata)
- Saves clean, formatted chord chart
- Preserves chord positions above lyrics

**Method 2: OCR Scan**
- Photograph handwritten or printed lyrics
- Tesseract.js engine transcribes text
- Confidence scoring for accuracy
- Manual review and correction
- Save verified transcription

**Input Requirements:**
- Good lighting for OCR
- Clear handwriting or print
- Straight-on camera angle (minimizes distortion)

#### Organization System

**Tagging:**
- Genre (Rock, Country, Worship, etc.)
- Key (C, G, Am, etc.)
- Artist/Band
- Tempo/Feel

**Search:**
- Full-text search across titles and lyrics
- Filter by any tag combination
- Instant results as you type

**Setlist Builder:**
- Drag-and-drop song ordering
- Setlist naming and saving
- Duplicate setlist for variants
- Print-friendly view

#### Perform Mode

**Full-Screen Display:**
- Distraction-free, maximum text size
- Auto-scroll with adjustable speed
- Screen-always-on toggle (via Wake Lock API)

**Key Transposer:**
- +/- buttons transpose by semitone
- Chord diagrams update automatically
- Capo position indicator
- Original key preserved for reference

**Annotation:**
- Add performance notes
- Capo reminders
- Custom chord voicings
- Tempo/BPM marking

#### Technical Stack

| Component | Technology | Details |
|---|---|---|
| OCR Engine | Tesseract.js v2 | Client-side, no server required |
| Web Scraping | CORS proxy + fetch | Ultimate Guitar content |
| Storage | IndexedDB | Large text content |
| Settings | localStorage | User preferences |
| Canvas API | HTML5 | Chord diagram rendering |
| Wake Lock | Screen Wake Lock API | Keep screen on during performance |

#### Chord Diagram Rendering

```
   A     D     G
 E|---0---2---3---|
 B|---2---3---0---|
 G|---2---2---0---|
 D|---2---0---0---|
 A|---0---x---2---|
 E|---x---x---3---|
```

- ASCII art chord diagrams
- Generated from chord name
- Optional: display all chord variations

---

### `websites.html` — Client Websites

**Status:** Portfolio Showcase

**Tags:** `HTML/CSS` `JavaScript` `Responsive` `SEO` `Custom Development`

A curated collection of custom websites built from scratch for various clients. No page builders, no templates — each site tailored to the client's brand, audience, and business goals.

#### Site Types Built

| Type | Features & Highlights |
|---|---|
| **Local Business** | Contact forms, service pages, Google Maps integration, business hours, testimonials |
| **Restaurant** | Digital menu, reservation system, mobile-optimized food gallery, online ordering links |
| **Creative Portfolio** | Filterable project gallery, lightbox image viewer, commission inquiry form, artist bio |
| **Church / Ministry** | Service times display, sermon archive (audio/video), event calendar, online giving integration |
| **Small E-Commerce** | Product showcase with categories, payment processor integration (Stripe/PayPal), cart functionality |
| **Blog / Content** | Clean reading typography, category filtering, author profiles, RSS feed, social sharing |

#### Development Approach

**Goals-First Design:**
1. Understand what the site needs to **do** (not just look like)
2. Define success metrics with client
3. Design flows that convert visitors to customers/readers

**Mobile-First Development:**
- Designed for phones first, scaled up to desktop
- Touch-friendly targets (min 44px)
- Fast mobile performance
- Progressive enhancement

**Performance Optimization:**
- No bloated frameworks (pure HTML/CSS/JS)
- Optimized images (WebP format, lazy loading)
- Minified assets
- Fast load times (< 3s on 3G)

**SEO Foundation:**
- Semantic HTML5 structure
- Proper meta tags (title, description, Open Graph)
- Structured data (Schema.org JSON-LD)
- Semantic URLs
- Alt text for all images

**Accessibility (WCAG Compliance):**
- Proper color contrast ratios
- Keyboard navigation support
- ARIA labels where needed
- Screen reader friendly markup
- Focus indicators

#### Technical Implementation

**Every Site Includes:**
- Responsive breakpoints: 320px, 768px, 1024px, 1440px+
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile testing (iOS Safari, Chrome Android)
- Performance audit (Lighthouse 90+ scores)
- SEO audit (technical SEO pass)
- Accessibility audit (WCAG 2.1 AA compliance)

**Tech Stack:**
- HTML5 semantic markup
- CSS3 with custom properties
- Vanilla JavaScript (ES6+)
- Responsive design principles
- SEO best practices
- WCAG accessibility guidelines

---

## 🛠️ Global Tech Stack Overview

| Category | Technologies | Usage |
|---|---|---|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript | Zero-dependency, maximum performance |
| **Mobile** | React Native, Expo | Cross-platform mobile apps |
| **Backend / Cloud** | Firebase Firestore, Firebase Auth, Firebase Hosting | Real-time data, auth, hosting |
| **Databases** | Firestore, IndexedDB, localStorage | Cloud and client-side persistence |
| **APIs | bible-api.com, Open Scripture APIs, Strong's Concordance | External data sources |
| **OCR** | Tesseract.js | Client-side text recognition |
| **Audio** | MediaRecorder API, Web Audio API | Browser-based recording |
| **Deployment** | GitHub Pages, Firebase Hosting | Free, reliable hosting |
| **Tools** | VS Code, Git, Figma | Development workflow |
| **Design** | Inter font, CSS variables, Flexbox/Grid | Visual system |

---

## 🎨 CSS Architecture

All pages share a consistent CSS design system:

```css
/* Core tokens */
:root {
  --bg: #0a0a0f;
  --surface: #13131a;
  --border: #1e1e2e;
  --accent: #7c3aed;
  --accent2: #06b6d4;
  --text: #e2e8f0;
  --muted: #64748b;
  --radius: 12px;
}

/* Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
```

---

## 📬 Contact

| Channel | Link |
|---|---|
| GitHub | [github.com/jamesbrentlingeriv-spec](https://github.com/jamesbrentlingeriv-spec) |
| Email | james@example.com |
| LinkedIn | linkedin.com/in/james |

---

## 📄 License

**MIT License**

Free to use, modify, and distribute. Attribution appreciated but not required.

```
Copyright (c) 2025 James Brent Lingeriv

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:06b6d4,100:7c3aed&height=120&section=footer" alt="footer" />
</p>

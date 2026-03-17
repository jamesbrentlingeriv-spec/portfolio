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
├── index.html          # Main portfolio landing page
├── pal-optical.html    # PAL Optical Tool Kit project page
├── bible-study.html    # Bible Study Suite project page
├── ancient-bible.html  # Ancient Bible Reader project page
├── songbook.html       # Songbook project page
├── websites.html       # Client Websites project page
├── pomyt.jpg           # PAL Optical card thumbnail
├── logo.png            # Bible Study Suite logo
├── abr.png             # Ancient Bible Reader logo
├── bsuite.gif          # Bible Study Suite demo
├── po.mp4              # PAL Optical demo video
└── abr.mp4             # Ancient Bible Reader demo video
```

---

## 🚀 Live Site

> Open `index.html` directly in a browser, or serve with VS Code Live Server for local development.

---

## ✨ Design System

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0a0a0f` | Page background |
| `--surface` | `#13131a` | Card / section backgrounds |
| `--border` | `#1e1e2e` | Borders and dividers |
| `--accent` | `#7c3aed` | Primary purple accent |
| `--accent2` | `#06b6d4` | Cyan highlight |
| `--text` | `#e2e8f0` | Primary text |
| `--muted` | `#64748b` | Secondary / muted text |

**Typography:** Inter (Google Fonts) — weights 300, 400, 500, 600, 700

**Animations:** CSS `IntersectionObserver` scroll reveals, radial glow orbs, pulse badge indicator

---

## 🗂️ Pages

### `index.html` — Portfolio Home

The main landing page with four sections:

- **Hero** — Name, tagline, animated badge, dual CTA buttons, radial glow background effects
- **Projects** — Responsive card grid linking to each project detail page. Cards feature image/video thumbnails with a fade-to-dark gradient overlay, tag pills, and hover lift effects
- **Skills** — Icon grid covering React, Next.js, TypeScript, Python, Node.js, PostgreSQL, MongoDB, Docker, AWS, Terraform, Git, Figma
- **Contact** — Styled link cards for Email, GitHub, and LinkedIn

---

### `pal-optical.html` — PAL Optical Tool Kit

**Tags:** `Firebase` `PWA` `HTML/JS` `Optical Suite`

A comprehensive browser-based optical suite for retail and lab management. Built to digitize and streamline the eyewear order workflow — replacing paper forms, manual calculations, and disconnected processes with a fast, cloud-connected web app.

**Features:**
- 📝 Full P.O.S.T. prescription write-up program with field validation
- 🔢 PAL calculators for seg heights, fitting cross placement, and progressive lens measurements
- ☁️ Firebase Firestore real-time sync with per-user authentication
- 📋 Searchable order history — pull up, duplicate, or edit any past write-up
- 📱 Mobile-first responsive layout for dispensing table and lab bench use
- 🖨️ One-click print-ready output formatted to industry standards
- 🔌 PWA-ready with offline capability

**Tech Stack:** HTML / CSS / JavaScript · Firebase Firestore · Firebase Auth · Firebase Hosting

> ⚠️ **Disclaimer:** This system is not currently in active use and in its present state is not HIPAA compliant. Upgrading to Google Firestore under a Business Associate Agreement (BAA) would readily address this.

---

### `bible-study.html` — Bible Study Suite

**Tags:** `Vanilla JS` `IndexedDB` `Audio Recording` `GitHub Pages`

[![Live Demo](https://img.shields.io/badge/Live-Demo-1d4ed8?style=flat&logo=github)](https://jamesbrentlingeriv-spec.github.io/biblestudy/)

A browser-based Bible study app that treats study as an active, multimedia process — not just reading. Every note and voice recording is anchored to a specific verse or passage, building a personal commentary over time.

**Features:**
- 📖 Full Bible reader — book/chapter/translation selector, prev/next navigation, verse search (e.g. `John 3:16`), click-to-insert verse refs into notes
- 🔴 Red-letter text — quoted speech highlighted in red across Matthew, Mark, Luke, and John
- ✏️ Notes system — create, edit, autosave, manual save, sidebar list, delete. Verse refs in notes are auto-detected and rendered in a context sidebar
- 🎙️ Per-note audio recording — microphone recording tied to the current note, with playback, download, and delete. Stored in IndexedDB so recordings survive page refresh
- 🎵 Per-note songs & lyrics — add a song title and lyrics to any study note, view/delete/insert into note content
- 📱 Mobile panel — desktop shows Bible panel immediately; mobile uses ☰ menu to slide panel in

**Tech Stack:** Vanilla JavaScript · IndexedDB · localStorage · [bible-api.com](https://bible-api.com) · GitHub Pages

**Storage Model:**

```
NOTE  ──< SONG        (per-note songs/lyrics)
NOTE  ──< RECORDING   (per-note audio blobs in IndexedDB)
```

**Run Locally:**
```bash
# VS Code Live Server (recommended)
# Right-click index.html → Open with Live Server → http://127.0.0.1:5500/

# Python
cd biblestudy
python -m http.server 8000
# → http://localhost:8000
```

> Note: A local HTTP server is required — `file://` protocol blocks the fetch API used for Bible text.

---

### `ancient-bible.html` — Ancient Bible Reader

**Tags:** `Ancient Hebrew` `Ancient Greek` `KJV` `Parallel Reader`

A parallel scripture reader displaying Ancient Hebrew (OT) or Ancient Greek (NT) side-by-side with the KJV — built for deep textual and linguistic study without needing a separate interlinear or lexicon.

**Features:**
- 🔀 Synchronized two-column parallel layout — ancient text and KJV aligned verse-by-verse
- 🔤 Hebrew & Greek modes — automatically loads the correct source text per testament
- 📖 Word lookup — tap any word in the ancient text for transliteration, Strong's number, and plain-English definition
- 🔍 Cross-reference search by Strong's number across the entire Bible
- 🎨 Full RTL text rendering for Hebrew with proper Unicode font support
- 🔖 Bookmarks panel for both language modes

**Tech Stack:** JavaScript · HTML / CSS · Open Scripture APIs · Strong's Concordance Data · RTL Text Rendering · Unicode Hebrew & Greek Fonts

**Sample Parallel View:**

| Ancient Hebrew | KJV |
|---|---|
| בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ | In the beginning God created the heaven and the earth. |

---

### `songbook.html` — Songbook

**Tags:** `OCR` `Ultimate Guitar` `Tesseract.js` `JavaScript`

A personal songbook that solves the scattered-songs problem every musician knows. Two smart import methods bring everything into one clean, searchable library.

**How It Works:**

| Step | Action |
|---|---|
| 1 | Paste a Ultimate Guitar URL → app fetches chord chart + lyrics, strips formatting, saves cleanly |
| 2 | Photograph handwritten or printed lyrics → OCR engine transcribes, you review and save |
| 3 | Tag by genre, key, or artist → search any field instantly |
| 4 | Open in Perform Mode → full-screen, large text, auto-scroll, screen-always-on |

**Features:**
- 🎸 Ultimate Guitar import via URL
- 📷 OCR scan tool powered by Tesseract.js
- 🎤 Full-screen Perform Mode with auto-scroll
- 🔑 Key transposer — up/down by semitone with one tap
- 🗂️ Setlist builder for gigs and practice sessions
- ✏️ Edit and annotate any song with capo notes and performance reminders

**Tech Stack:** JavaScript · Tesseract.js (OCR) · HTML / CSS · LocalStorage / IndexedDB · Canvas API

---

### `websites.html` — Client Websites

**Tags:** `HTML/CSS` `JavaScript` `Responsive` `SEO`

A collection of custom websites built from scratch for various clients — no page builders, no templates. Each one tailored to the client's brand, audience, and goals.

**Site Types Built:**

| Type | Highlights |
|---|---|
| Local Business | Contact form, service pages, Google Maps |
| Restaurant | Menu, reservations, mobile-optimized gallery |
| Creative Portfolio | Filterable gallery, commission inquiry form |
| Church / Ministry | Service times, sermon archive, events, giving |
| Small E-Commerce | Product showcase, payment processor integration |
| Blog / Content | Clean reading UX, category filtering, RSS feed |

**Approach:**
- 🎯 Goals-first — understand what the site needs to *do* before designing
- 📱 Mobile-first — designed for phones, scaled up to desktop
- ⚡ Performance — no bloated frameworks, optimized images, fast load times
- 🔍 SEO-ready — semantic HTML, meta tags, structured data

**Tech Stack:** HTML5 · CSS3 · JavaScript · Responsive Design · SEO Best Practices · WCAG Accessibility

---

## 🛠️ Tech Stack Overview

| Category | Technologies |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Mobile | React Native, Expo |
| Backend / Cloud | Firebase Firestore, Firebase Auth, Firebase Hosting |
| Storage | IndexedDB, localStorage |
| APIs | bible-api.com, Open Scripture APIs, Strong's Concordance |
| OCR | Tesseract.js |
| Deployment | GitHub Pages, Firebase Hosting |
| Tools | VS Code, Git, Figma |

---

## 📬 Contact

| Channel | Link |
|---|---|
| GitHub | [github.com/jamesbrentlingeriv-spec](https://github.com/jamesbrentlingeriv-spec) |
| Email | james@example.com |
| LinkedIn | linkedin.com/in/james |

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:06b6d4,100:7c3aed&height=120&section=footer" alt="footer" />
</p>

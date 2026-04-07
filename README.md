# iamjames Portfolio

[![Live Site](https://img.shields.io/badge/Live-iamjames.lol-111827?style=for-the-badge)](https://iamjames.lol)
[![PWA](https://img.shields.io/badge/PWA-Enabled-0a0a0f?style=for-the-badge)](https://iamjames.lol)
[![Static Stack](https://img.shields.io/badge/Stack-HTML%20%2B%20CSS%20%2B%20JS-1f2937?style=for-the-badge)](https://iamjames.lol)

Professional multi-page portfolio and product showcase for James Brentlinger IV.

This repository powers the public site at https://iamjames.lol and highlights:

- Product builds
- Client websites
- Educational and ministry-focused applications
- Writing and publishing work
- Progressive Web App behavior for mobile install and offline resilience

## Table Of Contents

- Live Website
- Project Snapshot
- Technology Stack
- PWA Architecture
- CSS And Visual System
- Full Page Catalog
- File Guide
- Local Development
- Production Verification For iamjames.lol

## Live Website

- Primary URL: https://iamjames.lol
- Recommended canonical URL: https://iamjames.lol/

## Project Snapshot

The portfolio is built as a static multi-page app with shared runtime assets.

Core goals:

- Fast load and broad hosting compatibility
- Clean page-level separation for each project
- Strong mobile UX
- Installable app behavior on supported mobile browsers

## Technology Stack

- HTML5 page architecture
- Modern CSS layout and visual effects
- Vanilla JavaScript for interactivity and runtime helpers
- Service Worker caching strategy for app shell and runtime assets
- Web App Manifest for install metadata

## PWA Architecture

PWA behavior is driven by these files:

- manifest.json
- sw.js
- pwa-init.js

Implementation details:

- Root-scoped manifest for production domain installability
- Standalone display mode
- Application icons for launcher and home screen
- Service worker with:
  - shell pre-cache for startup reliability
  - optional route pre-cache using all-settled behavior
  - network-first navigation fallback behavior
  - stale-while-revalidate runtime asset behavior
- Runtime install UI with iOS guidance and Android/Chromium install flow support

Production details specific to iamjames.lol:

- HTTPS is required for service worker and installability
- Root scope and start URL are aligned to domain root
- Runtime script enforces secure protocol on the production hostname

## CSS And Visual System

Main design language is defined in index.html and shared utility styling in
screenshot-preview.css.

### Design Tokens

| Token     | Value   | Usage                                    |
| --------- | ------- | ---------------------------------------- |
| --bg      | #0a0a0f | Global page background                   |
| --surface | #13131a | Elevated surfaces and cards              |
| --border  | #1e1e2e | Subtle separators and component outlines |
| --accent  | #7c3aed | Primary accent and emphasis              |
| --accent2 | #06b6d4 | Secondary accent and contrast            |
| --text    | #e2e8f0 | Primary readable text                    |
| --muted   | #64748b | Secondary and support text               |
| --radius  | 12px    | Shared component corner radius           |

### Layout Patterns

- Fixed navigation with blur and translucent backdrop treatment
- Hero-first landing section with layered glow effects
- Card-driven project and content blocks
- Utility classes and shared visual rhythm across all project pages

### Motion And Interaction

- Lightweight transitions for links, cards, and controls
- Thumbnail hover elevation and border color shifts
- Modal image/video preview animation with fade-and-scale entry

### Shared CSS Utility Surface

screenshot-preview.css provides:

- Full-screen media preview overlay
- Consistent thumbnail sizing and hover treatment
- Responsive modal paddings and viewport-safe media constraints

## Full Page Catalog

All root-level pages are listed below with purpose and key content focus.

| Page                         | Purpose                             | Highlights                                                        |
| ---------------------------- | ----------------------------------- | ----------------------------------------------------------------- |
| index.html                   | Main portfolio homepage             | Personal introduction, project navigation hub, hero branding      |
| ancient-bible.html           | Ancient Bible Reader showcase       | Parallel scripture reading in original language context           |
| bible-study.html             | Bible Study Suite showcase          | Local-first study workspace with notes and context tools          |
| ocu-sync.html                | OCU-SYNC concept page               | Secure healthcare messaging and compliance-first positioning      |
| pal-optical.html             | PAL Optical Tool Kit showcase       | Offline-capable retail and lab workflow utilities                 |
| pal-optical-site.html        | PAL Optical public website showcase | Patient-facing responsive web presence and service clarity        |
| price-list.html              | Interactive pricing workspace       | Searchable categories, pricing exploration, staff support context |
| sermonflow.html              | SermonFlow product page             | Pastor workflow support from scripture selection to outline prep  |
| songbook.html                | Songbook product page               | Song import and organization workflow, including OCR pathway      |
| the-shaking-of-my-hands.html | Novella website page                | Official narrative and publication-focused destination            |
| websites.html                | Client websites gallery             | Custom client builds and delivery quality showcase                |
| wordwitness.html             | Word Witness product page           | Reading education app with interactive Bible storytelling focus   |

## File Guide

Primary runtime files:

- manifest.json: Install metadata, scope, start URL, icon definitions
- sw.js: Service worker install, activate, fetch, and cache strategy
- pwa-init.js: Install prompts, secure context handling, mobile metadata helpers
- screenshot-preview.css: Shared media modal and thumbnail interaction styling
- screenshot-preview.js: Shared screenshot/video preview behavior

## Local Development

Use any static server and test in a secure context whenever possible.

Recommended workflow:

1. Serve the project locally from repository root.
2. Open in a modern browser.
3. Verify manifest and service worker registration in browser application tools.
4. Test offline behavior after first successful load.

## Production Verification For iamjames.lol

Use this checklist when validating production PWA behavior:

1. Open https://iamjames.lol on Android Chrome and confirm install option
   appears.
2. Open the same URL in iOS Safari and use Share then Add To Home Screen.
3. Confirm the installed app launches in standalone mode.
4. Confirm icon quality from home screen and app switcher.
5. Toggle offline after first load and verify shell content still loads.
6. Confirm service worker scope is root and active.

## License

This repository is a personal portfolio project. Reuse of assets or content
should be approved by the author.

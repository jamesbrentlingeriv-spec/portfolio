<<<<<<< HEAD
# Snapchat Design System

> Camera-first social platform with ephemeral messaging. Signature Yellow (#FFFC00), playful Gen-Z aesthetic, Bitmoji-integrated, designed for spontaneous visual communication.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Snapchat embraces a **youthful, spontaneous, and ephemeral** design philosophy. The interface is built around the camera, treating it as the primary canvas rather than a feed. Every element feels playful, immediate, and personal—designed for quick, authentic moments rather than curated perfection.

### Mood & Feeling
- **Ephemeral**: Content disappears, creating urgency and authenticity
- **Playful**: Bold colors, fun animations, AR filters encourage creativity
- **Personal**: Bitmoji avatars, best friend rankings, streaks create intimate connections
- **Camera-First**: The camera is home, not a feature hidden behind menus
- **Gen-Z Native**: Speaks the language of younger generations without feeling forced

### Design Density
**Low-to-medium density** with generous touch targets and whitespace. The interface is optimized for quick thumb gestures—swiping, tapping, holding. Content takes center stage while navigation stays minimal and discoverable through gestures.

### Visual Character
- Camera viewfinder as the default home screen
- Circular avatars and story rings throughout
- Rounded corners on everything (cards, buttons, bubbles)
- Gradient-heavy visual treatments
- Ghost icon (Ghostface Chillah) as brand mascot
- Bold, vibrant color accents against clean backgrounds
- Heavy use of emojis, Bitmoji, and stickers as first-class UI elements

---

## 2. Color Palette & Roles

### Primary Brand Colors

| Token | Hex | Role |
|-------|-----|------|
| `--snap-yellow` | `#FFFC00` | Primary brand color, logo, highlights |
| `--snap-yellow-light` | `#FFFB4D` | Yellow variants, glows |
| `--snap-yellow-dark` | `#E6E300` | Pressed states on yellow |
| `--snap-black` | `#000000` | Text on yellow, dark mode background |
| `--snap-white` | `#FFFFFF` | Light mode background, text on dark |

### Light Theme (Default)

| Token | Hex | Role |
|-------|-----|------|
| `--background-primary` | `#FFFFFF` | Main app background |
| `--background-secondary` | `#F7F7F7` | Card backgrounds, subtle sections |
| `--background-tertiary` | `#EFEFEF` | Input fields, inactive areas |
| `--surface-elevated` | `#FFFFFF` | Floating cards, modals |
| `--border-subtle` | `#E8E8E8` | Subtle dividers, card borders |
| `--border-default` | `#D1D1D1` | Standard borders |

### Dark Theme

| Token | Hex | Role |
|-------|-----|------|
| `--background-primary` | `#000000` | Main app background |
| `--background-secondary` | `#1C1C1C` | Card backgrounds, panels |
| `--background-tertiary` | `#2C2C2C` | Input fields, elevated sections |
| `--surface-elevated` | `#1C1C1C` | Floating elements |
| `--border-subtle` | `#2C2C2C` | Subtle dividers |
| `--border-default` | `#3C3C3C` | Standard borders |

### Text Colors

| Token | Light Mode | Dark Mode | Role |
|-------|------------|-----------|------|
| `--text-primary` | `#000000` | `#FFFFFF` | Headlines, primary content |
| `--text-secondary` | `#6E6E6E` | `#A0A0A0` | Subtitles, metadata, timestamps |
| `--text-tertiary` | `#999999` | `#666666` | Placeholders, hints |
| `--text-inverse` | `#FFFFFF` | `#000000` | Text on accent backgrounds |
| `--text-on-yellow` | `#000000` | `#000000` | Always black text on yellow |

### Chat Bubble Colors

| Token | Hex | Role |
|-------|-----|------|
| `--chat-sent` | `#0FADFF` | Sent text messages (blue) |
| `--chat-received` | `#9B9B9B` | Received text messages (gray) |
| `--chat-snap-sent` | `#E5395E` | Sent snap indicator (red) |
| `--chat-snap-received` | `#9B30FF` | Received snap indicator (purple) |
| `--chat-snap-viewed` | `#C4C4C4` | Opened/viewed snap |
| `--chat-delivered` | `#0FADFF` | Delivered message indicator |

### Snap Status Colors

| Token | Hex | Role |
|-------|-----|------|
| `--snap-red` | `#E5395E` | Snap without audio (sent/received) |
| `--snap-purple` | `#9B30FF` | Snap with audio |
| `--snap-blue` | `#0FADFF` | Chat message |
| `--snap-red-hollow` | `#E5395E` (outline) | Opened snap without audio |
| `--snap-purple-hollow` | `#9B30FF` (outline) | Opened snap with audio |
| `--snap-blue-hollow` | `#0FADFF` (outline) | Opened chat |

### Story Ring Gradients

| Type | Gradient | Role |
|------|----------|------|
| Unseen Story | `linear-gradient(135deg, #FFFC00 0%, #FF6600 100%)` | Yellow-orange ring |
| Close Friends | `linear-gradient(135deg, #00E676 0%, #00BFA5 100%)` | Green ring |
| Seen Story | `#D1D1D1` (solid) | Gray ring |
| Your Story | `linear-gradient(135deg, #0FADFF 0%, #7B68EE 100%)` | Blue-purple ring |

### Semantic Colors

| Token | Hex | Role |
|-------|-----|------|
| `--success` | `#00E676` | Success states, streaks, verifications |
| `--warning` | `#FFB300` | Caution, pending states |
| `--error` | `#FF3B30` | Errors, destructive actions |
| `--info` | `#0FADFF` | Information, links |
| `--streak-fire` | `#FF9500` | Streak fire icon |

### Snapchat+ Premium

| Token | Hex | Role |
|-------|-----|------|
| `--plus-gold` | `#FFD700` | Snapchat+ badge |
| `--plus-gradient-start` | `#FFD700` | Premium gradient start |
| `--plus-gradient-end` | `#FF8C00` | Premium gradient end |

---

## 3. Typography Rules

### Font Stack
=======
# Design System Inspiration of Mintlify

## 1. Visual Theme & Atmosphere

Mintlify's website is a study in documentation-as-product design — a white, airy, information-rich surface that treats clarity as its highest aesthetic value. The page opens with a luminous white (`#ffffff`) background, near-black (`#0d0d0d`) text, and a signature green brand accent (`#18E299`) that signals freshness and intelligence without dominating the palette. The overall mood is calm, confident, and engineered for legibility — a design system that whispers "we care about your developer experience" in every pixel.

The Inter font family carries the entire typographic load. At display sizes (40–64px), it uses tight negative letter-spacing (-0.8px to -1.28px) and semibold weight (600), creating headlines that feel focused and compressed like well-written documentation headers. Body text at 16–18px with 150% line-height provides generous reading comfort. Geist Mono appears exclusively for code and technical labels — uppercase, tracked-out, small — the voice of the terminal inside the marketing page.

What distinguishes Mintlify from other documentation platforms is its atmospheric gradient hero. A soft, cloud-like green-to-white gradient wash behind the hero content creates a sense of ethereal intelligence — documentation that floats above the noise. Below the hero, the page settles into a disciplined alternation of white sections separated by subtle 5% opacity borders. Cards use generous padding (24px+) with large radii (16px–24px) and whisper-thin borders, creating containers that feel open rather than boxed.

**Key Characteristics:**
- Inter with tight negative tracking at display sizes (-0.8px to -1.28px) — compressed yet readable
- Geist Mono for code labels: uppercase, 12px, tracked-out, the terminal voice
- Brand green (`#18E299`) used sparingly — CTAs, hover states, focus rings, and accent touches
- Atmospheric gradient hero with cloud-like green-white wash
- Ultra-round corners: 16px for containers, 24px for featured cards, full-round (9999px) for buttons and pills
- Subtle 5% opacity borders (`rgba(0,0,0,0.05)`) creating barely-there separation
- 8px base spacing system with generous section padding (48px–96px)
- Clean white canvas — no gray backgrounds, no color sections, depth through borders and whitespace alone

## 2. Color Palette & Roles

### Primary
- **Near Black** (`#0d0d0d`): Primary text, headings, dark surfaces. Not pure black — the micro-softness improves reading comfort.
- **Pure White** (`#ffffff`): Page background, card surfaces, input backgrounds.
- **Brand Green** (`#18E299`): The signature accent — CTAs, links on hover, focus rings, brand identity.

### Secondary Accents
- **Brand Green Light** (`#d4fae8`): Tinted green surface for badges, hover states, subtle backgrounds.
- **Brand Green Deep** (`#0fa76e`): Darker green for text on light-green badges, hover states on brand elements.
- **Warm Amber** (`#c37d0d`): Warning states, caution badges — `--twoslash-warn-bg`.
- **Soft Blue** (`#3772cf`): Tag backgrounds, informational annotations — `--twoslash-tag-bg`.
- **Error Red** (`#d45656`): Error states, destructive actions — `--twoslash-error-bg`.

### Neutral Scale
- **Gray 900** (`#0d0d0d`): Primary heading text, nav links.
- **Gray 700** (`#333333`): Secondary text, descriptions, body copy.
- **Gray 500** (`#666666`): Tertiary text, muted labels.
- **Gray 400** (`#888888`): Placeholder text, disabled states, code annotations.
- **Gray 200** (`#e5e5e5`): Borders, dividers, card outlines.
- **Gray 100** (`#f5f5f5`): Subtle surface backgrounds, hover states.
- **Gray 50** (`#fafafa`): Near-white surface tint.

### Interactive
- **Link Default** (`#0d0d0d`): Links match text color, relying on underline/context.
- **Link Hover** (`#18E299`): Brand green on hover — `var(--color-brand)`.
- **Focus Ring** (`#18E299`): Brand green focus outline for inputs and interactive elements.

### Surface & Overlay
- **Card Background** (`#ffffff`): White cards on white background, separated by borders.
- **Border Subtle** (`rgba(0,0,0,0.05)`): 5% black opacity borders — the primary separation mechanism.
- **Border Medium** (`rgba(0,0,0,0.08)`): Slightly stronger borders for interactive elements.
- **Input Border Focus** (`var(--color-brand)`): Green ring on focused inputs.

### Shadows & Depth
- **Card Shadow** (`rgba(0,0,0,0.03) 0px 2px 4px`): Barely-there ambient shadow for subtle lift.
- **Button Shadow** (`rgba(0,0,0,0.06) 0px 1px 2px`): Micro-shadow for button depth.
- **No heavy shadows**: Mintlify relies on borders, not shadows, for depth.

## 3. Typography Rules

### Font Family
- **Primary**: `Inter`, with fallback: `Inter Fallback, system-ui, -apple-system, sans-serif`
- **Monospace**: `Geist Mono`, with fallback: `Geist Mono Fallback, ui-monospace, SFMono-Regular, monospace`
>>>>>>> parent of 4f12666 (lk)

```css
/* Primary app font */
--font-primary: 'Graphik', -apple-system, BlinkMacSystemFont, 'Avenir Next', 'Segoe UI', Roboto, sans-serif;

<<<<<<< HEAD
/* Display/Marketing font */
--font-display: 'Avenir Next', 'Graphik', system-ui, sans-serif;

/* Monospace for codes */
--font-mono: 'SF Mono', 'Menlo', 'Monaco', monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Hero Title | 32px | 700 | 38px | -0.5px | `--text-primary` |
| Section Header | 24px | 700 | 30px | -0.3px | `--text-primary` |
| Page Title | 20px | 600 | 26px | 0 | `--text-primary` |
| Card Title | 17px | 600 | 22px | 0 | `--text-primary` |
| Body Large | 17px | 400 | 22px | 0 | `--text-primary` |
| Body Regular | 15px | 400 | 20px | 0 | `--text-primary` |
| Body Small | 13px | 400 | 18px | 0 | `--text-secondary` |
| Caption | 12px | 500 | 16px | 0.2px | `--text-secondary` |
| Micro | 10px | 600 | 14px | 0.5px | `--text-tertiary` |
| Username | 15px | 600 | 20px | 0 | `--text-primary` |
| Timestamp | 11px | 400 | 14px | 0.3px | `--text-tertiary` |
| Button Text | 15px | 600 | 20px | 0.3px | Contextual |
| Tab Label | 12px | 600 | 16px | 0.5px | Contextual |

### Font Weights

| Weight | Name | Usage |
|--------|------|-------|
| 400 | Regular | Body text, descriptions, chat messages |
| 500 | Medium | Subtitles, secondary buttons, metadata |
| 600 | Semibold | Usernames, titles, primary buttons |
| 700 | Bold | Headlines, section headers, emphasis |

### Text Styling

```css
/* Chat message text */
.chat-message {
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

/* Username in chat/story */
.username {
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
}

/* Discover headline */
.discover-headline {
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.3px;
}

/* Story caption overlay */
.story-caption {
  font-size: 17px;
  font-weight: 500;
  line-height: 22px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}
```

---
=======
| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Inter | 64px (4.00rem) | 600 | 1.15 (tight) | -1.28px | Maximum impact, hero headlines |
| Section Heading | Inter | 40px (2.50rem) | 600 | 1.10 (tight) | -0.8px | Feature section titles |
| Sub-heading | Inter | 24px (1.50rem) | 500 | 1.30 (tight) | -0.24px | Card headings, sub-sections |
| Card Title | Inter | 20px (1.25rem) | 600 | 1.30 (tight) | -0.2px | Feature card titles |
| Card Title Light | Inter | 20px (1.25rem) | 500 | 1.30 (tight) | -0.2px | Secondary card headings |
| Body Large | Inter | 18px (1.13rem) | 400 | 1.50 | normal | Hero descriptions, introductions |
| Body | Inter | 16px (1.00rem) | 400 | 1.50 | normal | Standard reading text |
| Body Medium | Inter | 16px (1.00rem) | 500 | 1.50 | normal | Navigation, emphasized text |
| Button | Inter | 15px (0.94rem) | 500 | 1.50 | normal | Button labels |
| Link | Inter | 14px (0.88rem) | 500 | 1.50 | normal | Navigation links, small CTAs |
| Caption | Inter | 14px (0.88rem) | 400–500 | 1.50–1.71 | normal | Metadata, descriptions |
| Label Uppercase | Inter | 13px (0.81rem) | 500 | 1.50 | 0.65px | `text-transform: uppercase`, section labels |
| Small | Inter | 13px (0.81rem) | 400–500 | 1.50 | -0.26px | Small body text |
| Mono Code | Geist Mono | 12px (0.75rem) | 500 | 1.50 | 0.6px | `text-transform: uppercase`, technical labels |
| Mono Badge | Geist Mono | 12px (0.75rem) | 600 | 1.50 | 0.6px | `text-transform: uppercase`, status badges |
| Mono Micro | Geist Mono | 10px (0.63rem) | 500 | 1.50 | normal | `text-transform: uppercase`, tiny labels |

### Principles
- **Tight tracking at display sizes**: Inter at 40–64px uses -0.8px to -1.28px letter-spacing. This compression creates headlines that feel deliberate and space-efficient — documentation headings, not billboard copy.
- **Relaxed reading at body sizes**: 16–18px body text uses normal tracking with 150% line-height, creating generous reading lanes. Documentation demands comfort.
- **Two-font system**: Inter for all human-readable content, Geist Mono exclusively for technical/code contexts. The boundary is strict — no mixing.
- **Uppercase as hierarchy signal**: Section labels and technical tags use uppercase + positive tracking (0.6px–0.65px) as a clear visual delimiter between content types.
- **Three weights**: 400 (body/reading), 500 (UI/navigation/emphasis), 600 (headings/titles). No bold (700) in the system.
>>>>>>> parent of 4f12666 (lk)

## 4. Component Stylings

### Buttons

<<<<<<< HEAD
#### Primary Button (Yellow)
```css
.button-primary {
  background: #FFFC00;
  color: #000000;
  font-size: 15px;
  font-weight: 600;
  padding: 14px 24px;
  border-radius: 28px;
  border: none;
  min-height: 48px;
  transition: transform 150ms ease, background 150ms ease;
}

.button-primary:hover {
  background: #E6E300;
}

.button-primary:active {
  transform: scale(0.97);
  background: #D4D200;
}

.button-primary:disabled {
  background: #F0F0F0;
  color: #A0A0A0;
}
```

#### Secondary Button (Outlined)
```css
.button-secondary {
  background: transparent;
  color: #000000;
  font-size: 15px;
  font-weight: 600;
  padding: 14px 24px;
  border-radius: 28px;
  border: 2px solid #000000;
  min-height: 48px;
}

.button-secondary:hover {
  background: rgba(0, 0, 0, 0.05);
}

/* Dark mode variant */
.button-secondary.dark {
  color: #FFFFFF;
  border-color: #FFFFFF;
}
```

#### Ghost Button
```css
.button-ghost {
  background: transparent;
  color: #0FADFF;
  font-size: 15px;
  font-weight: 600;
  padding: 14px 24px;
  border: none;
}

.button-ghost:active {
  opacity: 0.7;
}
```

#### Icon Button
```css
.button-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
}

.button-icon:active {
  background: rgba(0, 0, 0, 0.1);
}

/* Camera capture button */
.button-capture {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 4px solid #FFFFFF;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.button-capture:active {
  transform: scale(0.95);
}

.button-capture.recording {
  background: #E5395E;
  border-color: #E5395E;
}
```

### Chat Bubbles

#### Sent Message
```css
.chat-bubble-sent {
  background: #0FADFF;
  color: #FFFFFF;
  padding: 10px 14px;
  border-radius: 20px 20px 4px 20px;
  max-width: 75%;
  font-size: 15px;
  line-height: 20px;
}
```

#### Received Message
```css
.chat-bubble-received {
  background: #F0F0F0;
  color: #000000;
  padding: 10px 14px;
  border-radius: 20px 20px 20px 4px;
  max-width: 75%;
  font-size: 15px;
  line-height: 20px;
}

/* Dark mode */
.chat-bubble-received.dark {
  background: #2C2C2C;
  color: #FFFFFF;
}
```

#### Snap Indicator (in chat)
```css
.snap-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
}

.snap-indicator-icon {
  width: 32px;
  height: 32px;
}

.snap-indicator.red .snap-indicator-icon {
  color: #E5395E;
}

.snap-indicator.purple .snap-indicator-icon {
  color: #9B30FF;
}

.snap-indicator.opened .snap-indicator-icon {
  fill: transparent;
  stroke: currentColor;
  stroke-width: 2px;
}

.snap-indicator-text {
  font-size: 13px;
  font-weight: 500;
  color: #6E6E6E;
}
```

### Story Ring / Avatar

#### Story Ring
```css
.story-ring {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, #FFFC00 0%, #FF6600 100%);
}

.story-ring-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #FFFFFF;
  padding: 2px;
}

.story-ring-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

/* Viewed story */
.story-ring.viewed {
  background: #D1D1D1;
}

/* Close friends */
.story-ring.close-friends {
  background: linear-gradient(135deg, #00E676 0%, #00BFA5 100%);
}

/* No story */
.story-ring.no-story {
  background: transparent;
  border: 2px solid #E8E8E8;
}
```

#### Bitmoji Avatar
```css
.bitmoji-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #FFFC00;
  overflow: hidden;
  position: relative;
}

.bitmoji-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Bitmoji with action pose */
.bitmoji-avatar.action {
  width: 80px;
  height: 80px;
  border-radius: 0;
  background: transparent;
}

/* Status indicator */
.bitmoji-avatar .status {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
  background: #00E676;
}
```

### Cards

#### Chat List Item
```css
.chat-list-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 12px;
  background: #FFFFFF;
}

.chat-list-item:active {
  background: #F7F7F7;
}

.chat-list-item-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  flex-shrink: 0;
}

.chat-list-item-content {
  flex: 1;
  min-width: 0;
}

.chat-list-item-name {
  font-size: 15px;
  font-weight: 600;
  color: #000000;
}

.chat-list-item-preview {
  font-size: 13px;
  font-weight: 500;
  color: #6E6E6E;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chat-list-item-meta {
  font-size: 11px;
  color: #999999;
}
```

#### Discover Card
```css
.discover-card {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  background: #1C1C1C;
}

.discover-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.discover-card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
}

.discover-card-title {
  font-size: 17px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 22px;
}

.discover-card-source {
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 4px;
}

/* Large discover card (featured) */
.discover-card.large {
  aspect-ratio: 4/5;
  border-radius: 24px;
}
```

#### Snap Map Friend Card
```css
.map-friend-card {
  background: #FFFFFF;
  border-radius: 20px;
  padding: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 280px;
}

.map-friend-bitmoji {
  width: 48px;
  height: 48px;
}

.map-friend-info {
  flex: 1;
}

.map-friend-name {
  font-size: 15px;
  font-weight: 600;
  color: #000000;
}

.map-friend-location {
  font-size: 13px;
  color: #6E6E6E;
}

.map-friend-time {
  font-size: 11px;
  color: #999999;
}
```

### Navigation

#### Bottom Navigation
```css
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 84px;
  padding-bottom: 20px; /* Safe area */
  background: #FFFFFF;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #E8E8E8;
}

.bottom-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
}

.bottom-nav-item-icon {
  width: 28px;
  height: 28px;
  color: #6E6E6E;
}

.bottom-nav-item.active .bottom-nav-item-icon {
  color: #000000;
}

.bottom-nav-item-label {
  font-size: 10px;
  font-weight: 600;
  color: #6E6E6E;
}

.bottom-nav-item.active .bottom-nav-item-label {
  color: #000000;
}

/* Camera button (center) */
.bottom-nav-camera {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #FFFC00;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.bottom-nav-camera-icon {
  width: 28px;
  height: 28px;
  color: #000000;
}
```

#### Header Navigation
```css
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #FFFFFF;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-title {
  font-size: 20px;
  font-weight: 700;
  color: #000000;
}

.header-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-icon svg {
  width: 24px;
  height: 24px;
  color: #000000;
}
```

### Inputs

#### Search Input
```css
.search-input {
  width: 100%;
  height: 44px;
  background: #F0F0F0;
  border: none;
  border-radius: 22px;
  padding: 0 16px 0 44px;
  font-size: 15px;
  font-weight: 400;
  color: #000000;
}

.search-input::placeholder {
  color: #999999;
}

.search-input-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #999999;
}

/* Dark mode */
.search-input.dark {
  background: #2C2C2C;
  color: #FFFFFF;
}
```

#### Chat Input
```css
.chat-input-container {
  display: flex;
  align-items: flex-end;
  padding: 8px 12px;
  gap: 8px;
  background: #FFFFFF;
  border-top: 1px solid #E8E8E8;
}

.chat-input {
  flex: 1;
  min-height: 36px;
  max-height: 120px;
  background: #F0F0F0;
  border: none;
  border-radius: 18px;
  padding: 8px 16px;
  font-size: 15px;
  line-height: 20px;
  resize: none;
}

.chat-input-send {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #0FADFF;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
}

.chat-input-send svg {
  width: 20px;
  height: 20px;
  color: #FFFFFF;
}
```

### Modals & Overlays

#### Bottom Sheet
```css
.bottom-sheet-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.bottom-sheet {
  background: #FFFFFF;
  border-radius: 24px 24px 0 0;
  padding: 8px 0 34px;
  max-height: 85vh;
  overflow-y: auto;
}

.bottom-sheet-handle {
  width: 40px;
  height: 4px;
  background: #D1D1D1;
  border-radius: 2px;
  margin: 8px auto 16px;
}

.bottom-sheet-header {
  text-align: center;
  padding: 16px;
  border-bottom: 1px solid #E8E8E8;
}

.bottom-sheet-title {
  font-size: 17px;
  font-weight: 600;
  color: #000000;
}
```

#### Friend Profile Modal
```css
.profile-modal {
  background: #FFFFFF;
  border-radius: 24px;
  padding: 24px;
  text-align: center;
  max-width: 320px;
  margin: auto;
}

.profile-modal-bitmoji {
  width: 120px;
  height: 120px;
  margin: 0 auto 16px;
}

.profile-modal-name {
  font-size: 24px;
  font-weight: 700;
  color: #000000;
}

.profile-modal-username {
  font-size: 15px;
  font-weight: 500;
  color: #6E6E6E;
  margin-top: 4px;
}

.profile-modal-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
}

.profile-modal-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.profile-modal-action-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #F0F0F0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-modal-action-label {
  font-size: 12px;
  font-weight: 500;
  color: #6E6E6E;
}
```

### Streaks & Badges

```css
.streak-indicator {
  display: flex;
  align-items: center;
  gap: 4px;
}

.streak-fire {
  width: 16px;
  height: 16px;
  color: #FF9500;
}

.streak-count {
  font-size: 13px;
  font-weight: 600;
  color: #FF9500;
}

/* Snapchat+ badge */
.plus-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  background: linear-gradient(135deg, #FFD700 0%, #FF8C00 100%);
  border-radius: 12px;
}

.plus-badge-text {
  font-size: 10px;
  font-weight: 700;
  color: #000000;
}

/* Best friend emoji indicators */
.friend-emoji {
  font-size: 14px;
  margin-left: 4px;
}
```

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-2` | 2px | Micro gaps, icon padding |
| `--spacing-4` | 4px | Tight gaps, inline spacing |
| `--spacing-8` | 8px | Standard element gaps |
| `--spacing-12` | 12px | Card internal padding |
| `--spacing-16` | 16px | Section padding, margins |
| `--spacing-20` | 20px | Large gaps |
| `--spacing-24` | 24px | Modal padding, section breaks |
| `--spacing-32` | 32px | Major section spacing |

### Core Layout Structure

```
Camera View (Home)
┌─────────────────────────────────────┐
│  ┌─ Profile  Search ─┐              │
│  └───────────────────┘              │
│                                     │
│                                     │
│         [ Camera Feed ]             │
│                                     │
│                                     │
│  ┌── AR Lenses Carousel ──┐         │
│  └────────────────────────┘         │
│     ┌──────────────────┐            │
│     │  Capture Button  │            │
│     └──────────────────┘            │
│  ┌─Map─┬─Camera─┬─Chat─┐            │
│  └─────┴────────┴──────┘            │
└─────────────────────────────────────┘

Chat/Stories Screen
┌─────────────────────────────────────┐
│  ┌─ Back   Chat    New ─┐           │
│  └──────────────────────┘           │
│  ┌──────────────────────┐           │
│  │     Search Bar       │           │
│  └──────────────────────┘           │
│  ┌─ Stories (horizontal scroll) ──┐ │
│  │  [O] [O] [O] [O] [O] [O] [O]   │ │
│  └────────────────────────────────┘ │
│  ┌──────────────────────────────┐   │
│  │  Chat List Item              │   │
│  │  Chat List Item              │   │
│  │  Chat List Item              │   │
│  │  ...                         │   │
│  └──────────────────────────────┘   │
│  ┌─Map─┬─Camera─┬─Chat─┐            │
│  └─────┴────────┴──────┘            │
└─────────────────────────────────────┘
```

### Grid System
Snapchat uses a **fluid, gesture-based layout** rather than rigid grids. The primary navigation is horizontal swiping between major sections (Map | Camera | Chat | Discover).

#### Screen Navigation
- **Swipe Left** from Camera: Chat & Friends
- **Swipe Right** from Camera: Discover & Stories
- **Swipe Down** from Camera: Memories
- **Swipe Up** from Camera: Snap Map (or profiles)

### Content Width
- Full bleed for camera and stories
- 16px horizontal padding for lists and cards
- Max content width: 100% (edge-to-edge design)
- Modal max-width: 320px centered

### Whitespace Philosophy
- **Generous touch targets**: Minimum 44px for all interactive elements
- **Visual breathing room**: Stories and cards have clear separation
- **Camera dominance**: Camera view has minimal UI overlay
- **Dense chat lists**: Efficient vertical spacing for conversation scanning

---

## 6. Depth & Elevation

### Shadow System

| Level | Shadow | Usage |
|-------|--------|-------|
| Level 0 | None | Flat surfaces, background |
| Level 1 | `0 1px 3px rgba(0,0,0,0.08)` | Subtle lift, cards |
| Level 2 | `0 4px 12px rgba(0,0,0,0.12)` | Floating buttons, chips |
| Level 3 | `0 8px 24px rgba(0,0,0,0.15)` | Modals, bottom sheets |
| Level 4 | `0 16px 48px rgba(0,0,0,0.2)` | Snap Map cards, overlays |

### Surface Hierarchy

```
┌─────────────────────────────────────────────────────────┐
│ Overlay (Modals, Profile)              Blur + Shadow    │
├─────────────────────────────────────────────────────────┤
│ Floating (Bottom sheets, Popovers)     #FFFFFF + L3     │
├─────────────────────────────────────────────────────────┤
│ Elevated (Cards, Buttons)              #FFFFFF + L1     │
├─────────────────────────────────────────────────────────┤
│ Primary (Main content)                 #FFFFFF          │
├─────────────────────────────────────────────────────────┤
│ Sunken (Inputs, secondary)             #F7F7F7          │
└─────────────────────────────────────────────────────────┘
```

### Z-Index Scale

| Layer | Z-Index | Elements |
|-------|---------|----------|
| Base | 0 | Main content, camera feed |
| Sticky | 10 | Headers, navigation |
| Overlay Controls | 100 | Camera controls, AR lenses |
| Dropdown | 200 | Menus, autocomplete |
| Bottom Sheet | 300 | Action sheets, share menus |
| Modal | 400 | Dialogs, profiles |
| Toast | 500 | Notifications, snackbars |
| System | 600 | Loading states, critical alerts |

### Blur Effects

```css
/* Frosted glass effect */
.glass-surface {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Dark glass effect */
.glass-surface-dark {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(20px);
}

/* Camera UI overlay */
.camera-overlay {
  background: transparent;
}

.camera-button-background {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  border-radius: 50%;
}
```

---
=======
**Primary Brand (Full-round)**
- Background: `#0d0d0d` (near-black)
- Text: `#ffffff`
- Padding: 8px 24px
- Radius: 9999px (full pill)
- Font: Inter 15px weight 500
- Shadow: `rgba(0,0,0,0.06) 0px 1px 2px`
- Hover: opacity 0.9
- Use: Primary CTA ("Get Started", "Start Building")

**Secondary / Ghost (Full-round)**
- Background: `#ffffff`
- Text: `#0d0d0d`
- Padding: 4.5px 12px
- Radius: 9999px (full pill)
- Border: `1px solid rgba(0,0,0,0.08)`
- Font: Inter 15px weight 500
- Hover: opacity 0.9
- Use: Secondary actions ("Request Demo", "View Docs")

**Transparent / Nav Button**
- Background: transparent
- Text: `#0d0d0d`
- Padding: 5px 6px
- Radius: 8px
- Border: none or `1px solid rgba(0,0,0,0.05)`
- Use: Navigation items, icon buttons

**Brand Accent Button**
- Background: `#18E299`
- Text: `#0d0d0d`
- Padding: 8px 24px
- Radius: 9999px
- Use: Special promotional CTAs

### Cards & Containers

**Standard Card**
- Background: `#ffffff`
- Border: `1px solid rgba(0,0,0,0.05)`
- Radius: 16px
- Padding: 24px
- Shadow: `rgba(0,0,0,0.03) 0px 2px 4px`
- Hover: subtle border darkening to `rgba(0,0,0,0.08)`

**Featured Card**
- Background: `#ffffff`
- Border: `1px solid rgba(0,0,0,0.05)`
- Radius: 24px
- Padding: 32px
- Inner content areas may have their own 16px radius containers

**Logo/Trust Card**
- Background: `#fafafa` or `#ffffff`
- Border: `1px solid rgba(0,0,0,0.05)`
- Radius: 16px
- Centered logo/icon with consistent sizing

### Inputs & Forms

**Email Input**
- Background: transparent or `#ffffff`
- Text: `#0d0d0d`
- Padding: 0px 12px (height controlled by line-height)
- Border: `1px solid rgba(0,0,0,0.08)`
- Radius: 9999px (full pill, matching buttons)
- Focus: `1px solid var(--color-brand)` + `outline: 1px solid var(--color-brand)`
- Placeholder: `#888888`

### Navigation
- Clean horizontal nav on white, sticky with backdrop blur
- Brand logotype left-aligned
- Links: Inter 14–15px weight 500, `#0d0d0d` text
- Hover: color shifts to brand green `var(--color-brand)`
- CTA: dark pill button right-aligned ("Get Started")
- Mobile: hamburger menu collapse at 768px

### Image Treatment
- Product screenshots with subtle 1px borders
- Rounded containers: 16px–24px radius
- Atmospheric gradient backgrounds behind hero images
- Cloud/sky imagery with soft green tinting

### Distinctive Components

**Atmospheric Hero**
- Full-width gradient wash: soft green-to-white cloud-like gradient
- Centered headline with tight tracking
- Subtitle in muted gray
- Dual CTA buttons (dark primary + ghost secondary)
- The gradient creates a sense of elevation and intelligence

**Trust Bar / Logo Grid**
- "Loved by your favorite companies" section
- Company logos in muted grayscale
- Grid or horizontal layout with consistent sizing
- Subtle border separation between logos

**Feature Cards with Icons**
- Icon or illustration at top
- Title at 20px weight 600
- Description at 14–16px in gray
- Consistent padding and border treatment
- Grid layout: 2–3 columns on desktop

**CTA Footer Section**
- Dark or gradient background
- Large headline: "Make documentation your winning advantage"
- Email input with pill styling
- Brand green accent on CTAs

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 2px, 4px, 5px, 6px, 7px, 8px, 10px, 12px, 16px, 24px, 32px, 48px, 64px
- Section padding: 48px–96px vertical
- Card padding: 24px–32px
- Component gaps: 8px–16px

### Grid & Container
- Max content width: approximately 1200px
- Hero: centered single-column with generous top padding (96px+)
- Feature sections: 2–3 column CSS Grid for cards
- Full-width sections with contained content
- Consistent horizontal padding: 24px (mobile) to 32px (desktop)

### Whitespace Philosophy
- **Documentation-grade breathing room**: Every element has generous surrounding whitespace. Mintlify sells documentation, so the marketing page itself demonstrates reading comfort.
- **Sections as chapters**: Each feature section is a self-contained unit with 48px–96px vertical padding, creating clear "chapter breaks."
- **Content density is low**: Unlike developer tools that pack the page, Mintlify uses 1–2 key messages per section with supporting imagery.

### Border Radius Scale
- Small (4px): Inline code, small tags, tooltips
- Medium (8px): Nav buttons, transparent buttons, small containers
- Standard (16px): Cards, content containers, image wrappers
- Large (24px): Featured cards, hero containers, section panels
- Full Pill (9999px): Buttons, inputs, badges, pills — the signature shape

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Page background, text blocks |
| Subtle Border (Level 1) | `1px solid rgba(0,0,0,0.05)` | Standard card borders, dividers |
| Medium Border (Level 1b) | `1px solid rgba(0,0,0,0.08)` | Interactive elements, input borders |
| Ambient Shadow (Level 2) | `rgba(0,0,0,0.03) 0px 2px 4px` | Cards with subtle lift |
| Button Shadow (Level 2b) | `rgba(0,0,0,0.06) 0px 1px 2px` | Button micro-depth |
| Focus Ring (Accessibility) | `1px solid #18E299` outline | Focused inputs, active interactive elements |

**Shadow Philosophy**: Mintlify barely uses shadows. The depth system is almost entirely border-driven — ultra-subtle 5% opacity borders create separation without visual weight. When shadows appear, they're atmospheric whispers (`0.03 opacity, 2px blur, 4px spread`) that add the barest sense of lift. This restraint keeps the page feeling flat and paper-like — appropriate for a documentation company whose product is about clarity and readability.
>>>>>>> parent of 4f12666 (lk)

### Decorative Depth
- Hero gradient: atmospheric green-white cloud gradient behind hero content
- No background color alternation — white on white throughout
- Depth comes from border opacity variation (5% → 8%) and whitespace

<<<<<<< HEAD
### Do's

| Guideline | Rationale |
|-----------|-----------|
| Use Snapchat Yellow (#FFFC00) as the primary brand accent | Instant brand recognition |
| Keep camera as the home screen experience | Camera-first philosophy |
| Use circular avatars and story rings consistently | Platform identity |
| Implement swipe gestures for navigation | Natural mobile interaction |
| Show Bitmoji avatars for personality | Personal connection |
| Use ephemeral indicators (viewed/delivered status) | Core platform concept |
| Apply rounded corners (16-24px on cards) | Friendly, approachable feel |
| Include streak indicators and friend emojis | Social engagement features |
| Use gradient story rings for unviewed content | Visual urgency |
| Design for full-bleed, edge-to-edge content | Modern mobile experience |

### Don'ts

| Anti-Pattern | Why to Avoid |
|--------------|--------------|
| Never make camera secondary to feeds | Breaks core platform identity |
| Avoid static, permanent content feel | Snapchat is about ephemeral moments |
| Don't use square avatars or sharp corners | Inconsistent with brand |
| Never use small touch targets (<44px) | Poor mobile usability |
| Avoid complex navigation hierarchies | Users expect swipe simplicity |
| Don't overload camera UI with controls | Keep focus on capturing |
| Avoid formal, corporate tone | Target audience is Gen-Z |
| Never show raw timestamps (use "2h ago") | More casual, approachable |
| Don't forget dark mode support | User expectation |
| Avoid heavy text-based interfaces | Visual-first platform |

### Content Guidelines

| Do | Don't |
|----|-------|
| Use casual, friendly language | Formal corporate speak |
| Show relative timestamps ("Just now", "5m") | Exact timestamps everywhere |
| Include emoji and Bitmoji naturally | Text-heavy explanations |
| Give immediate visual feedback on actions | Silent state changes |
| Communicate through status colors | Rely only on text labels |
| Keep copy short and scannable | Long paragraphs of text |

---

## 8. Responsive Behavior

### Device Breakpoints

| Name | Width | Behavior |
|------|-------|----------|
| Mobile Small | <375px | Compact layouts, smaller avatars |
| Mobile Standard | 375px-414px | Default design specs |
| Mobile Large | 414px-428px | Slightly larger touch targets |
| Tablet | 768px+ | Not primary target, scaled mobile |

### Mobile-First Adaptations

| Component | Standard Mobile | Large Mobile |
|-----------|-----------------|--------------|
| Story Ring | 64px | 72px |
| Avatar (Chat List) | 56px | 60px |
| Bottom Nav Height | 84px (with safe area) | 84px |
| Card Border Radius | 16px | 20px |
| Chat Bubble Max Width | 75% | 70% |

### Touch Targets

| Element | Minimum Size | Recommended |
|---------|--------------|-------------|
| Any tappable element | 44px × 44px | 48px × 48px |
| Primary CTA buttons | 48px height | 56px height |
| Capture button | 72px × 72px | 72px × 72px |
| Story ring (tappable) | 64px × 64px | 64px × 64px |
| Bottom nav item | 64px × 64px | 68px × 68px |

### Gesture Zones

```
┌─────────────────────────────────────┐
│          [Swipe Down]               │ → Memories / Profile
│  ┌───┐                       ┌───┐  │
│  │ < │                       │ > │  │
│  │ S │     [Camera View]     │ S │  │
│  │ W │                       │ W │  │
│  │ I │                       │ I │  │
│  │ P │                       │ P │  │
│  │ E │                       │ E │  │
│  └───┘                       └───┘  │
│   ↓                           ↓     │
│  Chat                      Discover │
│                                     │
│          [Swipe Up]                 │ → Snap Map
└─────────────────────────────────────┘
```

### Safe Areas

```css
/* iOS Safe Area handling */
.bottom-nav {
  padding-bottom: env(safe-area-inset-bottom, 20px);
}

.header {
  padding-top: env(safe-area-inset-top, 0);
}

.camera-controls {
  margin-bottom: calc(84px + env(safe-area-inset-bottom, 20px));
}
```

### Orientation
- **Portrait only** for main app experience
- Camera and stories locked to portrait
- Snaps can be viewed in captured orientation

---

## 9. Agent Prompt Guide

### Quick Reference

```yaml
# Brand Colors
Snap Yellow: #FFFC00
Snap Black: #000000
Snap White: #FFFFFF

# Chat Colors
Sent Message (Blue): #0FADFF
Received (Gray Light): #F0F0F0
Snap Red (No Audio): #E5395E
Snap Purple (Audio): #9B30FF

# Story Ring
Unseen: gradient(#FFFC00, #FF6600)
Viewed: #D1D1D1
Close Friends: gradient(#00E676, #00BFA5)

# Text
Primary: #000000 (light) / #FFFFFF (dark)
Secondary: #6E6E6E (light) / #A0A0A0 (dark)
Tertiary: #999999 (light) / #666666 (dark)

# Backgrounds
Light Primary: #FFFFFF
Light Secondary: #F7F7F7
Dark Primary: #000000
Dark Secondary: #1C1C1C

# Border Radius
Buttons: 28px (pill)
Cards: 16-24px
Chat Bubbles: 20px (with 4px tail)
Avatars: 50% (circle)

# Fonts
Primary: Graphik, Avenir Next, system-ui
Weights: 400, 500, 600, 700
Base Size: 15px
```

### Example Prompts

#### Chat List Screen
```
Create a Snapchat chat list following the design system:
- Header: White background, "Chat" title 20px bold, search + new chat icons
- Search bar: #F0F0F0 background, 44px height, 22px border-radius
- Stories row: Horizontal scroll, 64px story rings with gradient borders
- Each chat item: 56px Bitmoji avatar, username 15px semibold, preview 13px gray
- Status indicators: Red/purple filled squares for unopened, hollow for opened
- Streak fire emoji with count in orange
- Bottom nav: Map, Camera (yellow 56px circle), Chat icons
```

#### Story Ring Component
```
Design a Snapchat story ring:
- Outer ring: 64px circle
- Gradient border: 3px, from #FFFC00 to #FF6600
- Inner white ring: 2px
- Avatar: Circular Bitmoji image
- Viewed state: Solid #D1D1D1 border instead of gradient
- Username below: 12px medium, centered
- Tap area: Full 64px circle
```

#### Camera Capture Screen
```
Create the Snapchat camera interface:
- Full-bleed camera viewfinder
- Top row: Profile Bitmoji (left), Search icon (right)
- AR lens carousel: Horizontal scroll at bottom above capture
- Capture button: 72px white circle, 4px border
- Left of capture: Gallery thumbnail (rounded square)
- Right of capture: Flip camera icon
- Recording state: Red fill on capture button
- Bottom nav: Semi-transparent, icons for Map/Chat/Discover
```

#### Discover Card
```
Design a Snapchat Discover card:
- Card: 16/9 aspect ratio, 16px border-radius
- Background: Full-bleed image
- Gradient overlay: transparent to rgba(0,0,0,0.8) at bottom
- Title: 17px bold white, max 2 lines
- Source name: 12px medium, white at 70% opacity
- Optional: "Sponsored" tag in top corner
- Tap feedback: Scale to 0.98
```

#### Friend Profile Modal
```
Create a Snapchat friend profile:
- Modal: White background, 24px border-radius
- Centered Bitmoji: 120px
- Display name: 24px bold
- Username: 15px gray, prefixed with @
- Snapchat+ badge if applicable (gold gradient pill)
- Action buttons: 56px circles for Send Snap, Chat, Video Call
- Stats: Snap Score, mutual friends count
- Close button: X in top right
```

### CSS Variables Template

```css
:root {
  /* Brand */
  --snap-yellow: #FFFC00;
  --snap-black: #000000;
  --snap-white: #FFFFFF;
  
  /* Chat */
  --chat-blue: #0FADFF;
  --chat-gray: #F0F0F0;
  --snap-red: #E5395E;
  --snap-purple: #9B30FF;
  
  /* Backgrounds (Light) */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F7F7F7;
  --bg-tertiary: #EFEFEF;
  
  /* Backgrounds (Dark) */
  --bg-primary-dark: #000000;
  --bg-secondary-dark: #1C1C1C;
  --bg-tertiary-dark: #2C2C2C;
  
  /* Text (Light) */
  --text-primary: #000000;
  --text-secondary: #6E6E6E;
  --text-tertiary: #999999;
  
  /* Text (Dark) */
  --text-primary-dark: #FFFFFF;
  --text-secondary-dark: #A0A0A0;
  --text-tertiary-dark: #666666;
  
  /* Semantic */
  --success: #00E676;
  --warning: #FFB300;
  --error: #FF3B30;
  --streak: #FF9500;
  
  /* Story Gradients */
  --story-unseen: linear-gradient(135deg, #FFFC00, #FF6600);
  --story-close: linear-gradient(135deg, #00E676, #00BFA5);
  --story-viewed: #D1D1D1;
  
  /* Typography */
  --font-family: 'Graphik', -apple-system, BlinkMacSystemFont, 'Avenir Next', sans-serif;
  
  /* Spacing */
  --space-4: 4px;
  --space-8: 8px;
  --space-12: 12px;
  --space-16: 16px;
  --space-24: 24px;
  --space-32: 32px;
  
  /* Radii */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 28px;
  --radius-round: 50%;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.12);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.15);
}
```

---

## Summary

Snapchat's design system creates a youthful, camera-first communication experience through:

1. **Signature Yellow (#FFFC00)** as the instantly recognizable brand anchor
2. **Camera-first philosophy** with the viewfinder as home screen
3. **Ephemeral visual language** using status colors (red/purple/blue) and hollow indicators
4. **Circular avatars and Bitmoji** for personal, playful identity
5. **Gradient story rings** creating visual urgency for unviewed content
6. **Gesture-driven navigation** (swipe between Map, Camera, Chat, Discover)
7. **Pill-shaped buttons** and generous border-radius (16-24px) for friendly feel
8. **Chat bubble system** with distinct sent (blue) and received (gray) styling
9. **Dark mode support** with pure black backgrounds

When implementing Snapchat-style interfaces, prioritize:
- Camera viewfinder as the central experience
- Swipe gestures over tab navigation
- Story rings with gradient borders for engagement
- Bitmoji integration for personality
- Ephemeral content indicators (viewed, delivered, screenshots)
- Mobile-first, thumb-friendly design
- Playful, Gen-Z appropriate tone and visual language
=======
## 7. Dark Mode

### Color Inversions
- **Background**: `#0d0d0d` (near-black)
- **Text Primary**: `#ededed` (near-white)
- **Text Secondary**: `#a0a0a0` (muted gray)
- **Brand Green**: `#18E299` (unchanged — the green works on both backgrounds)
- **Border**: `rgba(255,255,255,0.08)` (white at 8% opacity)
- **Card Background**: `#141414` (slightly lighter than page)
- **Shadow**: `rgba(0,0,0,0.4) 0px 2px 4px` (stronger shadow for contrast)

### Key Adjustments
- Buttons invert: white background dark text becomes dark background light text
- Badge backgrounds shift to deeper tones with lighter text
- Focus ring remains brand green
- Hero gradient shifts to dark-tinted green atmospheric wash

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, stacked layout, hamburger nav |
| Tablet | 768–1024px | Two-column grids begin, expanded padding |
| Desktop | >1024px | Full layout, 3-column grids, maximum content width |

### Touch Targets
- Buttons with full-pill shape have comfortable 8px+ vertical padding
- Navigation links spaced with adequate 16px+ gaps
- Mobile menu provides full-width tap targets

### Collapsing Strategy
- Hero: 64px → 40px headline, maintains tight tracking proportionally
- Navigation: horizontal links + CTA → hamburger menu at 768px
- Feature cards: 3-column → 2-column → single column stacked
- Section spacing: 96px → 48px on mobile
- Footer: multi-column → stacked single column
- Trust bar: grid → horizontal scroll or stacked

### Image Behavior
- Product screenshots maintain aspect ratio with responsive containers
- Hero gradient simplifies on mobile
- Full-width sections maintain edge-to-edge treatment

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Near Black (`#0d0d0d`)
- Background: Pure White (`#ffffff`)
- Heading text: Near Black (`#0d0d0d`)
- Body text: Gray 700 (`#333333`)
- Border: `rgba(0,0,0,0.05)` (5% opacity)
- Brand accent: Green (`#18E299`)
- Link hover: Brand Green (`#18E299`)
- Focus ring: Brand Green (`#18E299`)

### Example Component Prompts
- "Create a hero section on white background with atmospheric green-white gradient wash. Headline at 64px Inter weight 600, line-height 1.15, letter-spacing -1.28px, color #0d0d0d. Subtitle at 18px Inter weight 400, line-height 1.50, color #666666. Dark pill CTA (#0d0d0d, 9999px radius, 8px 24px padding) and ghost pill button (white, 1px solid rgba(0,0,0,0.08), 9999px radius)."
- "Design a card: white background, 1px solid rgba(0,0,0,0.05) border, 16px radius, 24px padding, shadow rgba(0,0,0,0.03) 0px 2px 4px. Title at 20px Inter weight 600, letter-spacing -0.2px. Body at 14px weight 400, #666666."
- "Build a pill badge: #d4fae8 background, #0fa76e text, 9999px radius, 4px 12px padding, 13px Inter weight 500, uppercase."
- "Create navigation: white sticky header with backdrop-filter blur(12px). Inter 15px weight 500 for links, #0d0d0d text. Dark pill CTA 'Get Started' right-aligned, 9999px radius. Bottom border: 1px solid rgba(0,0,0,0.05)."
- "Design a trust section showing company logos in muted gray. Grid layout with 16px radius containers, 1px border at 5% opacity. Label above: 'Loved by your favorite companies' at 13px Inter weight 500, uppercase, tracking 0.65px."

### Iteration Guide
1. Always use full-pill radius (9999px) for buttons and inputs — this is Mintlify's signature shape
2. Keep borders at 5% opacity (`rgba(0,0,0,0.05)`) — stronger borders break the airy feeling
3. Letter-spacing scales with font size: -1.28px at 64px, -0.8px at 40px, -0.24px at 24px, normal at 16px
4. Three weights only: 400 (read), 500 (interact), 600 (announce)
5. Brand green (`#18E299`) is used sparingly — CTAs and hover states only, never for decorative fills
6. Geist Mono uppercase for technical labels, Inter for everything else
7. Section padding is generous: 64px–96px on desktop, 48px on mobile
8. No gray background sections — white throughout, separation through borders and whitespace
>>>>>>> parent of 4f12666 (lk)

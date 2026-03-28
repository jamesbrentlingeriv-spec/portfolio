<div align="center" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; padding: 2rem;">
  <img src="https://ais-dev-xove7sbglxijho756ooe4b-73299774956.us-west1.run.app/favicon.svg" width="140" height="140" alt="Word Witness Logo" style="filter: drop-shadow(0 8px 16px rgba(102,126,234,0.4));">
  <h1 style="font-size: 3rem; font-weight: 900; letter-spacing: -1px; margin: 1rem 0;">📖 Word Witness</h1>
  <p style="font-size: 1.3rem; font-style: italic; opacity: 0.9; max-width: 600px; margin: 0 auto;">"Train up a child in the way he should go: and when he is old, he will not depart from it." — <strong>Proverbs 22:6</strong></p>
</div>
  <p><i>"Train up a child in the way he should go: and when he is old, he will not depart from it." — Proverbs 22:6</i></p>

  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA">
  </p>

  <p><b>Word Witness</b> is an interactive, child-friendly Bible story application designed to make learning the Word of God engaging, accessible, and fun. Built with modern web technologies, it features a full Bible reader, illustrated stories, and a faith-based superhero comic.</p>
</div>

---

## ✨ Key Features

### 📜 Interactive Bible Stories

- **Old Testament Collection**: Journey through Creation, Noah's Ark, Moses and
  the Red Sea, and David and Goliath.
- **New Testament Collection**: Explore the First Christmas, The Good Shepherd,
  Jesus Calms the Storm, Loaves and Fishes, and the Easter Story.
- **Illustrated Visuals**: Every story is accompanied by beautiful,
  child-friendly illustrations.

### 🦸 Car'nayle: Child of the Cross

- **Superhero Comic**: A 10-page modern adventure featuring **Car'nayle**, a
  superhero powered by faith and the Armor of God.
- **Comic Reader**: A custom-built comic interface with zoom effects and
  immersive storytelling.

### 🔊 Accessibility & Learning

- **Read Aloud (TTS)**: Integrated Text-to-Speech powered by Google GenAI allows
  children to have entire panels or stories read to them.
- **Click-to-Speak**: Users can click on any individual word to hear it spoken,
  aiding in literacy and vocabulary development.
- **Autoplay Mode**: Sit back and enjoy the stories as they progress
  automatically with synchronized narration.

### 📱 Modern Web Experience

- **PWA Support**: Install Word Witness on your home screen for a native
  app-like experience, even offline.
- **Responsive Design**: Optimized for tablets, mobile phones, and desktops.
- **Motion Animations**: Smooth transitions and interactive elements using
  `motion`.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI/TTS**: [Google GenAI SDK](https://ai.google.dev/)
- **PWA**: [Vite PWA Plugin](https://vite-pwa-org.netlify.app/)
- **Routing**: [React Router 7](https://reactrouter.com/)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/word-witness.git
   cd word-witness
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables** Create a `.env` file in the root directory
   and add your Gemini API key:

   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
├── public/              # Static assets (images, gifs, icons)
│   ├── coc/             # Car'nayle comic images
│   ├── stories/         # Bible story illustrations
│   └── pwa-*.svg        # PWA manifest icons
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ComicReader.tsx  # Custom comic viewer
│   │   ├── BibleReader.tsx  # KJV Bible interface
│   │   └── ...
│   ├── services/        # API integrations (Gemini TTS)
│   ├── constants.ts     # Story data and application constants
│   ├── App.tsx          # Main routing and layout
│   └── main.tsx         # Entry point & PWA registration
├── vite.config.ts       # Vite & PWA configuration
└── tailwind.config.js   # Tailwind CSS setup
```

---

## 📱 Progressive Web App (PWA)

Word Witness is a fully compliant PWA. To install:

1. Open the app in a modern browser (Chrome, Safari, Edge).
2. Look for the "Install" icon in the address bar or select "Add to Home Screen"
   from the browser menu.
3. Enjoy offline access and a standalone app experience!

---

## 🤝 Contributing

Contributions are welcome! If you have ideas for new stories, features, or
improvements, feel free to open an issue or submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

<div align="center">
  <p>Built with ❤️ for the next generation of believers.</p>
  <a href="https://ais-dev-xove7sbglxijho756ooe4b-73299774956.us-west1.run.app">View Live Demo</a>
</div>

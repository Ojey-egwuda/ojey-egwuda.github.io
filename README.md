# Ojey Egwuda Portfolio

A modern portfolio website built with Astro and Tailwind CSS.

![Astro](https://img.shields.io/badge/Astro-4.5-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repo (or download and extract)
git clone https://github.com/Ojey-egwuda/ojey-egwuda.github.io.git
cd ojey-egwuda.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build for Production

```bash
npm run build
npm run preview  # Preview the build locally
```

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── ProjectCard.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro      # Home
│   │   ├── projects.astro   # Projects
│   │   ├── about.astro      # About
│   │   └── blog.astro       # Blog
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.cjs
└── package.json
```

## 🎨 Customisation

### Update Your Information

1. **Personal details**: Edit `src/pages/about.astro` and `src/components/Footer.astro`
2. **Projects**: Edit `src/pages/index.astro` and `src/pages/projects.astro`
3. **Blog posts**: Edit `src/pages/blog.astro` and add your Medium URLs
4. **Social links**: Edit `src/components/Header.astro` and `src/components/Footer.astro`

### Add Live Demo Links

Search for `liveUrl: "#"` in the project files and replace with your actual Streamlit URLs:

```javascript
{
  title: "JapaPolicy AI",
  liveUrl: "https://your-streamlit-app.streamlit.app",
  // ...
}
```

### Update Colors

Edit `tailwind.config.cjs` to change the color scheme:

```javascript
colors: {
  accent: {
    400: '#22d3ee',  // Main accent
    500: '#06b6d4',  // Darker accent
    // ...
  }
}
```

## 🚢 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Go to **Settings > Pages**
3. Under "Build and deployment", select **GitHub Actions**
4. The included workflow will automatically build and deploy on push to `main`

### Manual Deployment

```bash
npm run build
# Upload the /dist folder to your hosting provider
```

## 📝 Adding Blog Posts

The blog page links to external Medium articles. To add a new post:

1. Open `src/pages/blog.astro`
2. Add to the `blogPosts` array:

```javascript
{
  title: "Your Post Title",
  description: "Brief description...",
  date: "2025",
  tags: ["Tag1", "Tag2"],
  mediumUrl: "https://medium.com/@your-username/your-post",
  readTime: "8 min read",
}
```

## 🛠 Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS
- **[Google Fonts](https://fonts.google.com)** - Manrope & JetBrains Mono

## 📄 License

MIT License - feel free to use this template for your own portfolio.

---

Built with ☕ by Ojey Egwuda

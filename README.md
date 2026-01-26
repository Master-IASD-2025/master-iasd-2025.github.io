# Master IASD FSTT - Community Website

Official website for the Master in Artificial Intelligence and Data Science (IASD) community at the Faculty of Sciences and Techniques of Tangier (FSTT).

## 🚀 Tech Stack

- **Framework**: [SvelteKit 5](https://kit.svelte.dev/) with Svelte 5 runes
- **UI Components**: [shadcn-svelte](https://www.shadcn-svelte.com/) (built on bits-ui)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Icons**: [Lucide Svelte](https://lucide.dev/)
- **Runtime**: [Bun](https://bun.sh/)
- **Markdown**: [Marked](https://marked.js.org/) for blog content rendering
- **Deployment**: GitHub Actions CI/CD

## ✨ Features

- 🎨 Modern dark theme with light mode support
- 📱 Fully responsive design
- 📝 Runtime-driven blog system with Markdown support
- 🔍 Blog search and category filtering
- 🚀 Fast page loads with optimized builds
- ♿ Accessible UI components
- 🔄 Automatic deployments on core changes

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── ui/              # shadcn-svelte UI components
│   │   └── MarkdownRenderer.svelte
│   ├── services/
│   │   └── blog.ts          # Blog service with caching
│   ├── blog/                # Blog content (Markdown + JSON)
│   └── utils.ts
├── routes/
│   ├── +layout.svelte       # Root layout with navigation
│   ├── +page.svelte         # Home page
│   ├── blog/
│   │   ├── +page.svelte     # Blog index
│   │   └── [slug]/          # Dynamic blog posts
│   └── layout.css           # Global styles & theme tokens
└── app.html
```

## 🛠️ Development

### Prerequisites

- [Bun](https://bun.sh/) installed on your system

### Getting Started

```bash
# Clone the repository
git clone https://github.com/Master-IASD-2025/site.git
cd site

# Install dependencies
bun install

# Start development server
bun run dev

# Open in browser
# Navigate to http://localhost:5173
```

### Available Commands

```bash
bun run dev          # Start dev server
bun run build        # Build for production
bun run preview      # Preview production build
bun run check        # Run type checking
```

## 📝 Blog Management

The blog system fetches content dynamically from the `src/lib/blog/` directory via GitHub raw URLs in production.

### Adding a New Blog Post

1. Create a Markdown file in `src/lib/blog/` (e.g., `my-new-post.md`)

2. Add frontmatter at the top of your Markdown file:

```markdown
---
title: My Awesome Post
slug: my-new-post
date: 2026-01-26
author: Your Name
category: Machine Learning
tags: [AI, Python, Tutorial]
excerpt: A brief description of your post
---

Your content here...
```

3. Add an entry to `src/lib/blog/BlogIndex.json`:

```json
{
  "slug": "my-new-post",
  "title": "My Awesome Post",
  "excerpt": "A brief description",
  "date": "2026-01-26",
  "author": "Your Name",
  "category": "Machine Learning",
  "tags": ["AI", "Python", "Tutorial"],
  "readingTime": "5 min read",
  "published": true,
  "featured": false
}
```

4. Commit and push - the post will be live immediately!

For detailed instructions, see [BLOG_GUIDE.md](./BLOG_GUIDE.md).

## 🎨 Theme Customization

Theme colors are defined in `src/routes/layout.css` using CSS custom properties with `oklch` color space.

### Color Tokens

- `--primary`: Main brand color (Electric Cyan)
- `--secondary`: Secondary accent
- `--accent`: UI highlights
- `--success`: Success states (Matrix Green)
- `--warning`: Warning states
- `--destructive`: Error states

### Fonts

- **Sans**: Inter (body text)
- **Mono**: JetBrains Mono (code blocks)

## 🚀 Deployment

The project uses GitHub Actions for automated CI/CD:

- **Build Test**: Runs on all pushes and PRs
- **Auto-Deploy**: Triggers on push to `master` when core components change

### Core Components (trigger deployment)

- `src/lib/components/`
- `src/lib/services/`
- `src/routes/` (pages and layouts)
- Configuration files (`svelte.config.js`, `vite.config.ts`, `package.json`)

### Non-Core (skip deployment)

- Blog content (`src/lib/blog/*.md`)
- Documentation files
- GitHub workflows

For deployment setup, see [.github/ACTIONS_SETUP.md](./.github/ACTIONS_SETUP.md).

## 🤝 Contributing

We welcome contributions from the Master IASD community!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run type checking (`bun run check`)
5. Test the build (`bun run build`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## 📄 License

This project is maintained by the Master IASD community at FSTT.

## 🔗 Links

- **Repository**: [github.com/Master-IASD-2025/site](https://github.com/Master-IASD-2025/site)
- **FSTT**: [fstt.ac.ma](https://fstt.ac.ma/)

## 📧 Contact

For questions or suggestions, reach out to the Master IASD community through our GitHub repository.

---

Built with ❤️ by the Master IASD community


# Blog System - GitHub Integration Guide

## 📁 File Structure

```
src/lib/blog/
├── README.md                           # This guide
├── BlogIndex.json                      # Post manifest (REQUIRED)
├── getting-started-ml-pipelines.md     # Sample post
├── nlp-moroccan-darija.md             # Sample post
├── data-visualization-best-practices.md # Sample post
└── building-scalable-ai-systems.md     # Sample post
```

## 🚀 Quick Start

### Current Setup

The blog is already configured to work with your GitHub repository:
- **Owner**: Master-IASD-2025
- **Repo**: site
- **Branch**: master
- **Path**: src/lib/blog

### Local Development

In development (localhost), files are served from: `/src/lib/blog/`

### Production (After Push)

In production, files are fetched from:
```
https://raw.githubusercontent.com/Master-IASD-2025/site/master/src/lib/blog/
```

## ✍️ Adding a New Blog Post

### Step 1: Create the Markdown File

Create a new file in `src/lib/blog/` with your content:

```markdown
# Your Amazing Title

Your content here...

## Subheading

More content...
```

**Filename**: Use kebab-case (e.g., `my-awesome-post.md`)

### Step 2: Update BlogIndex.json

Add your post to the `posts` array in `BlogIndex.json`:

```json
{
  "slug": "my-awesome-post",
  "title": "My Awesome Post",
  "excerpt": "A brief description of what this post is about. Keep it under 150 characters.",
  "author": "Your Name",
  "date": "2026-01-26",
  "readTime": "5 min read",
  "category": "Machine Learning",
  "tags": ["AI", "Python", "Tutorial"],
  "featured": false,
  "published": true
}
```

**Important**: The `slug` field must match your Markdown filename (without `.md`)

### Step 3: Commit and Push

```bash
git add src/lib/blog/
git commit -m "Add new blog post: My Awesome Post"
git push origin master
```

### Step 4: Verify

Visit: `https://your-site.com/blog/my-awesome-post`

**No rebuild needed!** Your post is live immediately.

## 🎨 Post Fields Explained

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `slug` | string | URL-friendly identifier (matches filename) | ✅ |
| `title` | string | Post title (displayed in UI) | ✅ |
| `excerpt` | string | Brief summary (shown in cards) | ✅ |
| `author` | string | Author name | ✅ |
| `date` | string | Publication date (YYYY-MM-DD) | ✅ |
| `readTime` | string | Estimated reading time | ✅ |
| `category` | string | Primary category | ✅ |
| `tags` | string[] | Array of tags | ✅ |
| `featured` | boolean | Show in featured section | ✅ |
| `published` | boolean | Make post visible | ✅ |

## 📝 Markdown Features Supported

- **Headings**: `#`, `##`, `###`, etc.
- **Bold**: `**text**`
- **Italic**: `*text*`
- **Links**: `[text](url)`
- **Images**: `![alt](url)`
- **Code blocks**: ` ```language`
- **Inline code**: `` `code` ``
- **Lists**: `-` or `1.`
- **Blockquotes**: `>`
- **Tables**: `| col | col |`
- **Horizontal rules**: `---`

## 🎯 Categories

Current categories (add more as needed):
- Machine Learning
- Research
- Data Science
- Engineering
- Computer Vision
- Community

## 🏷️ Tags

Use descriptive tags for better discoverability:
- Technical: Python, PyTorch, TensorFlow, etc.
- Concepts: NLP, CV, MLOps, etc.
- Levels: Beginner, Advanced, Tutorial, etc.

## 🔧 Configuration

To change the GitHub source, edit `src/lib/services/blog.ts`:

```typescript
const GITHUB_OWNER = "Your-Username";
const GITHUB_REPO = "your-repo";
const GITHUB_BRANCH = "main";
const BLOG_PATH = "src/lib/blog";
```

## 🚨 Troubleshooting

### Post Not Showing

1. Check `published: true` in BlogIndex.json
2. Verify slug matches filename (without `.md`)
3. Clear browser cache
4. Check browser console for errors

### Content Not Loading

1. Verify file is pushed to GitHub
2. Check GitHub raw URL is accessible
3. Wait 1-2 minutes for GitHub CDN
4. Clear localStorage: `localStorage.removeItem('blog-index-cache')`

### Formatting Issues

1. Validate JSON in BlogIndex.json (use a JSON validator)
2. Ensure Markdown syntax is correct
3. Check for special characters in filenames

## 💡 Tips

- **Draft Posts**: Set `"published": false` while writing
- **Featured Posts**: Mark important posts with `"featured": true`
- **Ordering**: Posts appear in order of the `date` field
- **SEO**: Write descriptive excerpts (they become meta descriptions)
- **Images**: Host images in `static/` folder or use external URLs

## 📊 Analytics

Track post performance by checking:
- Page views in your analytics
- Time on page
- Scroll depth
- Social shares

## 🤝 Contributing

Encourage community members to contribute posts:

1. Fork the repository
2. Add their post + update BlogIndex.json
3. Submit a pull request
4. Review and merge

## 🎉 That's It!

Your blog is now set up and ready. Just commit Markdown files and update BlogIndex.json - no builds, no servers, no hassle!

Happy blogging! 🚀

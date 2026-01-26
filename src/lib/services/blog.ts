// Blog content service - handles fetching and caching

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  published: boolean;
}

export interface BlogIndex {
  posts: BlogPost[];
  lastUpdated: string;
}

// GitHub repository configuration
// Replace these values when you create your blog-content repository
const GITHUB_OWNER = "Master-IASD-2025";
const GITHUB_REPO = "master-iasd-2025.github.io";
const GITHUB_BRANCH = "master";
const BLOG_PATH = "src/lib/blog";

const BLOG_REPO_BASE =
  typeof window !== "undefined" && window.location.hostname === "localhost"
    ? "/src/lib/blog"
    : `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${GITHUB_BRANCH}/${BLOG_PATH}`;

const INDEX_URL = `${BLOG_REPO_BASE}/BlogIndex.json`;
const CACHE_KEY = "blog-index-cache";
const CACHE_VERSION = "v1";

// In-memory cache
let indexCache: BlogIndex | null = null;
const contentCache = new Map<string, string>();

/**
 * Fetch and cache the blog index
 */
export async function fetchBlogIndex(): Promise<BlogIndex> {
  // Return in-memory cache if available
  if (indexCache) {
    return indexCache as BlogIndex;
  }

  // Try localStorage cache
  if (typeof window !== "undefined") {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (parsed.version === CACHE_VERSION) {
          indexCache = parsed.data;
          return indexCache;
        }
      } catch (e) {
        console.warn("Failed to parse cached blog index", e);
      }
    }
  }

  // Fetch from remote
  try {
    const response = await fetch(INDEX_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch blog index: ${response.statusText}`);
    }

    const data: BlogIndex = await response.json();
    
    // Cache in memory
    indexCache = data;

    // Cache in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          version: CACHE_VERSION,
          data,
        })
      );
    }

    return data;
  } catch (error) {
    console.error("Failed to fetch blog index:", error);
    throw error;
  }
}

/**
 * Get a single post from the index by slug
 */
export async function getPostMetadata(slug: string): Promise<BlogPost | null> {
  try {
    const index = await fetchBlogIndex();
    return index.posts.find((post) => post.slug === slug) || null;
  } catch (error) {
    console.error("Failed to get post metadata:", error);
    return null;
  }
}

/**
 * Fetch the Markdown content for a post
 */
export async function fetchPostContent(slug: string): Promise<string> {
  // Check cache first
  if (contentCache.has(slug)) {
    return contentCache.get(slug)!;
  }

  const contentUrl = `${BLOG_REPO_BASE}/${slug}.md`;

  try {
    const response = await fetch(contentUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch post content: ${response.statusText}`);
    }

    const content = await response.text();
    
    // Cache the content
    contentCache.set(slug, content);
    
    return content;
  } catch (error) {
    console.error(`Failed to fetch content for ${slug}:`, error);
    throw error;
  }
}

/**
 * Get all published posts
 */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  try {
    const index = await fetchBlogIndex();
    return index.posts.filter((post) => post.published);
  } catch (error) {
    console.error("Failed to get published posts:", error);
    return [];
  }
}

/**
 * Clear all caches (useful for development)
 */
export function clearBlogCache(): void {
  indexCache = null;
  contentCache.clear();
  if (typeof window !== "undefined") {
    localStorage.removeItem(CACHE_KEY);
  }
}

/**
 * Format date string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

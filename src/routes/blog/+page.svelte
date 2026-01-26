<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import Button from "$lib/components/ui/button/button.svelte";
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import {
    Calendar,
    Clock,
    ArrowRight,
    Search,
    Tag,
    User,
    AlertCircle,
    Loader2,
  } from "@lucide/svelte";
  import { onMount } from "svelte";
  import {
    getPublishedPosts,
    formatDate,
    type BlogPost,
  } from "$lib/services/blog";

  const metadata = {
    title: "Blog - Master IASD FSTT",
    description: "Read the latest articles on AI, machine learning, data science, and research from the Master IASD community. Technical insights, tutorials, and project showcases.",
    keywords: "AI blog, machine learning tutorials, data science articles, IASD research, tech blog",
  };

  let posts = $state<BlogPost[]>([]);
  let isLoading = $state(true);
  let error = $state<string | null>(null);

  const categories = $derived(["All", ...new Set(posts.map((p) => p.category))]);

  let selectedCategory = $state("All");
  let searchQuery = $state("");

  const filteredPosts = $derived(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  });

  onMount(async () => {
    try {
      posts = await getPublishedPosts();
      isLoading = false;
    } catch (err) {
      error = err instanceof Error ? err.message : "Failed to load blog posts";
      isLoading = false;
    }
  });
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <meta name="keywords" content={metadata.keywords} />
  <meta property="og:title" content={metadata.title} />
  <meta property="og:description" content={metadata.description} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={metadata.title} />
  <meta name="twitter:description" content={metadata.description} />
</svelte:head>

<div class="flex min-h-screen flex-col">
  <!-- Hero Section -->
  <section
    class="relative overflow-hidden border-b border-border/40 py-20 md:py-28"
  >
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]"
      ></div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h1
          class="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          Community <span class="text-primary">Blog</span>
        </h1>
        <p class="mb-10 text-lg text-muted-foreground md:text-xl">
          Insights, tutorials, and research from our AI & Data Science
          community. Learn, share, and grow together.
        </p>

        <!-- Search Bar -->
        <div class="relative mx-auto max-w-2xl">
          <Search
            class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            placeholder="Search articles..."
            bind:value={searchQuery}
            class="w-full rounded-xl border border-border/60 bg-background/50 py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Categories -->
  <section class="border-b border-border/40 bg-card/20 py-8">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-center gap-3">
        <span class="text-sm font-medium text-muted-foreground">Filter by:</span
        >
        {#each categories as category}
          <button
            onclick={() => (selectedCategory = category)}
            class={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
              selectedCategory === category
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border/60 bg-background/50 text-muted-foreground hover:border-primary/40 hover:bg-card/50"
            }`}
          >
            {category}
          </button>
        {/each}
      </div>
    </div>
  </section>

  <!-- Blog Posts -->
  <section class="py-20 md:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {#if isLoading}
        <div class="flex flex-col items-center justify-center py-20">
          <Loader2 class="h-12 w-12 animate-spin text-primary" />
          <p class="mt-4 text-lg text-muted-foreground">Loading articles...</p>
        </div>
      {:else if error}
        <div class="flex flex-col items-center justify-center py-20">
          <AlertCircle class="h-12 w-12 text-destructive" />
          <p class="mt-4 text-lg text-muted-foreground">{error}</p>
          <Button
            onclick={() => window.location.reload()}
            variant="outline"
            class="mt-6"
          >
            Try Again
          </Button>
        </div>
      {:else if filteredPosts().length === 0}
        <div class="py-20 text-center">
          <p class="text-lg text-muted-foreground">
            No articles found. Try adjusting your search or filter.
          </p>
        </div>
      {:else}
        <!-- Featured Posts -->
        {#if selectedCategory === "All" && searchQuery === ""}
          <div class="mb-16">
            <h2 class="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
              Featured Articles
            </h2>
            <div class="grid gap-8 md:grid-cols-2">
              {#each posts.filter((p) => p.featured) as post}
                <Card.Root
                  class="group flex flex-col overflow-hidden border-border/60 bg-card/50 transition-all hover:border-primary/40 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
                >
                  <Card.Header class="pb-4">
                    <div class="mb-4 flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        class="border-primary/20 bg-primary/10 text-primary"
                      >
                        {post.category}
                      </Badge>
                      <span class="text-xs text-muted-foreground">Featured</span
                      >
                    </div>
                    <Card.Title class="mb-3 text-xl leading-tight">
                      {post.title}
                    </Card.Title>
                    <Card.Description class="text-sm leading-relaxed">
                      {post.excerpt}
                    </Card.Description>
                  </Card.Header>
                  <Card.Footer class="mt-auto border-t border-border/40 pt-4">
                    <div
                      class="flex w-full flex-wrap items-center justify-between gap-4"
                    >
                      <div
                        class="flex items-center gap-4 text-sm text-muted-foreground"
                      >
                        <div class="flex items-center gap-1.5">
                          <User class="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                          <Calendar class="h-4 w-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </div>
                      <a href="/blog/{post.slug}">
                        <Button variant="ghost" size="sm" class="gap-1.5">
                          Read More
                          <ArrowRight class="h-3.5 w-3.5" />
                        </Button>
                      </a>
                    </div>
                  </Card.Footer>
                </Card.Root>
              {/each}
            </div>
          </div>
        {/if}

        <!-- All Posts -->
        <div>
          <h2 class="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
            {selectedCategory === "All" ? "All Articles" : selectedCategory}
          </h2>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {#each filteredPosts() as post}
              <Card.Root
                class="group flex flex-col border-border/60 bg-card/50 transition-all hover:border-border hover:bg-card hover:shadow-md"
              >
                <Card.Header class="pb-4">
                  <Badge
                    variant="secondary"
                    class="mb-4 w-fit border-primary/20 bg-primary/10 text-primary"
                  >
                    {post.category}
                  </Badge>
                  <Card.Title class="mb-2 text-lg leading-tight">
                    {post.title}
                  </Card.Title>
                  <Card.Description
                    class="line-clamp-3 text-sm leading-relaxed"
                  >
                    {post.excerpt}
                  </Card.Description>
                </Card.Header>
                <Card.Content class="pb-0">
                  <div class="mb-4 flex flex-wrap gap-2">
                    {#each post.tags as tag}
                      <span
                        class="flex items-center gap-1 rounded-md bg-muted/50 px-2 py-1 text-xs text-muted-foreground"
                      >
                        <Tag class="h-3 w-3" />
                        {tag}
                      </span>
                    {/each}
                  </div>
                </Card.Content>
                <Card.Footer class="mt-auto border-t border-border/40 pt-4">
                  <div class="flex w-full items-center justify-between text-sm">
                    <div
                      class="flex items-center gap-1.5 text-muted-foreground"
                    >
                      <Clock class="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <a href="/blog/{post.slug}">
                      <Button variant="ghost" size="sm" class="gap-1.5">
                        Read
                        <ArrowRight class="h-3.5 w-3.5" />
                      </Button>
                    </a>
                  </div>
                </Card.Footer>
              </Card.Root>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </section>

  <!-- CTA Section -->
  <section class="border-t border-border/40 bg-card/20 py-20 md:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
          Want to Contribute?
        </h2>
        <p class="mb-8 text-lg text-muted-foreground">
          Share your knowledge and experiences with the community. Write about
          your projects, research, or learning journey.
        </p>
        <Button size="lg" class="gap-2">
          Submit Your Article
          <ArrowRight class="h-4 w-4" />
        </Button>
      </div>
    </div>
  </section>
</div>

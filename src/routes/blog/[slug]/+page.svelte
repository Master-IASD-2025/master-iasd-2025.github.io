<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import MarkdownRenderer from "$lib/components/MarkdownRenderer.svelte";
  import {
    getPostMetadata,
    fetchPostContent,
    formatDate,
    type BlogPost,
  } from "$lib/services/blog";
  import {
    Calendar,
    Clock,
    User,
    ArrowLeft,
    Tag,
    AlertCircle,
    Loader2,
  } from "@lucide/svelte";

  let post = $state<BlogPost | null>(null);
  let content = $state("");
  let isLoadingMetadata = $state(true);
  let isLoadingContent = $state(false);
  let error = $state<string | null>(null);
  let slug = $state("");

  onMount(async () => {
    // Get slug from URL
    const pathname = window.location.pathname;
    const pathSlug = pathname.split("/").pop();

    if (!pathSlug) {
      error = "Invalid post URL";
      isLoadingMetadata = false;
      return;
    }

    slug = pathSlug;

    try {
      // Phase 1: Load metadata immediately
      post = await getPostMetadata(slug);

      if (!post) {
        error = "Post not found";
        isLoadingMetadata = false;
        return;
      }

      if (!post.published) {
        error = "This post is not yet published";
        isLoadingMetadata = false;
        return;
      }

      isLoadingMetadata = false;

      // Phase 2: Load content lazily
      isLoadingContent = true;
      content = await fetchPostContent(slug);
      isLoadingContent = false;
    } catch (err) {
      error = err instanceof Error ? err.message : "Failed to load post";
      isLoadingMetadata = false;
      isLoadingContent = false;
    }
  });
</script>

<svelte:head>
  {#if post}
    <title>{post.title} | IASD Community Blog</title>
    <meta name="description" content={post.excerpt} />
    <meta property="og:title" content={post.title} />
    <meta property="og:description" content={post.excerpt} />
    <meta property="og:type" content="article" />
    <meta property="article:published_time" content={post.date} />
    <meta property="article:author" content={post.author} />
    {#each post.tags as tag}
      <meta property="article:tag" content={tag} />
    {/each}
  {/if}
</svelte:head>

<div class="flex min-h-screen flex-col">
  {#if isLoadingMetadata}
    <!-- Loading State -->
    <section class="py-20 md:py-28">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center justify-center py-20">
          <Loader2 class="h-12 w-12 animate-spin text-primary" />
          <p class="mt-4 text-lg text-muted-foreground">Loading article...</p>
        </div>
      </div>
    </section>
  {:else if error}
    <!-- Error State -->
    <section class="py-20 md:py-28">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center justify-center py-20">
          <AlertCircle class="h-12 w-12 text-destructive" />
          <h1 class="mt-6 text-2xl font-bold">{error}</h1>
          <p class="mt-2 text-muted-foreground">
            The article you're looking for couldn't be found.
          </p>
          <Button href="/blog" variant="outline" class="mt-8 gap-2">
            <ArrowLeft class="h-4 w-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    </section>
  {:else if post}
    <!-- Article Header -->
    <section class="border-b border-border/40 py-12 md:py-16">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Button href="/blog" variant="ghost" size="sm" class="mb-8 gap-2">
          <ArrowLeft class="h-4 w-4" />
          Back to Blog
        </Button>

        <Badge
          variant="secondary"
          class="mb-6 border-primary/20 bg-primary/10 text-primary"
        >
          {post.category}
        </Badge>

        <h1
          class="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        >
          {post.title}
        </h1>

        <p
          class="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          {post.excerpt}
        </p>

        <div
          class="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
        >
          <div class="flex items-center gap-2">
            <User class="h-4 w-4" />
            <span class="font-medium">{post.author}</span>
          </div>
          <div class="flex items-center gap-2">
            <Calendar class="h-4 w-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div class="flex items-center gap-2">
            <Clock class="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div class="mt-6 flex flex-wrap gap-2">
          {#each post.tags as tag}
            <span
              class="flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              <Tag class="h-3 w-3" />
              {tag}
            </span>
          {/each}
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <section class="py-12 md:py-16">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {#if isLoadingContent}
          <div class="flex flex-col items-center justify-center py-20">
            <Loader2 class="h-8 w-8 animate-spin text-primary" />
            <p class="mt-4 text-muted-foreground">Loading content...</p>
          </div>
        {:else if content}
          <MarkdownRenderer {content} />
        {/if}
      </div>
    </section>

    <!-- Article Footer -->
    <section class="border-t border-border/40 py-12">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          <Button href="/blog" variant="outline" class="gap-2">
            <ArrowLeft class="h-4 w-4" />
            Back to Blog
          </Button>
          <div class="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Share this article</span>
          </div>
        </div>
      </div>
    </section>
  {/if}
</div>

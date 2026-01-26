<script lang="ts">
  import { marked } from "marked";
  import { onMount } from "svelte";

  let { content = "" } = $props();

  let html = $state("");

  onMount(() => {
    // Configure marked for better rendering
    marked.setOptions({
      breaks: true,
      gfm: true,
    });

    html = marked(content);
  });

  $effect(() => {
    if (content) {
      html = marked(content);
    }
  });
</script>

<article class="prose-content max-w-none">
  {@html html}
</article>

<style>
  .prose-content :global(h1) {
    margin-bottom: 1.5rem;
    margin-top: 2rem;
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.025em;
  }

  @media (min-width: 640px) {
    .prose-content :global(h1) {
      font-size: 2.25rem;
    }
  }

  .prose-content :global(h2) {
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.025em;
  }

  @media (min-width: 640px) {
    .prose-content :global(h2) {
      font-size: 1.875rem;
    }
  }

  .prose-content :global(h3) {
    margin-bottom: 0.75rem;
    margin-top: 1.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: -0.025em;
  }

  @media (min-width: 640px) {
    .prose-content :global(h3) {
      font-size: 1.5rem;
    }
  }

  .prose-content :global(h4) {
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    font-size: 1.125rem;
    font-weight: 600;
  }

  .prose-content :global(p) {
    margin-bottom: 1rem;
    line-height: 1.75;
    color: hsl(var(--muted-foreground));
  }

  .prose-content :global(a) {
    color: hsl(var(--primary));
    text-decoration: underline;
    text-decoration-color: hsl(var(--primary) / 0.3);
    transition: text-decoration-color 0.2s;
  }

  .prose-content :global(a:hover) {
    text-decoration-color: hsl(var(--primary));
  }

  .prose-content :global(strong) {
    font-weight: 600;
    color: hsl(var(--foreground));
  }

  .prose-content :global(code) {
    border-radius: 0.25rem;
    background-color: hsl(var(--muted));
    padding: 0.125rem 0.375rem;
    font-family: ui-monospace, monospace;
    font-size: 0.875rem;
    color: hsl(var(--foreground));
  }

  .prose-content :global(pre) {
    margin-bottom: 1.5rem;
    overflow-x: auto;
    border-radius: 0.75rem;
    border: 1px solid hsl(var(--border) / 0.6);
    background-color: hsl(var(--card));
    padding: 1rem;
  }

  .prose-content :global(pre code) {
    background-color: transparent;
    padding: 0;
  }

  .prose-content :global(ul) {
    margin-bottom: 1rem;
    list-style-type: disc;
    padding-left: 1.5rem;
  }

  .prose-content :global(ul li) {
    margin-bottom: 0.5rem;
  }

  .prose-content :global(ol) {
    margin-bottom: 1rem;
    list-style-type: decimal;
    padding-left: 1.5rem;
  }

  .prose-content :global(ol li) {
    margin-bottom: 0.5rem;
  }

  .prose-content :global(li) {
    color: hsl(var(--muted-foreground));
  }

  .prose-content :global(blockquote) {
    margin: 1.5rem 0;
    border-left: 4px solid hsl(var(--primary) / 0.5);
    padding-left: 1rem;
    font-style: italic;
    color: hsl(var(--muted-foreground));
  }

  .prose-content :global(img) {
    margin: 1.5rem 0;
    border-radius: 0.75rem;
    border: 1px solid hsl(var(--border) / 0.6);
  }

  .prose-content :global(hr) {
    margin: 2rem 0;
    border-color: hsl(var(--border) / 0.6);
  }

  .prose-content :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
  }

  .prose-content :global(th) {
    border: 1px solid hsl(var(--border) / 0.6);
    background-color: hsl(var(--muted) / 0.5);
    padding: 0.5rem 1rem;
    text-align: left;
    font-weight: 600;
  }

  .prose-content :global(td) {
    border: 1px solid hsl(var(--border) / 0.6);
    padding: 0.5rem 1rem;
  }
</style>

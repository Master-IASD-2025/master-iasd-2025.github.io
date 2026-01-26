<script lang="ts">
  import "./layout.css";
  import { ModeWatcher, toggleMode } from "mode-watcher";
  import { Sun, Moon, Github, Menu, ArrowRight } from "@lucide/svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Sheet from "$lib/components/ui/sheet";

  let { children } = $props();

  const navItems = [
    { href: "/projects", label: "Projects" },
    { href: "/research", label: "Research" },
    { href: "/blog", label: "Blog" },
    { href: "/community", label: "Community" },
  ];

  let isMobileOpen = $state(false);
</script>

<ModeWatcher defaultMode="dark" />

<div class="flex min-h-screen flex-col bg-background font-sans antialiased">
  <!-- Navigation -->
  <header
    class="fixed top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur-xl supports-backdrop-filter:bg-background/80"
  >
    <nav
      class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      <!-- Logo -->
      <a
        href="/"
        class="flex items-center gap-2.5 transition-opacity hover:opacity-80"
      >
        <div
          class="flex h-8 w-8 items-center justify-center rounded-md bg-primary"
        >
          <span class="text-sm font-bold text-primary-foreground">IA</span>
        </div>
        <span class="text-base font-semibold tracking-tight text-foreground"
          >MASTER IASD</span
        >
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden items-center gap-8 md:flex">
        {#each navItems as item}
          <a
            href={item.href}
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.label}
          </a>
        {/each}
      </div>

      <!-- Right Side Actions -->
      <div class="flex items-center gap-3">
        <a
          href="https://github.com/Master-IASD-2025/site"
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
        >
          <Github class="h-4.5 w-4.5" />
        </a>
        <button
          onclick={toggleMode}
          class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
        >
          <Sun
            class="h-4.5 w-4.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Moon
            class="absolute h-4.5 w-4.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span class="sr-only">Toggle theme</span>
        </button>

        <div class="hidden sm:block">
          <Button href="/join" size="sm" class="gap-1.5 text-sm font-medium">
            Join Us
            <ArrowRight class="h-3.5 w-3.5" />
          </Button>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden">
          <Sheet.Root bind:open={isMobileOpen}>
            <Sheet.Trigger>
              {#snippet child({ props })}
                <button
                  {...props}
                  class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Menu class="h-5 w-5" />
                  <span class="sr-only">Open menu</span>
                </button>
              {/snippet}
            </Sheet.Trigger>
            <Sheet.Content
              side="right"
              class="w-72 border-border/40 bg-background"
            >
              <Sheet.Header class="border-b border-border/40 pb-4">
                <Sheet.Title class="text-left">
                  <span class="text-base font-semibold">MASTER IASD</span>
                </Sheet.Title>
              </Sheet.Header>
              <nav class="flex flex-col gap-1 pt-4">
                {#each navItems as item}
                  <a
                    href={item.href}
                    onclick={() => (isMobileOpen = false)}
                    class="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {item.label}
                  </a>
                {/each}
                <div class="my-3 border-t border-border/40"></div>
                <a
                  href="https://github.com/Master-IASD-2025/site"
                  target="_blank"
                  rel="noopener noreferrer"
                  onclick={() => (isMobileOpen = false)}
                  class="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <Github class="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <div class="mt-4 px-3">
                  <Button
                    href="/join"
                    class="w-full gap-1.5"
                    onclick={() => (isMobileOpen = false)}
                  >
                    Join Us
                    <ArrowRight class="h-4 w-4" />
                  </Button>
                </div>
              </nav>
            </Sheet.Content>
          </Sheet.Root>
        </div>
      </div>
    </nav>
  </header>

  <main class="flex-1 pt-16">
    {@render children()}
  </main>
</div>

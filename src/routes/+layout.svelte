<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import { ModeWatcher, toggleMode } from "mode-watcher";
  import { GraduationCap, Sun, Moon, Github, Menu, X } from "@lucide/svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Sheet from "$lib/components/ui/sheet";

  let { children } = $props();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
  ];

  let isMobileOpen = $state(false);
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<ModeWatcher defaultMode="dark" />

<div class="relative flex min-h-screen flex-col bg-background">
  <header
    class="bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full backdrop-blur-xl border-b border-border/40"
  >
    <div class="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
      <div class="flex items-center gap-8">
        <a href="/" class="flex items-center gap-2.5 group">
          <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <GraduationCap class="h-5 w-5 text-primary" />
          </div>
          <span class="hidden font-semibold tracking-tight sm:inline-block text-foreground">
            IASD Community
          </span>
        </a>
        <nav class="hidden md:flex items-center gap-1">
          {#each navItems as item}
            <a
              href={item.href}
              class="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-muted/50 transition-colors"
            >
              {item.label}
            </a>
          {/each}
        </nav>
      </div>

      <div class="flex items-center gap-1">
        <nav class="flex items-center gap-1">
          <Button
            href="https://github.com/Master-IASD-2025"
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            size="icon"
            class="rounded-lg hover:bg-muted/50"
          >
            <Github class="h-[1.1rem] w-[1.1rem]" />
            <span class="sr-only">GitHub</span>
          </Button>
          <Button onclick={toggleMode} variant="ghost" size="icon" class="rounded-lg hover:bg-muted/50">
            <Sun
              class="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0"
            />
            <Moon
              class="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100"
            />
            <span class="sr-only">Toggle theme</span>
          </Button>

          <!-- Mobile Menu -->
          <div class="md:hidden">
            <Sheet.Root bind:open={isMobileOpen}>
              <Sheet.Trigger>
                <Button variant="ghost" size="icon">
                  <Menu class="h-5 w-5" />
                  <span class="sr-only">Toggle Menu</span>
                </Button>
              </Sheet.Trigger>
              <Sheet.Content side="right">
                <Sheet.Header>
                  <Sheet.Title>Menu</Sheet.Title>
                  <Sheet.Description
                    >Navigate through the site</Sheet.Description
                  >
                </Sheet.Header>
                <div class="flex flex-col space-y-4 py-4">
                  {#each navItems as item}
                    <a
                      href={item.href}
                      class="text-foreground/90 hover:text-foreground text-sm font-medium transition-colors"
                      onclick={() => (isMobileOpen = false)}
                    >
                      {item.label}
                    </a>
                  {/each}
                </div>
              </Sheet.Content>
            </Sheet.Root>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <main class="flex-1">
    {@render children()}
  </main>
</div>

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

<div class="relative flex min-h-screen flex-col">
  <header
    class="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur"
  >
    <div class="container mx-auto flex h-14 items-center px-4">
      <div class="mr-4 flex">
        <a href="/" class="mr-6 flex items-center space-x-2">
          <GraduationCap class="h-6 w-6" />
          <span class="hidden font-bold sm:inline-block"> IASD Community </span>
        </a>
        <nav
          class="flex items-center space-x-6 text-sm font-medium max-md:hidden"
        >
          {#each navItems as item}
            <a
              href={item.href}
              class="hover:text-foreground/80 text-foreground/60 transition-colors"
            >
              {item.label}
            </a>
          {/each}
        </nav>
      </div>

      <div class="flex flex-1 items-center justify-end space-x-2">
        <nav class="flex items-center space-x-1">
          <Button
            href="https://github.com/Master-IASD-2025"
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            size="icon"
          >
            <Github class="h-4 w-4" />
            <span class="sr-only">GitHub</span>
          </Button>
          <Button onclick={toggleMode} variant="ghost" size="icon">
            <Sun
              class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <Moon
              class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
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

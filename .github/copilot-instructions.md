# Master Community FSTT - AI Coding Agent Instructions

## Project Architecture

This is a **SvelteKit 5** website for the Master community at FSTT (Faculté des Sciences et Techniques de Tanger). Built with **Svelte 5 runes** (`$state`, `$derived`), **shadcn-svelte UI**, and **TailwindCSS 4.0**.

### Key Technologies

- **SvelteKit 5** with latest routing patterns
- **Svelte 5 runes**: Use `$state()`, `$derived()`, not legacy reactive statements
- **shadcn-svelte**: Component library built on bits-ui and tailwind-variants
- **TailwindCSS 4.0**: Modern utility-first CSS with custom properties
- **PocketBase**: Backend for authentication and data management
- **TypeScript**: Full type safety throughout
- **Bun**: JavaScript runtime and package manager

## Route Structure

The app uses a simple route structure:

```
src/routes/
├── (app)/           # Main public-facing pages
└── +layout.svelte   # Root layout
```

### Icon Usage

this is the correct usage of lucide icons for svelte

```typescript
import { Menu, X, Shield } from "@lucide/svelte";
```

**Note**: Check existing routes before creating new ones to avoid conflicts.

## Component Patterns

### shadcn-svelte Import Pattern

```typescript
// Always use namespace imports for UI components
import * as Card from "$lib/components/ui/card";
import * as Dialog from "$lib/components/ui/dialog";
import Button from "$lib/components/ui/button/button.svelte";
```

## CARD USAGE

```svelte
<Card.Root class="w-full max-w-sm">
	<Card.Header>
		<Card.Title>Login to your account</Card.Title>
		<Card.Description>Enter your email below to login to your account</Card.Description>
		<Card.Action>
			<Button variant="link">Sign Up</Button>
		</Card.Action>
	</Card.Header>
	<Card.Content></Card.Content>
	<Card.Footer class="flex-col gap-2">
		<Button type="submit" class="w-full">Login</Button>
		<Button variant="outline" class="w-full">Login with Google</Button>
	</Card.Footer>
</Card.Root>
```

### Svelte 5 Runes (Required Pattern)

```typescript
// Use runes, not legacy syntax
let count = $state(0);
let members = $state([]);
const totalMembers = $derived(members.length);

// NOT: $: totalMembers = members.length
```

### Using {@const} Tags with Dynamic Components

When using dynamic components or values in loops (like Lucide icons), use `{@const}` to extract them safely. **IMPORTANT**: `{@const}` must be the immediate child of its parent block structure (like `{#each}`, `{#if}`, or `<svelte:fragment>`), NOT nested inside other elements.

**✅ Correct Pattern:**

```svelte
{#each features as feature}
	{@const Icon = feature.icon}
	<div class="icon-container">
		<Icon class="h-6 w-6" />
	</div>
{/each}
```

**❌ Wrong Pattern (nested too deep):**

```svelte
{#each features as feature}
	<div class="icon-container">
		{@const Icon = feature.icon}
		<!-- ❌ Too nested! -->
		<Icon class="h-6 w-6" />
	</div>
{/each}
```

This pattern ensures Svelte properly scopes the constant and avoids compiler errors.

## Authentication System

- **Backend**: PocketBase integration with session management
- **Store**: Use Svelte 5 class-based reactive stores for auth state
- **Pattern**: Keep authentication logic modular and reusable

### Auth Usage Pattern

```typescript
// Example auth store pattern
import { auth } from "$lib/stores/auth.svelte.ts";

// Access reactive properties
const isLoggedIn = auth.isAuthenticated;
const currentUser = auth.user;
```

## Data Management

### Type Safety Pattern

```typescript
// Define interfaces in $lib/types/
export interface MasterStudent {
  id: string;
  name: string;
  specialization: string;
  // ...
}

export interface CommunityEvent {
  id: string;
  title: string;
  date: Date;
  // ...
}
```

### PocketBase Integration

```typescript
// Use PocketBase client for data operations
import { pb } from "$lib/pocketbase";

// Fetch data
const records = await pb.collection("events").getFullList();

// Authentication
await pb.collection("users").authWithPassword(email, password);
```

## Development Commands

```bash
# Development server with Bun
bun run dev

# Type checking
bun run check

# Build for production
bun run build

# Preview production build
bun run preview
```

## Styling Conventions

### Color Usage Rules (CRITICAL)

**NEVER use hardcoded colors or gradients.** Always use theme-based color variables from `app.css`.

#### Allowed Color Classes

Use ONLY these semantic color classes:

- **Backgrounds**: `bg-background`, `bg-card`, `bg-popover`, `bg-primary`, `bg-secondary`, `bg-muted`, `bg-accent`, `bg-destructive`
- **Text**: `text-foreground`, `text-primary`, `text-secondary`, `text-muted-foreground`, `text-accent-foreground`, `text-destructive`
- **Borders**: `border-border`, `border-input`, `border-primary`, `border-accent`
- **Ring**: `ring-ring`, `ring-primary`

#### Color Opacity

When you need transparency, use the `/` opacity syntax:

```html
<!-- Correct -->
<div class="bg-primary/10 text-foreground/80">
  <!-- Wrong - DO NOT USE -->
  <div class="bg-cyan-500/20 text-gray-800"></div>
</div>
```

#### HSL Custom Properties

For advanced use cases (like in `<style>` blocks), use HSL variables:

```css
/* Correct */
background-color: hsl(var(--primary) / 0.1);
color: hsl(var(--foreground));

/* Wrong - DO NOT USE */
background-color: rgba(6, 182, 212, 0.1);
color: #18181b;
```

#### Gradients - FORBIDDEN

**DO NOT use gradient classes** like `bg-gradient-to-r`, `bg-linear-to-r`, `from-*`, `to-*`, or any gradient utilities.

Instead:

- Use solid theme colors: `bg-primary`, `bg-accent`
- Use opacity for depth: `bg-primary/10`, `bg-primary/20`
- Use shadows for elevation: `shadow-sm`, `shadow-md`, `shadow-lg`

#### Examples

```html
<!-- ✅ Correct: Theme colors only -->
<button class="bg-primary text-primary-foreground hover:bg-primary/90">
  Click me
</button>

<!-- ❌ Wrong: Hardcoded colors -->
<button class="bg-cyan-500 text-white hover:bg-cyan-600">Click me</button>

<!-- ✅ Correct: Badge with theme colors -->
<span class="border border-primary/20 bg-primary/10 text-primary"> New </span>

<!-- ❌ Wrong: Hardcoded badge -->
<span class="border border-blue-200 bg-blue-100 text-blue-700"> New </span>

<!-- ✅ Correct: Decorative elements -->
<div class="border border-primary/10 bg-primary/5">Content</div>

<!-- ❌ Wrong: Gradient usage -->
<div class="bg-gradient-to-r from-cyan-500 to-blue-600">Content</div>
```

### TailwindCSS 4.0 Usage

- Use CSS custom properties from `src/app.css`
- Leverage `oklch()` color space for consistent theming
- Apply `dark:` variants for theme support

### Component Styling

```typescript
// Use cn() utility for conditional classes
import { cn } from "$lib/utils.js";

class={cn("base-styles", isActive && "active-styles", className)}
```

## Critical Implementation Notes

1. **Route Groups**: Prevent conflicts by understanding group boundaries
2. **Svelte 5 Runes**: Always use new syntax, never legacy reactive statements
3. **shadcn-svelte**: Import components as namespaces, use proper prop patterns
4. **TypeScript**: Maintain strict typing throughout
5. **PocketBase**: Use official SDK for all backend operations
6. **Bun Runtime**: Use `bun` commands instead of `npm` or `pnpm` for package management

## Common Patterns to Follow

- Component props: Use `let { prop1, prop2 } = $props();`
- State management: Use `$state()` and `$derived()` runes
- Event handling: Use `onclick={}` not `on:click`
- Component composition: Use snippet patterns for advanced layouts

When working on this codebase, always maintain these patterns and check existing implementations before creating new features.

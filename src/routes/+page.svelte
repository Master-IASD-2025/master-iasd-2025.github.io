<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import { GraduationCap, Timer } from '@lucide/svelte';

	let email = $state('');

	function handleSubmit(e: Event) {
		e.preventDefault();
		console.log('Subscribe:', email);
	}
</script>

<div class="flex min-h-[80vh] w-full flex-col items-center justify-center p-4 md:p-8">
	<div class="mx-auto w-full max-w-md space-y-6">
		<div class="flex flex-col items-center gap-2 text-center">
			<div class="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-full">
				<GraduationCap class="text-primary h-8 w-8" />
			</div>
			<div class="space-y-1">
				<h1 class="text-3xl font-bold tracking-tighter sm:text-4xl">Master IASD</h1>
				<p class="text-muted-foreground text-lg font-medium">Community Platform</p>
			</div>
		</div>

		<Card.Root>
			<Card.Header class="text-center">
				<Card.Title class="text-2xl">Coming Soon</Card.Title>
				<Card.Description>
					We're building a dedicated space for the FSTT Master community. 
					Connect, share, and grow together.
				</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-4">
				<div class="bg-muted/50 flex flex-col items-center justify-center gap-2 rounded-lg p-6 py-8 text-center">
					<Timer class="text-muted-foreground h-10 w-10 animate-pulse" />
					<p class="text-sm font-medium">Launch in progress</p>
				</div>
				
				<form onsubmit={handleSubmit} class="flex flex-col gap-2 space-y-2">
					<div class="grid gap-2">
						<label for="email" class="sr-only">Email</label>
						<Input
							id="email"
							type="email"
							placeholder="Enter your university email"
							bind:value={email}
							required
						/>
					</div>
					<Button type="submit" class="w-full">Notify Me</Button>
				</form>
			</Card.Content>
			<Card.Footer>
				<p class="text-muted-foreground w-full text-center text-xs">
					© {new Date().getFullYear()} Master IASD - FSTT. All rights reserved.
				</p>
			</Card.Footer>
		</Card.Root>
	</div>
</div>

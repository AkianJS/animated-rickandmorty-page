<script lang="ts">
	import type { Character } from '$lib/interface/Character';
	import { fly } from 'svelte/transition';
	import CharacterCard from './CharacterCard.svelte';

	export let characters: Character[] = [];
	export let animationStart: boolean;

	$: animationStart, setTimeout(() => (animationStart = true), 100);
</script>

<section class="container">
	<h1>Character List</h1>
	<ul class="character-card-container">
		{#if animationStart}
			{#each characters as character, i}
				<li transition:fly={{ delay: 100 * i, duration: 400, y: 100 }}>
					<CharacterCard {character} />
				</li>
			{/each}
		{/if}
	</ul>
</section>

<style>
	h1 {
		margin-bottom: var(--size-4);
		font-size: var(--font-size-fluid-3);
		text-align: start;
	}

	.container {
		width: 100%;
		max-width: var(--size-xl);
		margin-bottom: var(--size-8);
	}

	.character-card-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, 250px);
		grid-gap: 1rem;
		place-content: space-between;
	}

	@media (max-width: 571px) {
		.character-card-container {
			place-content: center;
		}

		h1 {
			text-align: center;
		}
	}
</style>

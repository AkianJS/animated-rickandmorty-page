<script lang="ts">
	import type { Character } from '$lib/interface/Character';
	import CharacterCard from './CharacterCard.svelte';

	export let characters: Character[] = [];
</script>

<section class="container">
	<h1>Character List</h1>
	<ul class="character-card-container">
		{#each characters as character}
			<CharacterCard {character} />
		{/each}
	</ul>
</section>

<style>
	h1 {
		width: 100%;
		margin-bottom: var(--size-4);
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
</style>

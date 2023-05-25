<script lang="ts">
	import type { Character } from '$lib/interface/Character';
	import { fly, slide, type FlyParams } from 'svelte/transition';
	import { backIn } from 'svelte/easing';
	import { BACKGROUND_COLOR } from '$lib/constants/bacground-color';

	export let character: Character;
	export let animationStart: boolean;

	const caracterDetailAnimation: FlyParams = {
		easing: backIn,
		duration: 600,
		y: 100
	};

	$: animationStart, setTimeout(() => (animationStart = true), 100);
</script>

{#if animationStart}
	<section in:slide class="container {BACKGROUND_COLOR[character.status]}">
		<img
			in:fly={{ duration: 800, easing: backIn, x: -200 }}
			width="300"
			height="300"
			src={character.image}
			alt={character.name}
		/>
		<div class="details-container">
			<p in:fly={{ ...caracterDetailAnimation, delay: 200 }}>
				Name: {character.name}
			</p>
			<p in:fly={{ ...caracterDetailAnimation, delay: 400 }}>
				Gender: {character.gender}
			</p>
			<p in:fly={{ ...caracterDetailAnimation, delay: 600 }}>
				Origin: {character.origin.name}
			</p>
			<p in:fly={{ ...caracterDetailAnimation, delay: 800 }}>
				Created: {character.created}
			</p>
			<p in:fly={{ ...caracterDetailAnimation, delay: 1000 }}>
				Status: {character.status}
			</p>
		</div>
	</section>
{/if}

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--size-4);
		padding: var(--size-2);
		padding-bottom: var(--size-8);
		border-top-left-radius: var(--radius-4);
		border-top-right-radius: var(--radius-4);
		color: var(--white);
		mask: var(--mask-edge-scoop-bottom);
		-webkit-mask: var(--mask-edge-scoop-bottom);
	}

	img {
		border-radius: var(--radius-4);
	}

	.details-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--size-4);
	}
</style>

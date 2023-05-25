<script lang="ts">
	import { BACKGROUND_COLOR } from '$lib/constants/bacground-color';
	import type { Character } from '$lib/interface/Character';

	export let character: Character;
</script>

<div class="container">
	<a href="characters/{character.id}">
		<img loading="eager" width="250" src={character.image} alt={character.name} />
		<div class="info-container {BACKGROUND_COLOR[character.status]}">
			<p>
				Name: {character.name} <br />
				From: {character.origin.name} <br />
				Status: {character.status}
			</p>
		</div>
	</a>
</div>

<style>
	.container {
		width: 250px;
		height: 250px;
		position: relative;
		text-align: start;
		border: 1px solid var(--text-2);
		border-radius: var(--radius-3);
		overflow: hidden;
		transition: scale 0.2s;
	}

	.container:hover {
		cursor: pointer;
		scale: 1.1;
	}

	img {
		position: absolute;
		top: 0;
		border-radius: var(--radius-round);
		scale: 0.8;
		transition: 0.2s;
		transform: translateY(-12px);
	}

	/* Hover animations starts here */
	.container:hover .info-container {
		height: var(--size-10);
	}

	.container:hover img {
		scale: 0.7;
		transform: translateY(-36px);
	}
	/* Hover animations ends here */

	.info-container {
		height: var(--size-5);
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		transition: 0.2s;
		padding-inline: var(--size-2);
		z-index: 2;
	}

	p {
		font-size: small;
	}
</style>

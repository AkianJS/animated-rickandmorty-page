<script lang="ts">
	import type { Character } from '$lib/interface/Character';

	export let character: Character;
</script>

<div>
	<a href="characters/{character.id}">
		<img width="250" src={character.image} alt={character.name} />
		{character.name}
	</a>
</div>

<style>
	div {
		text-align: center;
	}

	img {
		border-radius: var(--radius-2);
	}
</style>

<script lang="ts">
	import CharacterDetail from '$lib/components/characters/CharacterDetail.svelte';

	export let data;

	console.log(data);
</script>

<svelte:head>
	<title>{data.character.name} | Rick and Morty</title>
</svelte:head>

<CharacterDetail animationStart={data.animationStart} character={data.character} />

<script lang="ts">
	import Banner from '$lib/components/Banner.svelte';
	import SearchCharacter from '$lib/components/SearchCharacter.svelte';
	import CharacterList from '$lib/components/characters/CharacterList.svelte';

	export let data;
</script>

<Banner />

<SearchCharacter />

<CharacterList characters={data.characters.results} />

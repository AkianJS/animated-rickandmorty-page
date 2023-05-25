<script lang="ts">
	import Banner from '$lib/components/Banner.svelte';
	import SearchCharacter from '$lib/components/SearchCharacter.svelte';
	import CharacterList from '$lib/components/characters/CharacterList.svelte';
	import PageController from '$lib/components/characters/PageController.svelte';

	export let data;
</script>

<Banner />

<SearchCharacter />

<CharacterList animationStart={data.animationStart} characters={data.characters.results} />

<PageController paginationInfo={data.characters.info} />

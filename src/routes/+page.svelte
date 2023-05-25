<script lang="ts">
	import Banner from '$lib/components/Banner.svelte';
	import SearchCharacter from '$lib/components/SearchCharacter.svelte';
	import CharacterList from '$lib/components/characters/CharacterList.svelte';
	import PageController from '$lib/components/characters/PageController.svelte';

	export let data;
</script>

<svelte:head>
	<title>Rick and Morty Website</title>
	<meta
		name="description"
		content="Immerse yourself in the wacky and mind-bending world of Rick and Morty! Our website is your ultimate destination for all things related to the critically acclaimed animated series. From character profiles to episode summaries, theories, and fan art, we've got you covered. Discover the multiverse of adventure, humor, and existential crises with Rick and Morty Universe!"
	/>
	<meta
		name="keywords"
		content="Rick and Morty, animated series, multiverse, adventure, humor, existential crises, character profiles, episode summaries, theories, fan art"
	/>
</svelte:head>

<Banner />

<SearchCharacter />

<CharacterList animationStart={data.animationStart} characters={data.characters.results} />

<PageController pageNumber={data.pageNumber} paginationInfo={data.characters.info} />

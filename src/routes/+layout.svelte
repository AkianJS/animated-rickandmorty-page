<script lang="ts">
	import '../app.postcss';
	import Navbar from '$lib/components/layout/Navbar.svelte';
</script>

<Navbar />

<main>
	<slot />
</main>

<style>
	main {
		margin-top: var(--size-4);
	}
</style>

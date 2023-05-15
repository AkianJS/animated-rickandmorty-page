<script lang="ts">
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import '/src/app.css';
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

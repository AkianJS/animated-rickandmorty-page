<script lang="ts">
	import { Search } from 'lucide-svelte';
</script>

<div class="container">
	<input class="surface-4" type="text" />
	<i>
		<Search />
	</i>
</div>

<style>
	.container {
		position: relative;
		display: flex;
		align-items: center;
	}

	input {
		width: var(--size-fluid-10);
		height: var(--size-8);
		border-radius: var(--radius-4);
		padding-inline: var(--size-4) var(--size-8);
	}

	input:focus {
		outline: none;
	}

	i {
		position: absolute;
		right: var(--size-4);
	}
</style>

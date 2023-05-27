<script lang="ts">
	import { goto, afterNavigate } from '$app/navigation';
	import { Search } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let value = '';
	let timer: ReturnType<typeof setTimeout>;
	let inputElement: HTMLInputElement;

	const debounce = (v: string) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			value = v;
			goto(`/?name=${v}`);
		}, 500);
	};

	onMount(() => {
		inputElement.focus();
	});

	afterNavigate(() => {
		inputElement.focus();
	});
</script>

<div class="container">
	<input
		bind:this={inputElement}
		on:keyup={(event) => debounce(event.currentTarget.value)}
		aria-label="Search"
		class="surface-4"
		type="text"
	/>
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
		padding-inline: var(--size-4) var(--size-9);
	}

	input:focus {
		outline: none;
	}

	input:hover {
		cursor: text;
	}

	i {
		position: absolute;
		right: var(--size-4);
		border-left: 2px solid var(--text-2);
		padding-left: var(--size-2);
	}

	i:hover {
		cursor: pointer;
	}
</style>

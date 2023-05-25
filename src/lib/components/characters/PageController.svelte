<script lang="ts">
	import { page } from '$app/stores';
	import type { Info } from '$lib/interface/Character';
	import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-svelte';
	import { to_number } from 'svelte/internal';

	export let paginationInfo: Info;

	let pageNumber: number;

	/* 
        Since searchParams returns a string, we need to convert it to a number.
    */
	$: paginationInfo, (pageNumber = to_number($page.url.searchParams.get('page')) ?? 1);
</script>

<div class="container">
	{#if paginationInfo.prev}
		<a class="controller arrow-left" href={`?page=${pageNumber - 1}`}
			><ArrowBigLeftDash /> Previous</a
		>
	{/if}

	{#if paginationInfo.next}
		<a class="controller arrow-right" href={`?page=${pageNumber + 1}`}
			>Next <ArrowBigRightDash /></a
		>
	{/if}
</div>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--size-6);
		margin-block: var(--size-4);
	}

	.controller {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.arrow-left:hover {
		animation: arrow-left 0.5s ease-in-out infinite;
	}

	.arrow-right:hover {
		animation: arrow-right 0.5s ease-in-out infinite;
	}

	/* Animations section */
	@keyframes arrow-left {
		0% {
			transform: translateX(0);
		}

		50% {
			transform: translateX(-0.5rem);
		}

		100% {
			transform: translateX(0);
		}
	}

	@keyframes arrow-right {
		0% {
			transform: translateX(0);
		}

		50% {
			transform: translateX(0.5rem);
		}

		100% {
			transform: translateX(0);
		}
	}
</style>

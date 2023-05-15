<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';

	let isDarkTheme = true;

	function changeTheme() {
		const theme = isDarkTheme ? 'dark' : 'light';
		const doc = document.firstElementChild as HTMLElement;
		doc.setAttribute('color-scheme', theme);
	}
</script>

<label>
	<input type="checkbox" bind:checked={isDarkTheme} on:change={changeTheme} />
	<span>
		<i class:light-theme={!isDarkTheme}>
			{#if isDarkTheme}
				<Moon size="24" />
			{:else}
				<Sun size="24" />
			{/if}
		</i>
	</span>
</label>

<style>
	label {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}

	input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	span {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--text-1);
		border-radius: 34px;
	}

	i {
		position: absolute;
		top: 50%;
		left: 5%;
		transform: translateY(-50%);
		color: var(--surface-1);
		transition: transform 0.4s;
	}

	.light-theme {
		transform: translate(100%, -50%);
	}
</style>

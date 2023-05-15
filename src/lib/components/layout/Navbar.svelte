<script lang="ts">
	import ThemeChanger from './ThemeChanger.svelte';
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
		<li><ThemeChanger /></li>
	</ul>
</nav>

<style>
	nav {
		max-width: var(--size-xl);
		margin-inline: auto;
	}

	ul {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: var(--size-8);
	}

	a {
		position: relative;
	}

	a::after {
		content: '';
		display: block;
		position: absolute;
		width: 0;
		height: 2px;
		transition: width 0.3s;
		background: var(--text-1);
	}

	a:hover::after {
		width: 100%;
		background: var(--text-1);
	}
</style>

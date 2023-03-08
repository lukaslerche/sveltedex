<script lang="ts">
	import type { PageData } from './$types';
	import PkmnIcon from './PkmnIcon.svelte';

	export let data: PageData;

	$: species = data.species;
</script>

<h1>List of Pokémon</h1>
<ul>
	{#each species as p}
		<li>
			<PkmnIcon url={p.url} name={p.name} />
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		padding: 0;
		gap: 5px;
	}
</style>

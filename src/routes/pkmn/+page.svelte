<script lang="ts">
	import { cap, id } from '$lib/strings';
	import type { PageData } from './$types';

	export let data: PageData;

	$: species = data.species;
</script>

<h1>List of Pokémon</h1>
<ul>
	{#each species as p}
		<li><a href="/pkmn/{id(p.url)}">{id(p.url)}: {cap(p.name)}</a></li>
	{/each}
</ul>

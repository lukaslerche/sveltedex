<script lang="ts">
	import { cap } from '$lib/strings';
	import type { PageData } from './$types';

	export let data: PageData;

	$: species = data.species;

	function idFromUrl(url: string) {
		const regex = /\/(\d+)\/$/;
		const result = url.match(regex);
		return result ? result[1] : '';
	}
</script>

<h1>List of Pokémon</h1>
<ul>
	{#each species as p}
		<li><a href="/pkmn/{idFromUrl(p.url)}">{idFromUrl(p.url)}: {cap(p.name)}</a></li>
	{/each}
</ul>

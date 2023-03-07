<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: list = data.list;

	function cap(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	function idFromUrl(url: string) {
		const regex = /\/(\d+)\/$/;
		const result = url.match(regex);
		return result ? result[1] : '';
	}
</script>

<h1>List of Pokémon</h1>
<ul>
	{#each list as p}
		<li><a href="/pkmn/{idFromUrl(p.url)}">{idFromUrl(p.url)}: {cap(p.name)}</a></li>
	{/each}
</ul>

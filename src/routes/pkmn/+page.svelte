<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: list = data.list;
</script>

<h1>List of Pokémon</h1>
<ul>
	{#each list as p}
		<li>{p.name} : {p.url}</li>
	{/each}
</ul>

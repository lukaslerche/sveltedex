<script lang="ts">
	import { cap } from '$lib/strings';
	import type { PageData } from './$types';

	export let data: PageData;

	$: p = data.pokemon;
	$: e = data.nextEvolutions;

	let imgUrl = data.pokemon.sprites.other['official-artwork'].front_default;
</script>

<div>
	<a href="/pkmn/{p.id - 1}" type="button" class="nes-btn is-primary">&lt;-</a>
	<a href="/pkmn" type="button" class="nes-btn is-error">List</a>
	<a href="/pkmn/{p.id + 1}" type="button" class="nes-btn is-primary">-&gt;</a>
</div>

<h1>No. {p.id} - {cap(p.name)}</h1>

<div class="mask-container" style="--test:url('{imgUrl}')">
	<img class='bw pokeImage' src={p.sprites.other['official-artwork'].front_default} alt="sprite of {p.name}" />
	<div class="colorImage mask-animation" />
</div>

<div class="nes-container with-title">
	<p class="title">Info</p>
	<p>
		Types:
		{#each p.types as t, i}
			{cap(t.type.name)}{#if i < p.types.length - 1},&nbsp;{/if}
		{/each}
	</p>
	<p>Height: {p.height / 10} m</p>
	<p>Weight: {p.weight / 10} kg</p>
</div>

<div class="nes-container with-title">
	<p class="title">Stats</p>
	{#each p.stats as s}
		<p>
			{s.stat.name}: {s.base_stat} <progress class="nes-progress" value={s.base_stat} max="255" />
		</p>
	{/each}
</div>

<div class="nes-container with-title">
	<p class="title">Moves / Abilities</p>
	<p>TODO...</p>
</div>

{#if e.length > 0}
	<div class="nes-container with-title">
		<p class="title">Evolution</p>
		{#each e as evo}
			<p>{cap(evo.species.name)}</p>
		{/each}
	</div>
{/if}

<style>
	progress {
		height: 20px;
	}
	div {
		margin: 10px;
	}
</style>

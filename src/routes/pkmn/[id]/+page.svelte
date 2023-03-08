<script lang="ts">
	import { cap } from '$lib/strings';
	import type { PageData } from './$types';

	export let data: PageData;

	$: p = data.pokemon;
	$: e = data.nextEvolutions;
	console.log(data.pokemon);
	let imgUrl = p.sprites.other['official-artwork'].front_default;
</script>


<h1>No. {p.id} - {cap(p.name)}</h1>

<div>
	<!-- <div --background-image="url({imgUrl}})" /> -->
	<img class='bw pokeImage' src={p.sprites.other['official-artwork'].front_default} alt="sprite of {p.name}" />
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

<div>
	<a href="/pkmn/{p.id - 1}" type="button" class="nes-btn is-primary">&lt;- prev</a>
	<a href="/pkmn/{p.id + 1}" type="button" class="nes-btn is-primary">next -&gt;</a>
</div>

<style>
	progress {
		height: 20px;
	}
	div {
		margin: 10px;
	}
</style>

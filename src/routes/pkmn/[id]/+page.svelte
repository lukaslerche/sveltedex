<script lang="ts">
	import { cap } from '$lib/strings';
	import type { PageData } from './$types';

	export let data: PageData;

	$: p = data.pokemon;
</script>

<h1>No. {p.id} - {cap(p.name)}</h1>

<div><img src={p.sprites.front_default} alt="sprite of {p.name}" />
</div>

<div class="nes-container with-title">
	<p class="title">Info</p>
	<p>
		Types:
		{#each p.types as t}
			{t.type.name}&nbsp;
		{/each}
	</p>
	<p>Height: {p.height} inch</p>
	<p>Weight: {p.weight} lb</p>
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

<div class="nes-container with-title">
	<p class="title">Evolutions</p>
	<p>TODO....</p>
</div>

<div><a href="/pkmn/{p.id - 1}" type="button" class="nes-btn is-primary">&lt;- prev</a>
	<a href="/pkmn/{p.id + 1}" type="button" class="nes-btn is-primary">next -&gt;</a>
	</div>

<style>
	progress {
		height: 20px;
	}
	div{
		margin: 10px;
	}
</style>

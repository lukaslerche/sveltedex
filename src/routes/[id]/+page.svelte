<script lang="ts">
	import { cap, id } from '$lib/strings';
	import type { PageData } from './$types';
	import { afterUpdate } from 'svelte';
	import { getEncounterAnimation, isShiny } from '$lib/dexUtils';
	import type { OfficialArtworkNew } from '$lib/better';
	import { shinyCache } from '$lib/stores';

	export let data: PageData;

	$: p = data.pokemon;
	$: e = data.nextEvolutions;
	let encounterAnimation: string;
	$: pokemonSprites = data.pokemon.sprites.other['official-artwork'] as OfficialArtworkNew;
	let pokemonSprite = data.pokemon.sprites.other['official-artwork']['front_default'];
	function updateCache(pokeType: string) {
		if (pokeType == 'front_shiny') {
			shinyCache.update((n) => {
				n[data.pokemonId] = true;
				return n;
			});
			window.localStorage.setItem('pokeId', JSON.stringify($shinyCache));
		}
	}

	afterUpdate(() => {
		const maskedImage = document.querySelector('.colorImage');
		encounterAnimation = getEncounterAnimation();
		let pokemonSpriteSuffix = isShiny($shinyCache[data.pokemonId]);
		pokemonSprite = pokemonSprites[pokemonSpriteSuffix];
		updateCache(pokemonSpriteSuffix);
		if (maskedImage) {
			maskedImage.classList.remove('mask-animation');
			setTimeout(() => maskedImage.classList.add('mask-animation'), 100);
		}
	});
</script>

<div>
	<a href="/{p.id - 1}" type="button" class="nes-btn is-primary">&lt;-</a>
	<a href="/" type="button" class="nes-btn is-error">List</a>
	<a href="/{p.id + 1}" type="button" class="nes-btn is-primary">-&gt;</a>
</div>
<h1>No. {p.id} - {cap(p.name)}</h1>
<div
	class="mask-container"
	style="--pokeImage:url('{pokemonSprite}'); --encounterAnimation:{encounterAnimation}"
>
	<img
		class="bw pokeImage"
		src={p.sprites.other['official-artwork'].front_default}
		alt="sprite of {p.name}"
	/>
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

{#if e.length > 0}
	<div class="nes-container with-title">
		<p class="title">Evolution</p>
		{#each e as evo}
			<p>
				{cap(evo.species.name)}
				<img
					src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
						id(evo.species.url) +
						'.png'}
					alt={"'Sprite of " + cap(evo.species.name) + "'"}
				/>
			</p>
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

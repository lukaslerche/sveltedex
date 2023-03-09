import P from '$lib/server/PokeAPI';
import { id } from '$lib/strings';
import { getNextEvolutions } from '$lib/dexUtils';
import { error } from '@sveltejs/kit';
import type PokeAPI from 'pokedex-promise-v2';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	if (parseInt(params.id) > 151 || parseInt(params.id) < 1) {
		throw error(404, 'Your Pokémon is in another castle!');
	}
	let pokemon: PokeAPI.Pokemon;
	let species: PokeAPI.PokemonSpecies;
	let evolution: PokeAPI.EvolutionChain;
	try {
		pokemon = await P.getPokemonByName(params.id);
		species = await P.getPokemonSpeciesByName(params.id);
		evolution = await P.getEvolutionChainById(id(species.evolution_chain?.url));
	} catch (err) {
		throw error(404, 'Your Pokémon is in another castle!');
	}

	let nextEvolutions = getNextEvolutions(evolution.chain, pokemon.name);
	nextEvolutions = nextEvolutions.filter((nextEvolution) => id(nextEvolution.species.url) <= 151);

	return { pokemon, species, nextEvolutions };
}) satisfies PageServerLoad;

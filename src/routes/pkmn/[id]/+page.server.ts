import P from '$lib/server/PokeAPI';
import { id } from '$lib/strings';
import { error } from '@sveltejs/kit';
import type PokeAPI from 'pokedex-promise-v2';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	console.log(`Requesting pkmn no. ${params.id}`);
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

	console.log(pokemon);
	console.log(species);

	return { pokemon, species, evolution };
}) satisfies PageServerLoad;

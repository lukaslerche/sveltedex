import P from '$lib/server/PokeAPI';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const interval = {
		limit: 151,
		offset: 0
	};

	//let list;
	let species;
	try {
		//list = await P.getPokemonsList(interval);
		species = await P.getPokemonSpeciesList(interval);

		console.log(
			`The result can serve ${species.count} pkmn, but i only requested an interval of ${species.results.length} pkmn`
		);

		//console.log(species);

		/*list.results.forEach(async (pokemon) => {
			const pokemonDetail = await P.getPokemonByName(pokemon.name);
			console.log(pokemonDetail.id);
			
		});*/
	} catch (err) {
		throw error(404, 'Could not retrieve pkmn.');
	}

	return {
		species: species.results
	};
}) satisfies PageServerLoad;

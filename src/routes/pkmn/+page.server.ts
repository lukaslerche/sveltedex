import P from '$lib/server/PokeAPI';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const interval = {
		limit: 151,
		offset: 0
	};

	let list;
	try {
		list = await P.getPokemonsList(interval);
		console.log(
			`The result can serve ${list.count} pkmn, but i only requested an interval of ${list.results.length} pkmn`
		);

		/*list.results.forEach(async (pokemon) => {
			const pokemonDetail = await P.getPokemonByName(pokemon.name);
			console.log(pokemonDetail.id);
			
		});*/
	} catch (err) {
		throw error(404, 'Could not retrieve pkmn.');
	}

	return {
		list: list.results
	};
}) satisfies PageServerLoad;

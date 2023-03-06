import PokeAPI from 'pokedex-promise-v2';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const P = new PokeAPI(); // TODO does this cache if we create a new one every request?

	const interval = {
		limit: 151,
		offset: 0
	};
	const list = await P.getPokemonsList(interval);
	console.log(
		`The result can serve ${list.count} pkmn, but i only requested an interval of ${list.results.length} pkmn`
	);

	return {
		list: list.results
	};
}) satisfies PageServerLoad;

import PokeAPI from 'pokedex-promise-v2';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const P = new PokeAPI(); // TODO does this cache if we create a new one every request?

	console.log(`Requesting pkmn no. ${params.id}`);
	const pokemon = await P.getPokemonByName(params.id);
	console.log(pokemon);

	return { pokemon };
}) satisfies PageServerLoad;

import P from '$lib/server/PokeAPI';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	console.log(`Requesting pkmn no. ${params.id}`);
	let pokemon;
	try {
		pokemon = await P.getPokemonByName(params.id);
	} catch (err) {
		throw error(404, 'Your Pokémon is in another castle!');
	}

	console.log(pokemon);

	return { pokemon };
}) satisfies PageServerLoad;

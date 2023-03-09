import type { Chain, ChainEvolvesTo } from 'pokedex-promise-v2';
import mask0 from '$lib/assets/mask-horz-striped.png';
import mask1 from '$lib/assets/mask-single-circle.png';

function getNextEvolutions(evoChain: Chain, ownName: string): ChainEvolvesTo[] {
	while (evoChain && ownName != evoChain.species.name) {
		evoChain = evoChain.evolves_to[0];
	}
	return evoChain ? evoChain.evolves_to : [];
}

function getEncounterAnimation(): string {
	return "url('" + encoutnerAnimationTypes[getRandomInt(2)] + "')";
}

function getRandomInt(max: number): number {
	return Math.floor(Math.random() * max);
}

const encoutnerAnimationTypes = [mask0, mask1];

function isShiny(cache: string): 'front_default' | 'front_shiny' {
	if (cache) {
		return 'front_shiny';
	}
	return getRandomInt(100) ? 'front_default' : 'front_shiny';
}

export { getNextEvolutions, getEncounterAnimation, isShiny };

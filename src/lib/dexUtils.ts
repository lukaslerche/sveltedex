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
	let encounterAnimation = "url('" + encoutnerAnimationTypes[getRandomInt(2)] + "')";
	return encounterAnimation;
}

function getRandomInt(max: number): number {
	return Math.floor(Math.random() * max);
}

const encoutnerAnimationTypes = [mask0, mask1];

export { getNextEvolutions, getEncounterAnimation };

import type { Chain, ChainEvolvesTo } from 'pokedex-promise-v2';

function getNextEvolutions(evoChain: Chain, ownName: string): ChainEvolvesTo[] {
	while (evoChain && ownName != evoChain.species.name) {
		evoChain = evoChain.evolves_to[0];
	}
	return evoChain ? evoChain.evolves_to : [];
}

function getEncounterAnimation(): string {
	let encounterAnimation = "url('../mask-" + encoutnerAnimationTypes[getRandomInt(2)] + ".png')";
	return encounterAnimation;
}

function getRandomInt(max: number): number {
	return Math.floor(Math.random() * max);
}

const encoutnerAnimationTypes = ['horz-striped', 'single-circle'];

export { getNextEvolutions, getEncounterAnimation };

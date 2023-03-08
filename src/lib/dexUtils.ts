import type { Chain, ChainEvolvesTo } from 'pokedex-promise-v2';

function isEeveelution(evoChain: Chain, name: string): boolean {
	return evoChain.species.name == 'eevee' && name != 'eevee';
}

function getNextEvolutions(evoChain: Chain, ownName: string): ChainEvolvesTo[] {
	if (isEeveelution(evoChain, ownName)) {
		return evoChain.evolves_to[0].evolves_to;
	}
	while (ownName != evoChain.species.name) {
		evoChain = evoChain.evolves_to[0];
	}
	return evoChain.evolves_to;
}

export { getNextEvolutions };

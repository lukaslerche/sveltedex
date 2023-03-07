function isEeveelution (evoChain: PokeAPI.Chain, name: string): Boolean {
    return (evoChain.species.name == 'eevee' && name != 'eevee');
}

function getNextEvolutions (evoChain: PokeAPI.Chain, ownName: string): PokeAPI.ChainEvolvesTo[] {
    if (isEeveelution(evoChain, ownName)) {
        return evoChain.evolves_to[0].evolves_to;
    }
    while (ownName != evoChain.species.name) {
        evoChain = evoChain.evolves_to[0];
        console.log(evoChain);
    }
    return evoChain.evolves_to;
}

export { getNextEvolutions };
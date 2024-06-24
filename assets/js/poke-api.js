
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    pokemon.height = pokeDetail.height
    pokemon.weight = pokeDetail.weight
    //Stats Pokemon


    const valueBaseStat = pokeDetail.stats.map((statsSlot) => statsSlot.base_stat)
    pokemon.valueStat = valueBaseStat
	const statName = pokeDetail.stats.map((statsSlot) => statsSlot.stat.name)
    pokemon.statName = statName

	for(let i = 0;i < valueBaseStat.length; i++){
        pokemon.stats.push([statName[i],valueBaseStat[i]]);
    }
    // Abilities base Pokemon
    const moves = pokeDetail.abilities.map((abilitiesSlot) => abilitiesSlot.ability.name)
    pokemon.moves = moves


    return pokemon
}

pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getDetail = (number) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${number}`

    return fetch(url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}


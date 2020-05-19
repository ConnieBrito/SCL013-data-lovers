//Nuevo array de la data
export const allPoke = (dataInfo) => {
    const newPokeArray = [];
    for (let i = 0; i < dataInfo.length; i += 1) {
        newPokeArray.push(dataInfo[i]);
    }
    return newPokeArray;
};

//Ordena alfabéticamente pokémon A-Z
export const orderDataAz = (dataInfo) => {
    const newPokeArray = [];
    for (let i = 0; i < dataInfo.length; i++) {
        newPokeArray.push(dataInfo[i]);
    }
    newPokeArray.sort((pokemonA, pokemonB) => {
        if (pokemonA.name > pokemonB.name) {
            return 1;
        }
        if (pokemonA.name < pokemonB.name) {
            return -1;
        }
        return 0;
    });
    return newPokeArray;
};

//Ordena alfabéticamente pokémon Z-A
export const orderDataZa = (dataInfo) => {
    const newPokeArray = [];
    for (let i = 0; i < dataInfo.length; i += 1) {
        newPokeArray.push(dataInfo[i]);
    }
    newPokeArray.sort((pokemonA, pokemonB) => {
        if (pokemonA.name > pokemonB.name) {
            return -1;
        }
        if (pokemonA.name < pokemonB.name) {
            return 1;
        }
        return 0;
    });
    return newPokeArray;
};

//Ordena pokémon por número #151 - #001
export const orderDataNumDes = (dataInfo) => {
    const newPokeArray = [];
    for (let i = 0; i < dataInfo.length; i++) {
        newPokeArray.push(dataInfo[i]);
    }
    newPokeArray.sort((a, b) => parseInt(b.num - a.num));
    return newPokeArray;
};


//Filtra por debilidad de pokémon
export const weaknessFilter = (dataInfo, debilPokemon) => {
    const newPokeArray = [];
    for (let i = 0; i < dataInfo.length; i += 1) {
        newPokeArray.push(dataInfo[i]);
    }
    return newPokeArray.filter(pokemon => pokemon.weaknesses.includes(debilPokemon));
};

//Búsqueda por nombre de pokémon
export const searchPokemon = (dataInfo, searchInput) => {
    const search = dataInfo.filter((e) => {
        return (e.name.toLowerCase().includes(searchInput))
    });
    return search;
}

//Filtra por tipo de pokémon

export const filterPokemonType = (dataInfo, pokeTipo) => {
    const newDataArray = [];
    for (let i = 0; i < dataInfo.length; i += 1) {
        newDataArray.push(dataInfo[i]);
    }
    return newDataArray.filter(pokemon => pokemon.type.includes(pokeTipo));
};

/*export const filterPokemonCandy = (dataInfo, candy) => {
    const newDataArray = [];
    for (let i = 0; i < dataInfo.length; i += 1) {
        newDataArray.push(dataInfo[i]);
    }
    return newDataArray.filter(pokemon => pokemon.candy.includes(candy));
};*/
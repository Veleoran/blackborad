let startIndex = 1;
let pokemons_number = 15;

const fetchPokemons = () => {
    for (let i = startIndex; i <= pokemons_number; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(response => response.json()).then(pokemon => {
            createPokemonCard(pokemon);
        });
    }
};

function createPokemonCard(pokemon) {

    const type = pokemon.types[0].type.name
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    document.querySelector('#poke_container').innerHTML += `
    <div class="pokemon ${type}">
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}" />
        </div>
        <div class="info">
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
        <div>
    `;
}

fetchPokemons();

document.querySelector('#next').addEventListener('click',
    function () {
        startIndex += pokemons_number;
        pokemons_number += pokemons_number;
        fetchPokemons();
    }
);
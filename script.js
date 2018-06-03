const app = () => {
  const pokedex = document.querySelector('.pokedex');
  const cardApiAddress = `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`
  const pokemons = [];

  function apiRequest(apiAddress) {
    fetch(apiAddress)
      .then(response => response.json())
      .then(data => pokemons.push(...data.pokemon))
      .then(console.log(pokemons))
      .then(printPokemon)
      .catch(error =>  {
        console.log('Error: ', error)});
  }

  const printPokemon = () => {
    let pokemonCards;
    console.log(pokemons[0])
    for (var i in pokemons) {
      pokemonCards += `

        <div class="cardCover">
          <div class="pokemonNumber">${pokemons[i].id}</div>
          <div class="pokemonName">${pokemons[i].name}</div>
          <img src="http://www.serebii.net/pokemongo/pokemon/${pokemons[i].num}.png" class="pokemonIMG">
          <div class="pokemonCardDescription">${pokemons[i].type}</div>
        </div>
        `;
    }
    pokedex.innerHTML = pokemonCards;
  }

  apiRequest(cardApiAddress);
}

app();
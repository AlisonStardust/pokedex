const app = () => {
  const poke = document.querySelector('.poke');
  const cardApiAddress = `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`
  const pokemons = [];

  function apiRequest(apiAddress) {
    fetch(apiAddress)
      .then(resp => resp.json())
      //data.pokemon[i] - each pokemon
      .then(data => pokemons.push(...data.pokemon))
      .then(console.log(pokemons))
      .then(printPokemon)
      .catch(error =>  {
        console.log('Error: ', error)});
  }

  const printPokemon = () => {
    let deckScript;
    for (var i in pokemons) {
    deckScript += `
      <div class="cardCover">${pokemons[i].name}
      <img src="http://www.serebii.net/pokemongo/pokemon/${pokemons[i].id}.png" class="pokemonIMG">
      </div>
      `;
    }
    poke.innerHTML = deckScript;
  }

  apiRequest(cardApiAddress);
}

app();
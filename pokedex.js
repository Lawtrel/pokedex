const pokedex = document.getElementById("pokedex");

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 151; i++)
    {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch (url).then((res) => res.json()));
    }
        Promise.all(promises).then(results => {
            const pokemon = results.map(data => ({
                name: data.name,
                id: data.id,
                image: data.sprites["front_default"],
                types: data.types.map(type => type.type.name).join(", "),
            }));
            displayPoke(pokemon);
            //console.log(results)
        });

}


const displayPoke = (pokemon) => {
    //console.log(pokemon);
    const pokemonHtmlString = pokemon
    .map(
        pokeman =>
            `<li class="card"> 
                <img class="card-image" src="${pokeman.image}"/>
                <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
                <p class="card-subtitle">Type: ${pokeman.types}</p>
            </li>`
    )
        .join("");
        pokedex.innerHTML = pokemonHtmlString;
    };


/*const fetchItem = () => {
    for (let I = 1; I <= 3; I++)
    {
        const url = `https://pokeapi.co/api/v2/item/${i}`;

    }
}*/

//fetchItem();
fetchPokemon();
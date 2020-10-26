const fetch = require('node-fetch')
const fs = require('fs')

let poke_input = "";
poke_input = fs.readFileSync("input.txt", "utf8");

poke_input = poke_input.replace(/(\r)/gm, "");  //remove carriage returns (\r)
let poke_input_arr = poke_input.split('\n');  //split Pokemon string into array
poke_input_arr = poke_input_arr.map(entry => entry.toLowerCase()); //API does not work with capitalized names

async function read_pokemon_data (name) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)  //grab data for Pokemon passed in to function
        .then(data => data.json())
        .then(data => {
            console.log(name[0].toUpperCase() + name.substring(1) + ": " + data.types.map(element => element.type.name).join(", "))  //output capitalized Pokemon name + types
        })
        .catch(err => console.log(err))
}

poke_input_arr.forEach(entry => read_pokemon_data(entry)); //call function to fetch Pokemon types for each Pokemon in list
const fetch = require('node-fetch')
const fs = require('fs')

let poke_input = "";
poke_input = fs.readFileSync("input.txt", "utf8");

poke_input = poke_input.replace(/(\r)/gm, "");
let poke_input_arr = poke_input.split('\n');
poke_input_arr = poke_input_arr.map(entry => entry.toLowerCase());

function read_pokemon_data (name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(data => data.json())
        .then(data => {
            //let types = "";
            //for(let nums of data.types) {
            //    data.types[nums].type.name;
            //}
            console.log(name[0].toUpperCase() + name.substring(1) + ": " + data.types.map(element => element.type.name).join(", "))
        })
}

poke_input_arr.forEach(entry => read_pokemon_data(entry));
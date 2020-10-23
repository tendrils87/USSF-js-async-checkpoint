const fetch = require('node-fetch')
const fs = require('fs')

let poke_input = fs.readFile('input.txt');

poke_input = poke_input.split("\n");
poke_input = poke_input.map(entry => entry.toLowerCase());

function read_pokemon_data (name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(data => data.json())
        .then(data => {
            //let types = "";
            //for(let nums of data.types) {
            //    data.types[nums].type.name;
            //}
            console.log(name[0].toUpperCase + name.substring(1) + ": " + data.types.map(element => element.type.name).join(", "))
        })
}

poke_input.forEach(entry => read_pokemon_data(entry));
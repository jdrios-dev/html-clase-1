// Arrays

// Objects

// Async

// var nombre = 'daniel' // no usar NUNCA
// let nombre = "daniel";
// JSON
// typescript
// Hosting

const frutas = [1, 2, 3, null];

const direccion = {
  nombre: "juan",
  edad: 26,
  th: false,
  direccion: {
    calle: 12,
    krr: "asdasd",
  },
  color: ["azul", "rojo"],
};

// console.log(direccion.color[1]);

const students = [
  { nombre: "Joe", color: "Black" },
  { nombre: "Juan", color: "White" },
  { nombre: "And", color: "Blue" },
  { nombre: "Dan", color: "Yellow" },
];

function printColors(edad, isBirthday, t) {
  const age = calcAge();
  if (isBd) {
    return edad + 1;
  }
  return edad;
}
// funciones anonimas
// arrow functions
const printColorss = () => 1 + 1;

// console.log(printColors(26, true));

const fetchData = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon/ditto";
  const resp = await fetch(url);
  const data = await resp.json();
  // console.log(data);
};
// fetchData();

// API

const makePokemon = (pokemon) => {
  //console.log(pokemon.name);
  return {
    name: pokemon.name,
    image: pokemon.sprites.front_default,
  };
};

const title = document.getElementById("pokename");
const img = document.getElementById("pokeimg");

function getVal() {
  const val = document.querySelector("input").value;
  fetchPokemons(val);
}

const fetchPokemons = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const resp = await fetch(url);
  const pokemon = await resp.json();
  const pokemClean = makePokemon(pokemon);
  title.innerText = pokemClean.name;
  img.setAttribute("src", pokemClean.image);
};

fetchPokemons();
//get
//post
//patch
//delete

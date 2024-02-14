const marvelHeros = ["Thor", "IronMan", "Wanda"];
const DCHeros = ["SuperMan", "BatMan", "Flash"];

// marvelHeros.push(DCHeros);
// console.log(marvelHeros); //treated DCHeros as an element
// console.log(marvelHeros[3][2]);

// const newArr = marvelHeros.concat(DCHeros); //concat returns new array
// console.log(newArr);

const new_heros = [...marvelHeros, ...DCHeros];
// console.log(new_heros);

const another_arr = [1, 2, 3, [5, 6, 7], 7, [6, 7, [4, 5]]];
const real_arr = another_arr.flat(Infinity);
// console.log(real_arr);

// console.log(Array.isArray("Agrim"));
// console.log(Array.from("Agrim"));
// console.log(Array.from({ name: "agrim" })); //interesting

let score1 = 10;
let score2 = 20;
let score3 = 30;

console.log(Array.of(score1, score2, score3));

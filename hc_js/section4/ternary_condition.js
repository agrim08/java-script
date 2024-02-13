const age = 20;
age >= 18;
// ? console.log("i like to drink wine")
// : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);
//same can be done with if else statement.

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

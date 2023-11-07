"use strict";

const restraunt = {
  name: "Taj Hotel",
  location: "Mumbai, India",
  categories: ["south indian", "North Indian", "chinese"],
  starterMenu: ["bread", "salad", "focaccia"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const array = [2, 3, 4];
const a = array[0];
const b = array[1];
const c = array[2];

const [x, y, z] = array;
console.log(x, y, z);
console.log(array);

// const [main, secondary] = restraunt.categories;
let [main, , secondary] = restraunt.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//switching variables using destructing
[main, secondary] = [secondary, main];
console.log(main, secondary);

//recieve 2 return values from a fucntion:
console.log(restraunt.order(2, 0));

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values;
const [p, q, r] = [9, 10];
console.log(p, q, r);

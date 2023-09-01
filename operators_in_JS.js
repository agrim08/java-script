//operators in JS:
// arthematic operator:
const now = 2037;
const ageme = now - 2005;
const ageneha = now - 1996;
console.log(ageme, ageneha);
console.log(ageme * 2, ageneha / 10, 2 ** 3);
let x = 10 + 5;
x += 10;
x *= 4;
x++; //x = x+1
x--; //x = x-1
console.log(x);

//concatination:
const firstName = "agrim";
const lastName = "gupta";
console.log(firstName + " " + lastName);

//comparison operator;
console.log(ageme > ageneha); // >,<, >=,<==
console.log(ageme >= 20);
const isFullage = ageme >= 20; // this variable is holding a boolean value

console.log(now - 1996 > now - 2005);

// operator precedence:
// 1. mathematical operators have higher precedence than comparison.
// 2. operators generally executed from left to right.

let a, b;
a = b = 25 - 10 - 5; //a = b = 10, a = 10
console.log(a, b);

const avgAge = (ageme + ageneha) / 2;
console.log(avgAge);

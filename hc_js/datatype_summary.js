//data is classified on basis of how data is stored in memory and how it is accessed
// 1. Primitive(call by value) : string,Number,boolean,Null,Undefined,Symbol,BigInt.
//Stack memory = Primitive

// 2. Reference type(Non-Primitive) : Arrays,Objects,Functions
//Heap memory = Non-primitive

//arrays:
const heros = ["SpiderMan", "Thor", "Wanda"];

//objects:
let myObj = {
  Name: "agrim",
  age: 19,
};

//Functions:

const myFunction = function () {
  console.log("Hello World");
};

myFunction();

console.log(typeof myFunction); //imp

let userOne = {
  Name: "Agrim Gupta",
  email: "agrimxyz@ggl.com",
};

let userTwo = userOne;
userTwo.Name = "mamta";

console.log(userOne.Name);
console.log(userTwo.Name);

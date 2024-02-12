const mySym = Symbol("key1");

const myObj = {
  name: "Agrim",
  age: 19,
  email: "agrim08@goggle.com",
  isLoggedIn: false,
  [mySym]: "myKey1",
  //   mySym: "myKey1",
};

// console.log(myObj.email);
// console.log(myObj["email"]); //see the difference
// // console.log(typeof myObj.mySym);
// console.log(myObj[mySym]);

//changing values:
myObj.name = "Ansh";

// Object.freeze(myObj); //avoid changing of elements
// myObj.name = "mamta";
// console.log(myObj);

myObj.greeting = function () {
  console.log("Hello");
};

myObj.greeting2 = function () {
  console.log(`Hello JS user, ${this.name}`);
};

// console.log(myObj.greeting);
console.log(myObj.greeting());
console.log(myObj.greeting2());

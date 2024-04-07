// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`Agrim is present in all objects`);
};

Array.prototype.heyAgrim = function () {
  console.log(`Agrim says hello`);
};

// heroPower.Agrim()
// myHeros.Agrim()
// myHeros.heyAgrim()
// heroPower.heyAgrim()

// inheritance

const User = {
  name: "Mamta",
  email: "Mamta@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

//old syntax:ō
const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "Mamta    ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"Agrim".trueLength();
"iceTea".trueLength();

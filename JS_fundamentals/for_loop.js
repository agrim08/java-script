//for loop keeps running while condition is true

for (let rep = 1; rep <= 5; rep += 1) {
  console.log(`Lifting weights repetiton ${rep} 🏋️`);
}

//loop on arrays:

const types = [];

const Agrim = [
  "Agrim",
  "Gupta",
  2005,
  "Student",
  ["tanishq", "Sachi", "Prashant"],
];

for (let i = 0; i < Agrim.length; i += 1) {
  console.log(Agrim[i]);

  //   types[i] = typeof Agrim[i];
  types.push(typeof Agrim[i]);
}
console.log(types);

const years = [1991, 2007, 2020, 1969];
const age = [];

for (let i = 0; i < years.length; i++) {
  age.push(2023 - years[i]);
}
console.log(age);

//continue and break statement:
console.log("ONLY STRINGS 😂");
for (let i = 0; i < Agrim.length; i += 1) {
  if (typeof Agrim[i] != "string") continue;
  console.log(Agrim[i], typeof Agrim[i]);
}

console.log("BREAK WITH NUMBERS 😁");
for (let i = 0; i < Agrim.length; i += 1) {
  if (typeof Agrim[i] === "number") break;
  console.log(Agrim[i], typeof Agrim[i]);
}

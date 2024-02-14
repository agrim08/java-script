//these all are array specific loops

//******************forof loop:****************

const arr = [1, 2, 3, 4, 5];

for (const index of arr) {
  //   console.log(index); //no need of condition and updation
}

//loop on strings:

const myName = "AGRIM GUPTA";
for (const letter of myName) {
  if (letter === " ") {
    continue;
  }
  //   console.log(`Each letter is ${letter}`);
}

//*****************MAPS****************/
//holds 'unique' key value pair

const map = new Map();
map.set("UP", "Luckhnow");
map.set("Punjab", "Amritsar");
map.set("MP", "Bhopal");
map.set("UP", "Luckhnow"); //adding duplicate key-value

// console.log(map);

//forof loop on maps:

for (const [key, value] of map) {
  //destructured array **important!
  console.log(key, "=>", value);
}

//forof on objects:

const myObj = {
  game1: "PUBG",
  game2: "COC",
  game3: "Valorant",
};

// for (const [key, value] of myObj) {
//   console.log(key, "=>", value);
// }

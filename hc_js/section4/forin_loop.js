//used to iterate objects(w/c cannot be iterated by forof)

const myObj = {
  game1: "PUBG",
  game2: "COC",
  game3: "Valorant",
};

for (const key in myObj) {
  //   console.log(`${key} is ${myObj[key]}`);
}

//forin on arrays:

const language = ["JS", "PY", "CPP", "RB"];
for (const key in language) {
  //   console.log(`At index ${key}, we have ${language[key]} language`);
}

//forin on maps

const map = new Map();
map.set("UP", "Luckhnow");
map.set("Punjab", "Amritsar");
map.set("MP", "Bhopal");
map.set("UP", "Luckhnow");

for (const key in map) {
  console.log(key);
}
//maps cannot be iterated

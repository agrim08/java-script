const friend = ["agrim", "ansh", "neha"];
const newLength = friend.push("priyanshi");
console.log(newLength);
console.log(friend);

friend.unshift("john");
console.log(friend);

//remove elements
friend.pop(); //last
console.log(friend);
const popped = friend.pop();
console.log(popped);
console.log(friend);

friend.shift(); //first
console.log(friend);

console.log(friend.indexOf("agrim"));
console.log(friend.indexOf("mamta"));

console.log(friend.includes("agrim"));
console.log(friend.includes("mamta"));

const x = friend.push(23);

console.log(friend.includes("23")); //does not do type coercion
console.log(friend.includes(23));

if (friend.includes("agrim")) {
  console.log("You Have a frined called Agrim");
}
console.log(x);

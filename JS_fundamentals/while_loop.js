// for (let rep = 1; rep <= 10; rep += 1) {
//   console.log(`Lifting weights repetiton ${rep} 🏋️`);
// }

console.log("while loop😉 :-->");

let rep = 1;
while (rep <= 10) {
  //   console.log(`Lifting weights repetiton ${rep} 🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice != 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("loop is about to end");
}

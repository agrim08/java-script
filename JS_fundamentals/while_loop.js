// for (let rep = 1; rep <= 10; rep += 1) {
//   console.log(`Lifting weights repetiton ${rep} 🏋️`);
// }

console.log("while loop😉 :-->");

let rep = 1;
while (rep <= 10) {
  //   console.log(`Lifting weights repetiton ${rep} 🏋️`);
  rep++;
}

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

while (dice != 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("loop is about to end");
}

// *******************DO-WHILE-LOOP*****************//
console.log("\n");
console.log("DO_while loop :-");

let score = 1;
do {
  console.log(`score is ${score}`);
  score++;
} while (score <= 5);

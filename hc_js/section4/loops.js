//for loop:

let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
  if (sum > 30) {
    // console.log("limit reached");
    break;
  }
  //   console.log(sum);
}

for (let i = 0; i <= 10; i++) {
  //   console.log(`outer loop value ${i}`);

  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and outer loop value ${i}`);
  }
}

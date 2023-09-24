const Agrim = [
  "Agrim",
  "Gupta",
  2005,
  "Student",
  ["tanishq", "Sachi", "Prashant"],
];

//looping backwards:
for (let i = Agrim.length - 1; i >= 0; i--) {
  console.log(Agrim[i]);
}

//loop inside another loop:
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: lifting weight rep ${rep}`);
  }
}

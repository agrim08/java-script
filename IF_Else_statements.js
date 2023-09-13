//programm to check wheather a person is old enough for a DL
let age = 15;
const isEnough = age >= 18;

if (isEnough) {
  console.log("agrim can start driving");
} else {
  const yearsLeft = 18 - age;
  console.log(`agrim is too young wait aonther ${yearsLeft} years`);
}

const birthyear = 1998;
let century; //variable should be defined before
if (birthyear <= 2000) {
  century = 20;
} else {
  century = 21;
}

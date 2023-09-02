const firstName = "Agrim";
const job = "jobless";
const birthyear = 2005;
const year = 2023;

const agrim =
  "I'm " + firstName + ",a " + (year - birthyear) + " years old " + job + "!";
console.log(agrim);

//another way of same 'template literals'
const agrimnew = `i'm ${firstName}, a ${year - birthyear} years old ${job}!`;
console.log(agrimnew);

console.log(`string
with
multiple
lines`);

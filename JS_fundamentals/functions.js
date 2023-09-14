//syntax of func.:
// function functiom_name() {

// }

function logger() {
  console.log("My Name Is Agrim");
}

//calling / imvoking a func:
logger();
logger();
logger();
logger();

function fruitprocessor(apples, oranges) {
  //   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitprocessor(5, 0);
console.log(appleJuice);
// console.log(fruitprocessor(5, 0));

const appleorangeJuice = fruitprocessor(2, 4);
console.log(appleorangeJuice);

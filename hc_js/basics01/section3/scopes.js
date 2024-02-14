let a = 300;

if (true) {
  //block scope
  let a = 10;
  const b = 20;
  var c = 30;
  //   console.log("inner:", a);
}
//global scope

// console.log(a);
// console.log(b);
// console.log(c);

//Nested scope:

function one() {
  const myName = "Agrim";

  function two() {
    const website = "youtube";
    // console.log(myName);
  }

  //    console.log(website); //function one cannot access elements from two() !!

  two();
}
one();

if (true) {
  const username = "Agrim";
  if (username === "Agrim") {
    const website = " Youtube";
    // console.log(username + website);
  }
  //   console.log(website);
}
// console.log(username);

//*********************interesting******************//

addOne(5);
function addOne(num) {
  return num + 1;
}

addTwo(5);
const addTwo = function (num) {
  //this type of declaration of function is also called expression
  return num + 2;
};

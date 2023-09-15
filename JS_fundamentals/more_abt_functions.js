//function declaration:

const age1 = calcage(1991);
function calcage(birthyear) {
  return 2023 - birthyear;
}
// const age1 = calcage(1991);

//function expression:
const calcAge2 = function (birthyear) {
  return 2023 - birthyear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);
//calling a function declaration before defining it genrates no error
// but if we try to do the same with fucntion expression it will genrate an error

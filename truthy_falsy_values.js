// 5 falsy values: 0, '' , undefined, null , NaN.
//they are not initially false but will be converted to false when we attempt to convert them into booleans.
//everything else are truthy values.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  //if else statements accept only boolean values.
  console.log("don't spend it all");
} else {
  console.log("go  and get a job");
}
const cash = 100;
if (cash) {
  console.log("don't spend it all");
} else {
  console.log("go  and get a job");
}

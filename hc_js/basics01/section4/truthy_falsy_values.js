// 5 falsy values: 0, -0, BigInt 0n, '' , undefined, null , NaN.
//they are not initially false but will be converted to false when we attempt to convert them into booleans.
//everything else are truthy values.
// "0" "false" are truthy values

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

//to check empty array:
const myName = [];
if (myName.length === 0) {
  console.log("array is empty");
}

//to check empty objects:
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
}

// let val;
// val = null ?? undefined;
// console.log(val);

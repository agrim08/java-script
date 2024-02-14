// const coding = ["js", "py", "cpp"];

// const value = coding.forEach((item) => {
//   return item;
// });
// console.log(value); //foreach donot return anything

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const value = nums.filter((num) => num > 5);
// console.log(value);

// const value = nums.filter((num) => {
//   num > 5;
// });
// console.log(value); //important **!

// const value = nums.filter((num) => {
//   return num > 5;
// });
// console.log(value);

//doing same with foreach:
const newNum = [];

nums.forEach((num) => {
  if (num > 5) {
    newNum.push(num);
  }
});
console.log(newNum);

const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const added10 = Nums.map((num) => num + 10);
// console.log(added10);

//chaining:
const newNums = Nums.map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40);

console.log(newNums);

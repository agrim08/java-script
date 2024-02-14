const arr1 = [1, 2, 3, 4, 5];
// console.log(arr1[1]);

//arrays method:

// arr1.push(6);
// console.log(arr1.pop());
// console.log(arr1);

arr1.unshift(10);
// console.log(arr1); //unshift is not good for system if the size of array is very large

// console.log(arr1.includes(9));
// console.log(arr1.indexOf(9));
// console.log(arr1.indexOf(3));

const newArr = arr1.join();

// console.log(arr1);
// console.log(newArr); //type of newarr is string !!!

//slice and splice:

console.log("A", arr1);

const myArr = arr1.slice(1, 3);
console.log(myArr);
console.log("B", arr1);

const myArr2 = arr1.splice(1, 3);
console.log(myArr2);
console.log("C", arr1);

//splice manupulates original arrays !!! :)

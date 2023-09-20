//arrays are one of the data structure in js
//arrays are like lists in python

const friend = ["agrim", "ansh", "neha"];
console.log(friend);

//another way:
const years = new Array(2000, 2001, 2002);
console.log(years);

console.log(friend[0]);
console.log(friend.length);
console.log(friend.length - 1);
console.log(friend[friend.length - 1]);

//mutating array;
friend[2] = "priyanshi";
console.log(friend);

const DOB = 2023 - 2005;
const Me = ["agrim", DOB, "student"];
console.log(Me);

//exercise:
const calcage = function (birthyear) {
  return 2023 - birthyear;
};
const year2 = [1990, 1991, 1992, 2025];
console.log(calcage(year2[0]));
console.log(calcage(year2[2]));
console.log(calcage(year2[3]));

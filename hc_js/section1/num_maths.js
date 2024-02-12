const score = 100;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //make sure to use this every time...helps in precision

const otherNumber = 23.89956;
// console.log(otherNumber.toPrecision(3));

const otherNumber2 = 123.89956;
// console.log(otherNumber2.toPrecision(3));

const otherNumber3 = 1123.8966;
// console.log(otherNumber3.toPrecision(3));

//math library:

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.33));
// console.log(Math.ceil(4.1)); //4 se zara se upr bi hoga to 5 hi o/p ayega;
// console.log(Math.floor(4.9)); //4 se kitna bi upr ho o/p 4 hi ayega;
// console.log(Math.pow(2, 3));

console.log(Math.random()); //value hamesha [0,1] in b/w hogi
console.log(Math.floor(Math.random() * 10) + 1); // added 1 to avoid 0 values

//genralized formula (important):

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min) + 1) + min);

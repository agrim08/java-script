//*! Using Bind Method:
let multiply = function (x, y) {
  console.log(x * y);
};

// let multiplyByTwo = multiply.bind(this, 2);
let multiplyByTwo = multiply.bind(this, 2, 3);
multiplyByTwo(5); //*ignores this parameter

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

//*! Using Function Closure:
let clouserMultiply = function (a) {
  return function (b) {
    console.log(a * b);
  };
};

let multiplyByTwoClosure = clouserMultiply(2);
multiplyByTwoClosure(3);

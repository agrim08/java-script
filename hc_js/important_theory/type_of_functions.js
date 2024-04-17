a();
// b();

//1. function statement or function declaration:
function a() {
  console.log("a called");
}

//2. function expression:
var b = function b() {
  console.log("b called");
};

//3. Anonymous Function:
//a function without a name
// we can only create a anonymous function in function expression and not in statement
// function () {

// }
// as var b, the function has no name

//4. named function expression:
var c = function z() {
  console.log("c called");
  console.log(z); //this gives whole function c
};
c();
//z(); // o/p is z is not defined as it is not declared in global scope

//5. first class functions:
//when func are paased or returned as values.
var p = function (param1) {
  return function xyz() {};
};
console.log(p());

var q = function (param2) {
  console.log(param2);
};
function r() {}
q(r);

// var a = 100;
// function x() {
//   var a = 20;
//   console.log(a);
// }
// x();
// console.log(a);

var a = 100;
{
  var a = 20;
  console.log(a);
}
console.log(a);

// function z() {
//   var a = 100;
//   function y() {
//     console.log(a);
//   }
//*   //a = 1;
//   return y;
// }
// var b = z();
// console.log(b);
// b();

function x() {
  var a = 100;
  function z() {
    function y() {
      console.log(a);
    }
    y();
  }
  z();
}
x();

//* to print 1,2,3,4,5 after each second

function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste");
}
// x();

//*! if we have used var:
function y() {
  for (var j = 1; j <= 5; j++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(j);
  }
  console.log("Namaste");
}
y();

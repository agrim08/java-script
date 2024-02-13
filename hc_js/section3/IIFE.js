// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

(function chai() {
  //named iife
  console.log(`hey there`);
})(); //it is necessary to add ; after using IIFE to end the context.

// (() => {
//   console.log(`hey there again`);
// })();

((myName) => {
  console.log(`hey ${myName} `);
})("agrim");

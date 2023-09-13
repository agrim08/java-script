const age = "18";
if (age === 18) console.log("you just became an adult (strict)");
if (age == 18) console.log("you just became an adult (loose)");
// === don't us type coercion but == use that.
// always use ===

const fav = Number(prompt("what's your fav number?")); // by default fav is string
console.log(fav);
console.log(typeof fav);

if (fav === 7) {
  //'7' === 7  ---> false
  console.log("cool");
} else if (fav === 23) {
  console.log("23 is also a cool number");
} else {
  console.log("number is not 23 or 7");
}

if (fav !== 23) console.log("why not 23?");

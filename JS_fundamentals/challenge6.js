//data 1:
// const avgDolphin = (96 + 108 + 89) / 3;
// const avgKoalas = (88 + 91 + 110) / 3;
// console.log(avgDolphin, avgKoalas);

// if (avgDolphin > avgKoalas) {
//   console.log("team doplhin wins the trophy");
// } else if (avgDolphin < avgKoala) {
//   console.log("team koalas wins the trophy");
// } else if (avgDolphin === avgKoalas) {
//   console.log("both wins the trophy");
// }

//bonus 1:

// const avgDolphin = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 123) / 3;
// console.log(avgDolphin, avgKoalas);

// if (avgDolphin > avgKoalas && avgDolphin >= 100) {
//   console.log("team doplhin wins the trophy");
// } else if (avgDolphin < avgKoalas && avgKoalas >= 100) {
//   console.log("team koalas wins the trophy");
// } else if (avgDolphin === avgKoalas) {
//   console.log("both wins the trophy");
// }

//bonus 2 :

const avgDolphin = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 106) / 3;
console.log(avgDolphin, avgKoalas);

if (avgDolphin > avgKoalas && avgDolphin >= 100) {
  console.log("team doplhin wins the trophy");
} else if (avgDolphin < avgKoalas && avgKoalas >= 100) {
  console.log("team koalas wins the trophy");
} else if (avgDolphin === avgKoalas && avgKoalas >= 100 && avgDolphin >= 100) {
  console.log("both wins the trophy");
} else {
  console.log("no one wins the trophy");
}

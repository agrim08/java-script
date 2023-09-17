const calcAvg = (a, b, c) => (a + b + c) / 3;

const scrDolphin = calcAvg(44, 23, 71);
const scrkolas = calcAvg(49, 54, 65);
console.log(scrDolphin, scrkolas);

const chechWinner = function (avgDolphin, avgKoals) {
  if (avgDolphin >= 2 * avgKoals) {
    console.log(`Dolphins win (${avgDolphin} vs. ${avgKoals})`);
  } else if (avgKoals >= 2 * avgDolphin) {
    console.log(`koalas win (${avgKoals} vs. ${avgDolphin})`);
  } else {
    console.log("No one wins...");
  }
};
chechWinner(scrDolphin, scrkolas);

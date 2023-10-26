//finding temp amplitude:
const temps = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calctempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    const curtemp = temp[i];
    if (typeof curtemp !== "number") continue;

    if (curtemp > max) max = curtemp;
    if (curtemp < min) min = curtemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calctempAmplitude(temps);
console.log(amplitude);

//to join/merge two array we use concat method
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const array3 = array1.concat(array2);

console.log(array3);

//used to generate a transformed array out of an array

const arr = [5, 10, 20, 25];

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

function binary(x) {
  return x.toString(2);
}

const twiceArr = arr.map(double);
console.log(twiceArr);

const thriceArr = arr.map(triple);
console.log(thriceArr);

const BinaryArr = arr.map(binary);
console.log(BinaryArr);

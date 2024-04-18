const radius = [1, 2, 3, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calculate(area));
//using built-in map function:
console.log(radius.map(area));

//for circumefernce:
console.log(radius.calculate(circumference));
//using built-in map function:
console.log(radius.map(circumference));

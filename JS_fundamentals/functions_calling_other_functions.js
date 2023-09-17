function cutFruit(fruit) {
  return fruit * 4;
}

function fruitprocessor(apples, oranges) {
  const applePeices = cutFruit(apples);
  const orangePeices = cutFruit(oranges);
  const juice = `Juice with ${applePeices} peice of apples and ${orangePeices} peice of oranges.`;
  return juice;
}

console.log(fruitprocessor(2, 3));

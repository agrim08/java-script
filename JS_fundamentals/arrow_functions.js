//func expression:
const calcAge2 = function (birthyear) {
  return 2023 - birthyear;
};

//arrow function:
const calcage3 = (birthyear) => 2023 - birthyear; //dont need return
const age3 = calcage3(1991);
console.log(age3);

const retirement = (birthyear, firstname) => {
  const age = 2023 - birthyear;
  const retAge = 65 - age;
  //   return retAge;
  return `${firstname} retires in ${retAge}`;
};

console.log(retirement(1991, "Agrim"));
console.log(retirement(2005, "Ansh"));

function myName() {
  console.log("Agrim");
}
// myName();

// function addNum(num1, num2) {
//   console.log(num1 + num2);
// }
function addNum(num1, num2) {
  let res = num1 + num2;
  return res;
  // console.log("Agrim"); //this will never execute
}

// addNum(3, 4);
// addNum(3, "4");
// addNum(3, "a");
const result = addNum(3, 5);
// console.log("result:", result);

function loginUser(username = "ansh") {
  //default case ansh
  if (!username) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUser("Agrim"));
// console.log(loginUser());

//*************************************************//

function calcCartPrice(val1, val2, ...num1) {
  //rest operator
  return num1;
}

console.log(calcCartPrice(200, 300, 500, 2000));

//objects with functions:
const user = {
  username: "Agrim",
  price: 199,
};

function hadleObj(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

hadleObj(user);
//or
hadleObj({
  username: "Ansh",
  price: 199,
});

//arrays with functions:

const newArray = [200, 300, 400];

function return2ndindex(getArray) {
  return getArray[1];
}
console.log(return2ndindex(newArray));

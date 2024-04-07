// const user = {
//   username: "Agrim",
//   isLoggedIn: false,
//   age: 19,

//   //we can pass a method also:
//   getUserDetails: function () {
//     // console.log("got All details");
//     // console.log(`Username ${username}`);
//     //console.log(`Username ${this.username}`);
//     // console.log(this);
//   },
// };
// console.log(user.username);
// console.log(user.getUserDetails());
//accessing this outside current context:
// console.log(this); //empty object;

//constructor function:

function user(username, isLoggedIn, age) {
  this.username = username;
  this.isLoggedIn = isLoggedIn;
  this.age = age;
  this.greetings = function () {
    console.log(`welcome ${this.username}`);
  };

  return this;
}

// const userOne = user("Agrim", true, 19);
// const usertwo = user("Ansh", false, 19);
// console.log(userOne);

//this userTow overwrites the value of userOne hence we use new keyword

const userOne = new user("Agrim", true, 19);

const userTwo = new user("Ansh", false, 19);
console.log(userOne.constructor); //this constructor is refernce to itself
console.log(userTwo);

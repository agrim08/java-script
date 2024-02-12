// singleTon or objects using constructor:

const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "Ansh";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  fullName: {
    userFullName: {
      firstName: "Agrim",
      lastName: "Gupta",
    },
  },
};

// console.log(regularUser.fullName.userFullName.firstName);

// **********combining objects:**************

const Obj1 = { 1: "a", 2: "b" };
const Obj2 = { 3: "a", 4: "b" };
//const obj3 = {obj1, obj2};

// const Obj3 = Object.assign({}, Obj1, Obj2); //this {}empty objects sets a target for storing obj1 and obj2
// console.log(Obj3);

// const returnedObj = Object.assign(Obj1, Obj2);
// console.log(returnedObj);
// console.log(returnedObj == Obj3); //to check that o/p is same despite of not using {}

const Obj3 = { ...Obj1, ...Obj2 };
// console.log(Obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser)); //notice the datatype
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));

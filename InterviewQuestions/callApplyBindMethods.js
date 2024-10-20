let name = {
  firstName: "Agrim",
  lastName: "Gupta",
};
let printFullName = function (homeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + homeTown + "," + state
  );
};
printFullName.call(name, "rampur", "UP");
let name2 = {
  firstName: "Mamta",
  lastName: "Gupta",
};
printFullName.call(name2, "noida", "delhi");

//* We can also do this:
let name3 = {
  firstName: "Ansh",
  printHelloname: function () {
    console.log("hello", this.firstName);
  },
};
name3.printHelloname();
name3.printHelloname.call(name2);

//*! APPLY METHOD:
printFullName.apply(name, ["Rampur", "UP"]);

//*! BIND METHOD:
let printBindName = printFullName.bind(name2, "bengaluru", "Karnataka");
console.log(printBindName);
printBindName();

let user = {
  firstName: "Agrim",
  lastName: "Gupta",
};

let printMyName = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " , " +
      hometown +
      ", " +
      state +
      ", " +
      country
  );
};

let printMyName2 = printMyName.bind(user, "rampur", "Uttar Pradesh");
printMyName2("India");

Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName3 = printMyName.myBind(user, "rampur", "Uttar Pradesh");
printMyName3("India");

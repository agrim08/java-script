console.log(Object.prototype);

let obj = {
  name: "Agrim",
  method: function () {
    console.log("good morning " + this.name);
  },
};

let obj2 = {
  name: "Ansh",
};

//*! NEVER DO THIS
//* obj2.__proto__ = obj;
//* console.log(obj2.__proto__);
//* obj.method();
//* obj2.method();

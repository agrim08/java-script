const Agrim = {
  firstname: "Agrim",
  lastname: "Gupta",
  birthyear: 2005,
  job: "Student",
  friends: ["tanishq", "Sachi", "Prashant"],
  hasDl: true,

  calcAge: function (birthyear) {
    return 2023 - birthyear;
  },

  calcAge: function () {
    // console.log(this);
    return 2023 - this.birthyear;
  },
  calcAge: function () {
    this.age = 2023 - this.birthyear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstname} is a ${this.calcAge()} years old ${
      this.job
    } and he has ${this.hasDl ? "a" : "no"} driving license`;
  },
};

console.log(Agrim.calcAge());
// console.log(Agrim["calcAge"](2005));

console.log(Agrim.age);
console.log(Agrim.age);
console.log(Agrim.age);

//challenge:
console.log(Agrim.getSummary());

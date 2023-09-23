const Mark = {
  FullName: "Mark Miller",
  weight: 78,
  height: 1.69,
  calcBmi: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  FullName: "John Smith",
  weight: 92,
  height: 1.95,
  calcBmi: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

Mark.calcBmi();
john.calcBmi();

if (Mark.bmi > john.bmi) {
  console.log(
    `${Mark.FullName}'s (${Mark.bmi}) BMI is higher than ${john.FullName}'s (${john.bmi}) BMI`
  );
} else if (john.bmi > Mark.bmi) {
  console.log(
    `${john.FullName}'s (${john.bmi}) BMI is higher than ${Mark.FullName}'s (${Mark.bmi}) BMI`
  );
} else {
  console.log("hii");
}

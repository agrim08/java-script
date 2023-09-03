const wMark = 78;
const hMark = 1.69;
const BMImark = wMark / (hMark * 2);
console.log(Math.round(BMImark));

const wjohn = 92;
const hjohn = 1.95;
const BMIjohn = wjohn / (hjohn * 2);
console.log(Math.round(BMIjohn));

const markHigherBMI = BMImark > BMIjohn;
console.log(markHigherBMI);

if (BMImark > BMIjohn) {
  console.log("Mark's BMI is higher than John's !");
} else {
  console.log("John's BMI is higher than Marks's !");
}
const higher = `Joh's BMI ${BMIjohn} is higher than Mark's ${BMImark}`;
console.log(higher);

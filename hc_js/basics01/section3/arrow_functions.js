// this keyword:
//this returns the current context

const user = {
  userName: "Agrim",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.userName} , welcome to my course`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.userName = "Ansh";
// user.welcomeMessage();
// console.log(this); //try running this in browser console | browser mai current context windows hota h | important

// function one() {
//   console.log(this);
// }
// one();

//****************arrow function:******************

const calcage3 = (birthyear) => 2023 - birthyear; //dont need return for single line !
const age3 = calcage3(1991);
console.log(age3);

const userName = () => ({ myName: "Agrim" });
console.log(userName());

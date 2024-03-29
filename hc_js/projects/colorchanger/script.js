const buttons = document.querySelectorAll(".button");
const body = document.querySelector("bdoy");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", function (event) {
    // event is a variable
    console.log(event);
    console.log(event.target);
    if (event.target.id === "grey") {
      document.querySelector(".body").style.backgroundColor = event.target.id;
    }
    if (event.target.id === "white") {
      document.querySelector(".body").style.backgroundColor = event.target.id;
    }
    if (event.target.id === "yellow") {
      document.querySelector(".body").style.backgroundColor = event.target.id;
    }
    if (event.target.id === "blue") {
      document.querySelector(".body").style.backgroundColor = event.target.id;
    }
    if (event.target.id === "purple") {
      document.querySelector(".body").style.backgroundColor = event.target.id;
    }
  });
});

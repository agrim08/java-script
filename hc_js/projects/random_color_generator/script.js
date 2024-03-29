// generator a random color:

const randomColor = function () {
  const HexCode = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += HexCode[Math.floor(Math.random() * 16)];
  }
  return color;
};

let ColorID;

const startChangingClr = function () {
  console.log("Hii");
  const changeBgColor = function () {
    document.body.style.backgroundColor = randomColor();
  };
  ColorID = setInterval(changeBgColor, 1000);
};

const stopChangingClr = function () {
  clearInterval(ColorID);
  ColorID = null;
};

document
  .querySelector("#start")
  .addEventListener("click", startChangingClr, false);
document
  .querySelector("#stop")
  .addEventListener("click", stopChangingClr, false);

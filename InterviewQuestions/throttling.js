//* RUN IN BROWSER CONSOLE

const expensive = () => {
  console.log("throttled func");
};

const throttled = (func, limit) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;

    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterExpensive = throttled(expensive, 1000);
document.addEventListener("resize", betterExpensive);

const normalfunc = () => {
  console.log("normal");
};
document.addEventListener("reset", normalfunc);

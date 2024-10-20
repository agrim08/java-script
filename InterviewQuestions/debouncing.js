const getData = () => {
  console.log("fetching api");
};

const debouncing = function (func, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData(context, args);
    }, delay);
  };
};

const betterFunc = debouncing(getData, 1000);

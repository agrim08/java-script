//used for arrays:

const coding = ["js", "py", "cpp"];
coding.forEach(function (item) {
  //   console.log(item);
});

coding.forEach((item) => {
  //can use arrow function
  //   console.log(item);
});

//passing another function in foreach:

const printMe = (item) => {
  //   console.log(item);
};
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

//*****************************************************************//

//important:

const myCoding = [
  {
    languageName: "javascript",
    fileName: "JS",
  },
  {
    languageName: "Python",
    fileName: "py",
  },
  {
    languageName: "Java",
    fileName: "java",
  },
];

myCoding.forEach((item) => {
  console.log(item.fileName);
});

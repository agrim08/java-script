document.getElementById("grandparent").addEventListener(
  "click",
  () => {
    console.log("Grand parent Clicked");
  },
  true
);

document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent Clicked");
  },
  true
);

document.getElementById("child").addEventListener(
  "click",
  (e) => {
    console.log("Child Clicked");
    e.stopPropagation();
  },
  true
);
//* true for CAPTURING and false for BUBBLING

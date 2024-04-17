function countButton() {
  let count = 0;
  document.querySelector("#clickMe").addEventListener("click", () => {
    console.log("button clicked", ++count);
  });
}
countButton();

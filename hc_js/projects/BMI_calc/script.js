const form = document.querySelector("form");
//this usecase will give empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);

    //result:

    result.innerHTML = `<span>${BMI}</span>`;
    if (BMI < 18.6) {
      guide.innerHTML = `<span> underWeight </span>`;
    } else if (18.6 < BMI < 24.9) {
      guide.innerHTML = `Normal`;
    } else if (BMI > 24.9) {
      guide.innerHTML = `overWeight`;
    }
  }
});

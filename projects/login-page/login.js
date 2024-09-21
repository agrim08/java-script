let userObj = {};

function onNameChange(e) {
  userObj["name"] = e;
}
function onEmailChange(e) {
  userObj["email"] = e;
}
function onPasswordChange(e) {
  userObj["password"] = e;
}
const login = () => {
  const obj = JSON.parse(localStorage.getItem("user"));

  if (!userObj.name && !userObj.email && !userObj.password) {
    alert("Please fill the required details");
    return;
  } else {
    if (obj) {
      if (obj.email === userObj.email) {
        if (obj.password === userObj.password && obj.name === userObj.name) {
          //redirect to todo

          window.location.href = "../list/index.html";
          return;
        } else {
          alert("wrong password or username");
          return;
        }
      } else {
        localStorage.setItem("user", JSON.stringify(userObj));
        //redirect to todo

        window.location.href = "../list/index.html";
        return;
      }
    } else {
      localStorage.setItem("user", JSON.stringify(userObj));
      //redirect to todo
      window.location.href = "../list/index.html";
      return;
    }
  }
};

document.querySelector(".btn").addEventListener("click", login);

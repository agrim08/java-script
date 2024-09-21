let userInput = "";

const createNewTask = function (value) {
  const checkInput = document.querySelector("input");
  if (checkInput == null) {
    const inputElement = document
      .querySelector(".addNew")
      .appendChild(document.createElement("input"));
    inputElement.placeholder = "Enter new Task";
    inputElement.className = "inputText";
    inputElement.select();
    inputElement.value = value;
    // inputElement.onchange = storeInput;

    document
      .querySelector(".inputText")
      .addEventListener("keypress", enterText, false);
  } else {
    alert("please save the previous task");
  }
};
document
  .querySelector(".taskImg")
  .addEventListener("click", () => createNewTask(""));

const enterText = function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    const divName = document
      .querySelector(".addNew")
      .appendChild(document.createElement("div"));
    divName.className = "new-task2";
    const text = divName.appendChild(document.createElement("div"));
    text.className = "new-task-text";
    const storedText = document.querySelector(".inputText").value;
    text.innerHTML += storedText;

    //adding images:
    const editButtons = divName.appendChild(document.createElement("img"));
    editButtons.className = "taskImg";
    editButtons.id = "editButton";
    editButtons.src = "../resource/icons8-edit-50.png";
    editButtons.onclick = () => {
      createNewTask(storedText);
      divName.remove();
    };

    const deleteButtons = divName.appendChild(document.createElement("img"));
    deleteButtons.className = "taskImg";
    deleteButtons.id = "deleteButton";
    deleteButtons.src = "../resource/icons8-delete-48.png";
    deleteButtons.onclick = function () {
      //remember this
      divName.remove();
    };

    //removing input feild:
    const removeInput = document.querySelector(".inputText");
    removeInput.remove();
  }
};

document.querySelector(".clear").addEventListener("click", () => {
  const removeAll = document.querySelectorAll(".new-task2");
  let my_arr = Array.from(removeAll);
  for (const elem of my_arr) {
    elem.parentNode.removeChild(elem);
  }
});

document.querySelector(".logout").addEventListener("click", doMyTask);

function doMyTask() {
  localStorage.clear();
  window.location.href = "../home-page/index.html";
}

function getUserName() {
  let userName = JSON.parse(localStorage.getItem("user")).name;
  let div = document
    .querySelector(".hello")
    .appendChild(document.createElement("h2"));
  div.innerHTML = `Hello, ${userName}`;
  div.className = "Hello-User";
}

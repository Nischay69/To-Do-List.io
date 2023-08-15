const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const addButton = document.querySelector(".list-add-button");

const showData = () => {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();

const addTask = () => {
  if (inputBox.value == "") {
    alert("You must Write Something");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
}

const handleCheck = (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}

listContainer.addEventListener("click", handleCheck);
addButton.addEventListener("click", addTask);
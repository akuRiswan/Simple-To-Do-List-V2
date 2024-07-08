const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedTask = document.getElementById("completed-task-container");
const addButton = document.getElementById("addButton");

inputBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addButton.click();
  }
});

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something1");
  } else {
    const time = new Date().toDateString();

    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let breakLine = document.createElement("p");
    breakLine.innerHTML = time;
    li.appendChild(breakLine);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      if (!e.target.classList.contains("")) {
        completedTask.appendChild(e.target);
      }
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

completedTask.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      if (!e.target.classList.contains("checked")) {
        listContainer.appendChild(e.target);
      }
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// Local Storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
  localStorage.setItem("completedData", completedTask.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  completedTask.innerHTML = localStorage.getItem("completedData");
}
showTask();

const inputBox = document.getElementById("input-box");
const uncompletedTask = document.getElementById("list-uncompleted");
const completedTask = document.getElementById("list-completed");
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
    uncompletedTask.appendChild(li);

    let circleIcon = document.createElement("i");
    circleIcon.classList.add("bi-circle");
    li.appendChild(circleIcon);

    let dTime = document.createElement("p");
    dTime.innerHTML = time;
    li.appendChild(dTime);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

uncompletedTask.addEventListener(
  "click",
  function (e) {
    if (e.target.classList.contains("bi-circle")) {
      e.target.classList.remove("bi-circle");
      e.target.classList.add("bi-check-circle-fill");

      if (!e.target.classList.contains("bi-circle")) {
        completedTask.appendChild(e.target.parentElement);
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
    if (e.target.classList.contains("bi-check-circle-fill")) {
      e.target.classList.remove("bi-check-circle-fill");
      e.target.classList.add("bi-circle");
      if (!e.target.classList.contains("bi-check-circle-fill")) {
        uncompletedTask.appendChild(e.target.parentElement);
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
  localStorage.setItem("data", uncompletedTask.innerHTML);
  localStorage.setItem("completedData", completedTask.innerHTML);
}
function showTask() {
  uncompletedTask.innerHTML = localStorage.getItem("data");
  completedTask.innerHTML = localStorage.getItem("completedData");
}
showTask();

import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";

createApp(App).mount("#app");

//Untuk mengambil data dari local storage
const inputField = document.querySelector(".input-field textarea"),
  todoLists = document.querySelector(".todoLists"),
  pendingNum = document.querySelector(".pending-num"),
  clearButton = document.querySelector(".clear-button");

//untuk mengambilkan data dar inputan
function allTasks() {
  let tasks = document.querySelectorAll(".pending");

  pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

  let allLists = document.querySelectorAll(".list");
  if (allLists.length > 0) {
    todoLists.style.marginTop = "20px";
    clearButton.style.pointerEvents = "auto";
    return;
  }
  todoLists.style.marginTop = "0px";
  clearButton.style.pointerEvents = "none";
}

inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim();

  //untuk fungsi ceklis
  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = document.createElement("li");
    liTag.className = "list pending";
    liTag.innerHTML = `
      <input type="checkbox" />
      <span class="task">${inputVal}</span>
      <i class="uil uil-trash"></i>
    `;

    liTag.addEventListener("click", handleStatus);
    liTag.querySelector("i").addEventListener("click", deleteTask);

    todoLists.appendChild(liTag);
    inputField.value = "";
    allTasks();
  }
});

function handleStatus(e) {
  const checkbox = this.querySelector("input");
  checkbox.checked = checkbox.checked ? false : true;
  this.classList.toggle("pending");
  allTasks();
}

//untuk menghapus
function deleteTask(e) {
  this.parentElement.remove();
  allTasks();
}

//untuk mengclear semua task
clearButton.addEventListener("click", () => {
  todoLists.innerHTML = "";
  allTasks();
});

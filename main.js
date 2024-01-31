// selecting input and "add" buttn
const enterTaskInpt = document.querySelector("#task-input");
const addTaskBttn = document.querySelector("#add-task");
const task = document.querySelectorAll(".task");
const tasksContainer = document.querySelector(".tasks-container");
const errorMsg = document.querySelector(".error");
function Task() {
  this.name = enterTaskInpt.value;
  this.timeLine = null;
}

const currentTask = [];
const tasksArr = [];

addTaskBttn.addEventListener("click", () => {
  if (!enterTaskInpt.value) {
    errorMsg.classList.add("active");
  } else {
    errorMsg.classList.remove("active");
    const task = new Task();
    currentTask.push(task);
    tasksArr.push(task);
    enterTaskInpt.value = "";

    const taskName = currentTask[0].name;
    tasksContainer.style.display = "flex";
    tasksContainer.innerHTML += `<div class="task"> 
            <button class="task-name">${taskName}</button>
    
            <button class="delete-button">
                <span class="material-symbols-outlined "> delete </span>
            </button>
        </div>`;

    currentTask.splice(0, 1);

    const taskNameButton = tasksContainer.querySelectorAll(".task-name");

    taskNameButton.forEach((nameButton) => {
      nameButton.addEventListener("click", () => {
        nameButton.classList.toggle("task-checked");
      });
    });

    const taskDeleteButton = tasksContainer.querySelectorAll(".delete-button");

    taskDeleteButton.forEach((deleteButton) => {
      deleteButton.addEventListener("click", () => {
        const taskToBeRemoved = deleteButton.closest(".task");
        taskToBeRemoved.remove();

        const index = Array.from(tasksContainer.children).indexOf(
          taskToBeRemoved
        );

        tasksArr.splice(index, 1);

        if (tasksArr.length === 0) {
          tasksContainer.style.display = "none";
        } else {
          tasksContainer.style.display = "flex";
        }
      });
    });
  }
});

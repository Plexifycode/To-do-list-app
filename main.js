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

const toBeAdded = [];
const tasksArr = [];

addTaskBttn.addEventListener("click", () => {
  if (!enterTaskInpt.value) {
    errorMsg.classList.add("active");
  } else {
    errorMsg.classList.remove("active");
    const task = new Task();
    toBeAdded.push(task);
    tasksArr.push(task);

    enterTaskInpt.value = "";

    const taskName = toBeAdded[0].name;

    tasksContainer.innerHTML += `<div class="task"> 
            <p>${taskName}</p>
    
            <button>
                <span class="material-symbols-outlined"> delete </span>
            </button>
        </div>`;

    tasksContainer.style.display = "flex";

    document.querySelectorAll(".task").forEach((task) => {
      const taskName = task.querySelector("p");
      taskName.addEventListener("click", () => {
        taskName.classList.toggle("task-checked");
      });

      const deleteTaskBttn = task.querySelector("button");
      deleteTaskBttn.addEventListener("click", () => {
        task.remove();
      });

      if (tasksArr.length === 0) {
        tasksContainer.style.display = "none";
      } else {
        tasksContainer.style.display = "flex";
      }
    });

    tasksArr.splice(0, 1);
  }
});

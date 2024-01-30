// selecting input and "add" buttn
const enterTaskInpt = document.querySelector("#task-input");
const addTaskBttn = document.querySelector("#add-task");

const tasksContainer = document.querySelector(".tasks-container");
console.log(tasksContainer, enterTaskInpt);

function Task() {
  this.name = enterTaskInpt.value;
  this.timeLine = null;
}

const taskArr = [];

addTaskBttn.addEventListener("click", () => {
  const task = new Task();
  taskArr.push(task);

  enterTaskInpt.value = "";

  for (let i = 0; i < taskArr.length; i++) {
    const taskName = taskArr[i].name;

    tasksContainer.innerHTML += `<div class="task"> 
        <p>${taskName}</p>

        <button>
            <span class="material-symbols-outlined"> delete </span>
        </button>
    </div>`;

    taskArr.splice(i, 1);
  }
});

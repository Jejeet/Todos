const AddItem = document.getElementById("newItemInput");
const submitItem = document.getElementById("new-task-input");

const tasks = document.getElementById("tasks");

const todos = [];

const UI = (arr) => {
  let html = "";
  arr.forEach((todo) => {
    html += `
    <div id="task">
    <div class="content">
      <p class="text"> ${todo.title}</p>
      <!-- <input type="text" class="text" value="my task" /> -->
    </div>
    <div class="actions">
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </div>
  </div>`;
  });
  tasks.innerHTML = html;
};

UI(todos);
console.log(todos);

submitItem.addEventListener("click", (e) => {
  e.preventDefault();

  if(AddItem.value !== " "){
    let currentTodo = {
      title: AddItem.value,
      id: Date.now(),
      isComplete: false,
    };
  
    todos.unshift(currentTodo);
    console.log(todos);
  
    UI(todos);
  
    //clear input box after submitting
    AddItem.value = " ";

  }
});
console.log(todos);

const AddItem = document.getElementById("newItemInput");
const submitItem = document.getElementById("new-task-input");

const tasks = document.getElementById("tasks");

const todos= []

const UI = (arr) => {
let html = ""
arr.forEach(todo => {
    html +=`
    <div id="task">
    <div class="content">
      <p class="text"> my task</p>
      <!-- <input type="text" class="text" value="my task" /> -->
    </div>
    <div class="actions">
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </div>
  </div>`

});
tasks.innerHTML = html;
};
UI(todos);

submitItem.addEventListener('click', (e)=> {
e.preventDefault()

 const AddItem2 = AddItem.value

 const displayItem = document.querySelector('.text')
console.log(displayItem);

    console.log(AddItem2)
    todos.unshift(AddItem2)
    console.log(todos)
    displayItem.innerText += AddItem2
    console.log(displayItem);
}) 
console.log(todos)
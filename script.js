// Load from localStorage or initialize empty array
const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

// Initial render
rendertodoList();

function rendertodoList() {
  let todoListHTML = '';

  todoList.forEach(function(todoObject,index) {
    const html = `
      <div class="display-content">${todoObject.name}</div>
      <div class="display-content">${todoObject.dueDate}</div> 
      <button class="dlt-btn js-delete-btn">Delete</button>
    `;

    todoListHTML += html;
  });
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  
  document.querySelectorAll('.js-delete-btn').forEach((deleteButton, index) => {
  deleteButton.addEventListener('click', () => {
    deleteTodo(index);
  });
});
}

document.querySelector('.js-to-do-button').addEventListener('click', () => {
  AddtoMyArray();
});

// Add new task
function AddtoMyArray() {
  const inputElementName = document.querySelector('.js-input');
  const inputElementDate = document.querySelector('.js-input-date');

  const name = inputElementName.value;
  const dueDate = inputElementDate.value;

  if (!name || !dueDate) {
    alert('Please enter both task and date');
    return;
  }

  todoList.push({ name, dueDate });

  // Save to localStorage
  localStorage.setItem('todoList', JSON.stringify(todoList));

  // Clear inputs
  inputElementName.value = '';
  inputElementDate.value = '';

  rendertodoList();
}

/*document.querySelectorAll('.js-delete-btn').forEach((deleteButton, index) => {
  deleteButton.addEventListener('click', () => {
    deleteTodo(index);
  });
});*/

// Delete task
function deleteTodo(index) {
  todoList.splice(index, 1);

  // Update localStorage
  localStorage.setItem('todoList', JSON.stringify(todoList));

  rendertodoList();
}

// Add with Enter key
function todoListEnter(event) {
  if (event.key === 'Enter') {
    AddtoMyArray();
  }
}
document.addEventListener('DOMContentLoaded', loadTodos);

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const showFirstTenButton = document.getElementById('show-first-ten');

// Añadir evento para agregar tareas
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo(input.value);
  input.value = '';
});

// Evento para mostrar las primeras 10 tareas
showFirstTenButton.addEventListener('click', showFirstTenTodos);

// Función para cargar tareas desde Local Storage
function loadTodos() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.forEach((todo) => {
    renderTodo(todo);
  });
}

// Función para añadir una nueva tarea
function addTodo(task) {
  const todo = {
    text: task,
    completed: false
  };
  renderTodo(todo);
  saveTodoToLocalStorage(todo);
}

// Función para mostrar la tarea en la lista
function renderTodo(todo) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
    <div>
      <button class="complete-btn">✔</button>
      <button class="delete-btn">✖</button>
    </div>
  `;

  // Evento para marcar tarea como completada
  li.querySelector('.complete-btn').addEventListener('click', () => {
    todo.completed = !todo.completed;
    li.querySelector('span').classList.toggle('completed');
    updateLocalStorage();
  });

  // Evento para eliminar tarea
  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
    deleteTodoFromLocalStorage(todo);
  });

  todoList.appendChild(li);
}

// Función para guardar tareas en Local Storage
function saveTodoToLocalStorage(todo) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Función para actualizar el estado de las tareas en Local Storage
function updateLocalStorage() {
  const todos = [];
  document.querySelectorAll('li').forEach((li) => {
    todos.push({
      text: li.querySelector('span').textContent,
      completed: li.querySelector('span').classList.contains('completed')
    });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Función para eliminar tarea de Local Storage
function deleteTodoFromLocalStorage(todoToDelete) {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos = todos.filter((todo) => todo.text !== todoToDelete.text);
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Función para mostrar las primeras 10 tareas
function showFirstTenTodos() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todoList.innerHTML = ''; // Limpiar la lista actual
  const firstTenTodos = todos.slice(0, 10); // Seleccionar las primeras 10
  firstTenTodos.forEach((todo) => {
    renderTodo(todo);
  });
}

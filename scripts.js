document.addEventListener('DOMContentLoaded', function () {
    fetchTodos();
});

function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            const todoList = document.getElementById('todoList');
            data.forEach(todo => {
                const todoItem = createTodoItem(todo);
                todoList.appendChild(todoItem);
            });
        })
        .catch(error => console.error('Error fetching todos:', error));
}

function createTodoItem(todo) {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.disabled = true;
    checkbox.checked = todo.completed;
    
  const userId = document.createElement('label');
    userId.textContent = todo.userId+"      ";

    todoItem.appendChild(checkbox);
    todoItem.appendChild(userId);
  
    const label = document.createElement('label');
    label.textContent = todo.title;

    todoItem.appendChild(checkbox);
    todoItem.appendChild(label);

    return todoItem;
}
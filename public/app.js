async function fetchTodos() {
    const response = await fetch('/todos');
    const todos = await response.json();
    const list = document.getElementById('todoList');
    list.innerHTML = ''; // Clear current todos
    todos.forEach(todo => {
        const item = document.createElement('li');
        item.textContent = todo.task;
        list.appendChild(item);
    });
}

async function addTodo() {
    const input = document.getElementById('todoInput');
    const task = input.value;
    if (task) {
        await fetch('/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ task }),
        });
        input.value = ''; // Clear input
        fetchTodos(); // Refresh the list
    }
}

fetchTodos(); // Initial fetch

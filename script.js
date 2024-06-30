document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask(input.value);
        input.value = '';
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(removeButton);
        todoList.appendChild(li);
    }
});
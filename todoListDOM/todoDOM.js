const task = document.getElementById('taskInput');
const button = document.getElementById('addTaskButton');
const list = document.getElementById('taskList');

button.addEventListener('click', () => {
const fragment = document.createDocumentFragment();

for (let i = 0; i < 5; i++) {
const li = document.createElement('li');
li.textContent = 'Item ' + (list.children.length + i + 1);
fragment.appendChild(li);
}

list.appendChild(fragment); // Batch update
});


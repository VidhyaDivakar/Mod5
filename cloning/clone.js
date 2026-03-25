const template = document.getElementById('template');
const container = document.getElementById('card-container');
const cloneButton = document.getElementById('clone-card');

cloneButton.addEventListener('click', () => {
const clonedCard = template.cloneNode(true); // Deep clone
clonedCard.style.display = 'block';
container.appendChild(clonedCard);
});

const content = document.getElementById('content');
const replaceButton = document.getElementById('replace-btn');

replaceButton.addEventListener('click', () => {
    const newContent = document.createElement('div');
    newContent.textContent = "This is the new content";
    content.replaceWith(newContent);
});


const list = document.getElementById('list');

list.addEventListener('click', (event) => {
if (event.target.classList.contains('remove')) {
const item = event.target.closest('li');
item.remove(); // Efficient removal
}
});
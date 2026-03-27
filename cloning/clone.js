const template = document.getElementById('template');
const container = document.getElementById('card-container');
const cloneButton = document.getElementById('clone-card');

cloneButton.addEventListener('click', () => {
const clonedCard = template.cloneNode(true); // Deep clone true means deep clone: it copies the element and all its child elements.
clonedCard.style.display = 'block'; // before the card was hidden, now using block is a CSS display value. It takes full width; It starts on a new line
container.appendChild(clonedCard); // “Put this new card inside this container”
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

// cloneButton.addEventListener('click', ()=>{
// const clonedCard = template.cloneNode(true);
// clonedCard.style.display = 'block';
// container.appendChild(  ClonedCard);
// });
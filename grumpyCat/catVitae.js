let listSkills = document.getElementById("listSkills");
let container = document.getElementById("container");

listSkills.addEventListener('click', handleClick)


function handleClick() {
    listSkills.style.color = "Green";
    console.log()
}


container.addEventListener('click', () => {
    handleUl();
});

function handleUl() {
    container.style.backgroundColor = 'gray';
    console.log(container.style.backgroundColor);
};

container.addEventListener('click', () => {

    container.classList.toggle("font");
    console.log(container.style.backgroundColor);

});
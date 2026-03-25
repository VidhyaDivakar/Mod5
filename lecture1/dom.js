
let input = document.getElementById("inputbox");
//let form = document.querySelector("form");
let list = document.querySelector("ul");
let body = document.querySelector('body');

//form logic
//orm.addEventListerner('submit',)

// helper Functions
function handleSubmit(event) {
    // prevent the default action of a element (forms default action is to refresh page)
    event.preventDefault();
    console.log(event)
}

//list logic
list.addEventListener('click', handleClick);

function handleClick(e){
    e.target.classList.toggle("strick");
}


let frag = document.createDocumentFragment();
let header = document.createElement("h1");

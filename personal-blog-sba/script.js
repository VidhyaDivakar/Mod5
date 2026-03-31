console.log("This blog site is connected");

// add const variable for the input, submit fields/button, errors
const form = document.getElementById("postForm");
const title = document.getElementById("title");
const content = document.getElementById("content");
const addPost = document.getElementById("addPost");

const titleError = document.getElementById("titleError");
const contentError = document.getElementById("contentError");

// adding event listenrs for the input elements

title.addEventListener("input", handleAdd);
content.addEventListener("input", handleTextContent);
//title.addEventListener("input", handleAdd){
function handleAdd(event) {
    if (title.value.trim() === "") {
        titleError.textContent = "Enter the title of the post";
    } else {
        titleError.textContent = "";
    }
}

function handleTextContent(event) {
    if (content.value.trim() === "") {
        contentError.textContent = "Enter the content of the post";
    } else {
        contentError.textContent = "";
    }
}

// Function to Add Posts to the page
form.addEventListener("submit", function (event) {
    handleAdd();
    handleTextContent();
    if (
        titleError.textContent === "" &&
        contentError.textContent === ""
    ) {
        alert("Post Successfully Added!");
        handleSave(); // calling Save function
        form.reset();
    }
    else {
        if (titleError.textContent) title.focus();
        else if (contentError.textContent) content.focus();
    }
    console.log("submit triggered");
    console.log("validation passed");
});

function handleSave() {
    const postDiv = document.createElement("div"); // creating a div element to hold the post
    postDiv.classList.add("post"); // this n the previous line are the main post container div.
    const postTitle = document.createElement("h2");
    postTitle.textContent = title.value;
    const postContent = document.createElement("p");
    postContent.textContent = content.value;
    postDiv.appendChild(postTitle);
    postDiv.appendChild(postContent);
    document.getElementById("postsContainer").appendChild(postDiv);

   
    localStorage.setItem("postData", JSON.stringify(postData));
}


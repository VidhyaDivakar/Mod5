console.log("This blog site is connected");

// add const variable for the input, submit fields/button, errors
const form = document.getElementById("postForm");
const title = document.getElementById("title");
const content = document.getElementById("content");
const addPost = document.getElementById("addPost");

const titleError = document.getElementById("titleError");
const contentError = document.getElementById("contentError");

// To load posts on refresh
document.addEventListener("DOMContentLoaded", function () {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.forEach(post => {
        renderPosts(post);
    });
});
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
    event.preventDefault();
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

let editPostIndex = -1; //
function handleSave() {
    const newPost = {
        title: title.value,
        content: content.value
    };
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    if (editIndex === -1) {
        posts.push(newPost);
    } else {
        posts[editPostIndex] = newPost;
        editPostIndex = -1; // reset the index after editing
    }
    //posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));
    renderAllPosts();
}

function renderAllPosts() {
    const postsContainer = document.getElementById("postsContainer");
    postsContainer.innerHTML = ""; // clear old UI

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.forEach((post, index) => {
        renderPost(post, index);
    });
}

function renderPost(post, index) {
    const postDiv = document.createElement("div"); // creating a div element to hold the post
    postDiv.classList.add("post"); // this n the previous line are the main post container div. "Add the class 'post' to this div so CSS styling applies" JS (classList) → adds/removes those classes dynamically

    const postTitle = document.createElement("h1");
    postTitle.textContent = post.title;

    const postContent = document.createElement("p");
    postContent.textContent = post.content;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", function () {
        handleEdit(index);
    });
    postDiv.appendChild(postTitle);
    postDiv.appendChild(postContent);
    postDiv.appendChild(editBtn);
    document.getElementById("postsContainer").appendChild(postDiv);


    //localStorage.setItem("postData", JSON.stringify(postData));
}


console.log("This blog site is connected");

// add const variable for the input, submit fields/button, errors
const form = document.getElementById("postForm");
const title = document.getElementById("title");
const content = document.getElementById("content");
const addPost = document.getElementById("addPost");

const titleError = document.getElementById("titleError");
const contentError = document.getElementById("contentError");

let editPostIndex = -1; //

// To load posts on refresh
document.addEventListener("DOMContentLoaded", function () {
    // let posts = JSON.parse(localStorage.getItem("posts")) || [];

    renderAllPosts();
});

// adding event listenrs for the input elements

title.addEventListener("input", handleAdd);
content.addEventListener("input", handleTextContent);
function handleAdd(event) {
    if (title.value.trim() === "") {
        titleError.textContent = "Enter the title of the post";
        return false;
    } else {
        titleError.textContent = "";
        return true;
    }
}

function handleTextContent(event) {
    if (content.value.trim() === "") {
        contentError.textContent = "Enter the content of the post";
        return false;
    } else {
        contentError.textContent = "";
        return true;
    }
}

// Function to Add Posts to the page
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log("Submit clicked");

//     handleAdd();
//     handleTextContent();
//     if (title.value.trim() !== "" && content.value.trim() !== "") {
//         alert("Post Successfully Added!");
//         //handleSave(); // calling Save function
//         form.reset();
//     }
//     else {
//         if (titleError.textContent) title.focus();
//         else if (contentError.textContent) content.focus();
//     }

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Submit clicked");

    // Validate inputs
    const isTitleValid = handleAdd();
    const isContentValid = handleTextContent();

    if (isTitleValid && isContentValid) {
        handleSave(); // calling Save function

        if (editPostIndex === -1) {
            alert("Post Successfully Added!");
        } else {
            alert("Post Successfully Updated!");
        }

        form.reset();
        titleError.textContent = "";
        contentError.textContent = "";
    } else {
        if (!isTitleValid) title.focus();
        else if (!isContentValid) content.focus();
    }
    console.log("submit triggered");
    console.log("validation passed");
});


function handleSave() {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    if (editPostIndex === -1) {
        const newPost = {
            id: Date.now(),
            title: title.value.trim(),
            content: content.value.trim(),
            timestamp: new Date().toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        posts.push(newPost);
        console.log("New post added:", newPost);

    } else {
        const originalId = posts[editPostIndex].id;
        posts[editPostIndex] = {
            id: originalId,
            title: title.value.trim(),
            content: content.value.trim(),
            timestamp: new Date().toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        console.log("Post updated:", posts[editPostIndex]);
        editPostIndex = -1; // reset the index after editing
        addPost.textContent = "Add Post"; // 
    }
    //posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));
    console.log("Posts saved to localStorage:", posts);
    renderAllPosts();
}

function handleEdit(index) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    title.value = posts[index].title;
    content.value = posts[index].content;

    editPostIndex = index;
    addPost.textContent = "Update Post"; // change button text to indicate editing
    title.focus();
    titleError.textContent = "";
    contentError.textContent = "";

    console.log("Editing post at index:", index);
}

function handleDelete(index) {
    if (confirm("Are you sure you want to delete this post?")) {
        let posts = JSON.parse(localStorage.getItem("posts")) || [];

        posts.splice(index, 1);
        localStorage.setItem("posts", JSON.stringify(posts));
        renderAllPosts();

        if (editPostIndex === index) {
            editPostIndex = -1;
            addPost.textContent = "Add Post";
            form.reset();
        } else if (editPostIndex > index) {
            editPostIndex--;
        }
        alert("Post deleted successfully!");
        console.log("Post deleted. Remaining posts:", posts);
    }
}

function renderAllPosts() {
    const postsContainer = document.getElementById("postsContainer");
    postsContainer.innerHTML = ""; // clear old UI

    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    console.log("Rendering posts:", posts);
    if (posts.length === 0) {
        postsContainer.innerHTML = "<p class='no-posts'>No posts yet. Create your first post!</p>";
        return;
    }

    posts.slice().reverse().forEach((post, reversedIndex) => {
        const actualIndex = posts.length - 1 - reversedIndex;
        renderPost(post, actualIndex);
    });
}

function renderPost(post, index) {
    const postDiv = document.createElement("div"); // creating a div element to hold the post
    postDiv.classList.add("post"); // this n the previous line are the main post container div. "Add the class 'post' to this div so CSS styling applies" JS (classList) → adds/removes those classes dynamically
    postDiv.setAttribute("data-id", post.id);

    const postTitle = document.createElement("h1");
    postTitle.textContent = post.title;

    const postContent = document.createElement("p");
    postContent.textContent = post.content;

    const postTimestamp = document.createElement("small");
    postTimestamp.classList.add("timestamp");
    postTimestamp.textContent = post.timestamp ? `Posted on: ${post.timestamp}` : "Posted on: Unknown";

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    editBtn.addEventListener("click", function (e) {
        e.preventDefault();
        handleEdit(index);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function (e) {
        e.preventDefault();
        handleDelete(index);
    });
    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deleteBtn);
    postDiv.appendChild(postTitle);
    postDiv.appendChild(postContent);
    postDiv.appendChild(postTimestamp);
    postDiv.appendChild(buttonContainer);

    document.getElementById("postsContainer").appendChild(postDiv);
}

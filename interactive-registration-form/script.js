// form elements 
const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submit = document.getElementById("button");

// to display error messages, creating constant variables for the elements
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Function to Auto-load data on page refresh
window.addEventListener("DOMContentLoaded", handleLoad);

function handleLoad() {
    const storedData = JSON.parse(localStorage.getItem("userData")); // user data is parsed to JS object

    if (storedData) {
        username.value = storedData.username || "";
        email.value = storedData.email || "";
        password.value = storedData.password || "";
        confirmPassword.value = storedData.password || "";
    }
}

//add event listeners along with validationg functions
username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassword);

form.addEventListener("submit", function (event) { //Click, keyword press enter both works. validation is done in submit. these are not covered in click keyword
    event.preventDefault(); // to prevent default reload one click submit button


    // calling all the vaidation funcitions again
    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    // checking if all the const variables created for errors are empty   
    if (
        usernameError.textContent === "" &&
        emailError.textContent === "" &&
        passwordError.textContent === "" &&
        confirmPasswordError.textContent === ""
    ) {
        alert("Form submitted!");
        handleSave(); // calling Save function
        form.reset();
    }
    else {
        if (usernameError.textContent) username.focus(); // to move curse to the first error field
        else if (emailError.textContent) email.focus();
        else if (passwordError.textContent) password.focus();
        else confirmPassword.focus();
    }
    console.log("submit triggered");
    console.log("validation passed");
});

// Functions to Validate 
function validateUsername() {
    if (username.validity.valueMissing) {
        usernameError.textContent = "Username is required";
    } else if (username.value.length < 5) {
        usernameError.textContent = "Username must be atleast 5 characters";
    } else {
        usernameError.textContent = "";
    }
}
function validateEmail() {
    if (email.validity.valueMissing) {
        emailError.textContent = "Email is required";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Enter a valid email";
    } else {
        emailError.textContent = "";
    }
}
function validatePassword() {
    if (password.validity.valueMissing) {
        passwordError.textContent = "Password is required";
    } else if (password.value.length < 6) {
        passwordError.textContent = "Password must be atleast 6 characters";
    } else {
        passwordError.textContent = "";
    }
}
function validateConfirmPassword() {
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match";
    } else {
        confirmPasswordError.textContent = "";
    }
}
// add local storage flow -> Page loads ,JS waits for DOM to be ready, Reads saved data from localStorage, Converts it into object, If data exists → fills form automatically
//Auto Saving on User Input

function handleSave() {
    const userData = {
        username: username.value,
        email: email.value,
        password: password.value // not good to store password, but retaining for learning purpose
    };
    localStorage.setItem("userData", JSON.stringify(userData)); // the user data is stored as string
}








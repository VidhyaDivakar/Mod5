// form elements 
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submit = document.getElementById("submit");

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

//add event listeners
username.addEventListener("input", validate()=>{
//adding input validity for the fields inputElement.validity
});

email.addEventListener("input", ()=>{
//adding input validity for the fields inputElement.validity
});
password.addEventListener("input", ()=>{
//adding input validity for the fields inputElement.validity
});
confirmPassword.addEventListener("input", ()=>{
//adding input validity for the fields inputElement.validity
// check password match add custom error message in span
});

submit.addEventListener("click", handleSubmit(){
    if(!nameInput.validity.valid){
        alert('Please enter your name.');
        return;
    }
// event.preventDefault()
//alert() save passwrd to localStroage
//optional reset the form
});

// Functions to Validate 
function validateUsername (){
if(username.validity.valueMissing){
    usernameError.textContent= "Username is required";
} else {
    usernameError.textContent="";
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
function validatePassword (){
    if (password.validity.valueMissing){
        passwordError.textContent = "Password is required";
    } else if (password.value.length < 6){
        passwordError.textContent = "Password must be atleast 6 characters";
    } else {
        passwordError.textContent ="";
    }
    }
function validateConfirmPassword() {
    if(confirmPassword.value !== password.value ){
        confirmPasswordError.textContent = "Passwords do not match";
    }else {
        confirmPasswordError.textContent = "";
    }
    }



// add local storage flow -> Page loads ,JS waits for DOM to be ready, Reads saved data from localStorage, Converts it into object, If data exists → fills form automatically
//Auto Saving on User Input
username = addEventListener("input", handleSave);
email = addEventListener("input", handleSave);
password = addEventListener("input", handleSave);

function handleSave(){
    const userData = {
        username: username.value,
        email: email.value,
        password: password.value // not good to store password, but retaining for learning purpose
    };
    localStorage.setItem("userData", JSON.stringify(userData)); // the user data is stored as string
}








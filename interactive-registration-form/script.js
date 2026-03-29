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
  }
}

//add event listeners
username.addEventListener("input", ()=>{
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



// add local storage flow -> Page loads ,JS waits for DOM to be ready, Reads saved data from localStorage, Converts it into object, If data exists → fills form automatically
//Auto Saving on User Input
username = addEventListener("input", handleSave);
email = addEventListener("input", handleSave);
password = addEventListener("input", handleSave);

function handleSave(){
    const userData = {
        username: username.value,
        email: email.value,
        password: password.value
    };
    localStorage.setItem("userData", JSON.stringify(userData)); // the user data is stored as string
}








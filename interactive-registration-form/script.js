const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submit = document.getElementById("submit");



//username email password confirmPassword button
// add local storage
//Step 1 Auto Saving on User Input
username = addEventListener("input", handleSave);
email = addEventListener("input", handleSave);
password = addEventListener("input", handleSave);

function handleSave(){
    const userData = {
        username: username.value,
        email: email.value,
        password: password.value
    };
    localStorage.setItem("userData", JSON.stringify(userData);)
}



//add event listeners


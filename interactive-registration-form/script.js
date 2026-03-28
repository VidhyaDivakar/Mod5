const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submit = document.getElementById("submit");



//username email password confirmPassword button
// add local storage
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
    localStorage.setItem("userData", JSON.stringify(userData));
}
// Auto-load on page refresh
window.addEventListener("DOMContentLoaded", loadData);

function loadData() {
  const storedData = JSON.parse(localStorage.getItem("userData"));

  if (storedData) {
    usernameInput.value = storedData.username || "";
    emailInput.value = storedData.email || "";
    passwordInput.value = storedData.password || "";
  }
}




//add event listeners


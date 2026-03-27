//alert("JS is loadded")
console.log("JS WOrking")
const username = document.getElementById("username");
console.log(username)
username.addEventListener("change", (e)=>{
alert(e.target.value)
})

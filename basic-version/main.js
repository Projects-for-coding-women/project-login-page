let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");
let errorMessage = document.querySelector(".error");
let successMessage = document.querySelector(".success");
let button = document.querySelector(".button");

username.addEventListener("input", (e) => {
  e.preventDefault();
  checkInput(this)
})

email.addEventListener("input", (e) => {
  e.preventDefault();
  checkInput(this)
})

password.addEventListener("input", (e) => {
  e.preventDefault();
  checkInput(this)
})

function checkInput(element) {
  if (element.value === "") {
    element.style.border = "2px solid red";
    errorMessage.innerText = "Input field cannot be blank";
  } else {
    console.log(element)
    $(element).style.border = "";
  }
}


const setSuccess = () => {
  errorMessage.innerText = "";
  username.style.border = "2px solid green";
  email.style.border = "2px solid green";
  password.style.border = "2px solid green";
  successMessage.innerText = "All input fields filled in correctly";
}

const resetForm = () => {
  form.reset();
  username.style.border = "";
  email.style.border = "";
  password.style.border = "";
};

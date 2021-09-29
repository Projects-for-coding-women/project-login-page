let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");
let errorMessage = document.querySelector(".error");
let successMessage = document.querySelector(".success");
let successIcon = document.querySelector(".success-icon");
let failureIcon = document.querySelector(".failure-icon");
let button = document.querySelector("#button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");

  if (username.value === "") {
    console.log("error username");
    errorMessage.innerText = "Input field cannot be blank";
    username.style.border = "2px solid red";
  } else if (email.value === "") {
    console.log("error email");
    errorMessage.innerText = "Input field  cannot be blank";
    email.style.border = "2px solid red";
  } else if (password.value === "") {
    console.log("error password");
    errorMessage.innerText = "Input field  cannot be blank";
    password.style.border = "2px solid red";
  } else {
    errorMessage.innerText = "";
    successMessage.innerText = "All input fields filled in correctly";
    username.style.border = "2px solid green"
    email.style.border = "2px solid green"
    password.style.border = "2px solid green"
  }
});


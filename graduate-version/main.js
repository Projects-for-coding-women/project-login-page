let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");
let errorName = document.querySelector(".error-username");
let errorEmail = document.querySelector(".error-email");
let errorPassword = document.querySelector(".error-password");
let message = document.querySelector(".message");
let successIcon = document.querySelector(".success-icon");
let failureIcon = document.querySelector(".failure-icon");
let button = document.querySelector(".button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username.value === "") {
    username.style.border = "2px solid red";
    errorName.innerText = "Username cannot be blank";
    failureIcon.style.opacity = "1";
    successIcon.style.opacity = "0";
  } else if (email.value === "") {
    email.style.border = "2px solid red";
    errorEmail.innerText = "Email cannot be blank";
    failureIcon.style.opacity = "1";
    successIcon.style.opacity = "0";
  } else if (password.value === "") {
    password.style.border = "2px solid red";
    errorPassword.innerText = "Password cannot be blank";
    failureIcon.style.opacity = "1";
    successIcon.style.opacity = "0";
  } else {
    message.innerText = "All input fields filled in correctly";
    username.style.border = "2px solid green";
    errorName.innerText = "";
    email.style.border = "2px solid green";
    errorEmail.innerText = "";
    password.style.border = "2px solid green";
    errorPassword.innerText = "";
    failureIcon.style.opacity = "0";
    successIcon.style.opacity = "1";
    setTimeout(resetForm, 2000);
  }
});

const resetForm = () => {
  form.reset();
  username.style.border = "";
  email.style.border = "";
  password.style.border = "";
  message.innerText = "";
  successIcon.style.opacity = "0";
  failureIcon.style.opacity = "0";
};

function validateEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}

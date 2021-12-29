// let username = document.querySelector("#username");
// let email = document.querySelector("#email");
// let password = document.querySelector("#password");
// let form = document.querySelector("#form");
// let errorName = document.querySelector(".error-username");
// let errorEmail = document.querySelector(".error-email");
// let errorPassword = document.querySelector(".error-password");
// let message = document.querySelector(".message");
// let successIcon = document.querySelector(".success-icon");
// let failureIcon = document.querySelector(".failure-icon");
// let button = document.querySelector(".button");

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username");
let email = id("email");
let password = id("password");
let form = id("form");
let errorMessage = classes("error");
let successIcon = classes("success-icon");
let failureIcon = classes("failure-icon");

let validateFunction = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMessage[serial].innerHTML = message;
    id.style.border = "2px solid red";
    failureIcon.opacity = "1";
    successIcon.opacity = "0";
  } else {
    errorMessage[serial].innerHTML = "";
    id.style.border = "2px solid green";
    failureIcon.opacity = "0";
    successIcon.opacity = "1";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateFunction(username, 0, "Username cannot be blank");
  validateFunction(email, 1, "Email cannot be blank");
  validateFunction(password, 2, "Password cannot be blank");
});


//   else {
//     message.innerText = "All input fields filled in correctly";
//     username.style.border = "2px solid green";
//     errorName.innerText = "";
//     email.style.border = "2px solid green";
//     errorEmail.innerText = "";
//     password.style.border = "2px solid green";
//     errorPassword.innerText = "";
//     failureIcon.style.opacity = "0";
//     successIcon.style.opacity = "1";
//     setTimeout(resetForm, 2000);
//   }
// });

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

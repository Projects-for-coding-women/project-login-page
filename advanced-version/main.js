let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");
let errorMessage = document.querySelector(".error");
let successIcon = document.querySelector(".success-icon");
let failureIcon = document.querySelector(".failure-icon");
let button = document.querySelector(".button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username.value === "") {
    username.style.border = "2px solid red";
    errorMessage.innerText = "Username cannot be blank";
    failureIcon.style.opacity = "1";
    successIcon.style.opacity = "0";
  }
  if (email.value === "") {
    email.style.border = "2px solid red";
    errorMessage.innerText = "Email cannot be blank";
    failureIcon.style.opacity = "1";
    successIcon.style.opacity = "0";
  }
  if (password.value === "") {
    password.style.border = "2px solid red";
    errorMessage.innerText = "Password cannot be blank";
    failureIcon.style.opacity = "1";
    successIcon.style.opacity = "0";
  }
  errorMessage.innerText = "";
  username.style.border = "2px solid green";
  email.style.border = "2px solid green";
  password.style.border = "2px solid green";
  failureIcon.style.opacity = "0";
  successIcon.style.opacity = "1";
  successMessage.innerText = "All input fields filled in correctly";
  resetForm();
});

//   if (username.value === "") {
//     username.style.border = "2px solid red";
//     errorMessage.innerText = "Username cannot be blank";
//     failureIcon.style.opacity = "1";
//     successIcon.style.opacity = "0";
//   } else {
//     username.style.border = "2px solid green";
//     successIcon.style.opacity = "1";
//     failureIcon.style.opacity = "0";
//   }

//   if (email.value === "") {
//     email.style.border = "2px solid red";
//     errorMessage.innerText = "Email cannot be blank";
//     failureIcon.style.opacity = "1";
//     successIcon.style.opacity = "0";
//   } else {
//     username.style.border = "2px solid green";
//     successIcon.style.opacity = "1";
//     failureIcon.style.opacity = "0";
//   }

//   if (password.value === "") {
//     password.style.border = "2px solid red";
//     errorMessage.innerText = "Password cannot be blank";
//     failureIcon.style.opacity = "1";
//     successIcon.style.opacity = "0";
//   } else {
//     username.style.border = "2px solid green";
//     successIcon.style.opacity = "1";
//     failureIcon.style.opacity = "0";
//     resetForm()
//   }
// });

const resetForm = () => {
  document.getElementById("form").reset();
  username.style.border = "";
  email.style.border = "";
  password.style.border = "";
};

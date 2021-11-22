let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");
let errorMessage = document.querySelector(".error");
let successMessage = document.querySelector(".success");
let button = document.querySelector(".button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("clicked");
  // console.log(form.elements[0]);

  if (username.value === "") {
    username.style.border = "2px solid red";
    errorMessage.innerText = "Username field cannot be blank";
  } else if (email.value === "") {
    email.style.border = "2px solid red";
    errorMessage.innerText = "Email field cannot be blank";
  } else if (password.value === "") {
    password.style.border = "2px solid red";
    errorMessage.innerText = "Password field cannot be blank";
  } else {
    setSuccess();
    resetForm();
  }
});

const setSuccess = () => {
  errorMessage.innerText = "";
  username.style.border = "2px solid green";
  email.style.border = "2px solid green";
  password.style.border = "2px solid green";
  successMessage.innerText = "All input fields filled in correctly";
}

const resetForm = () => {
  document.getElementById("form").reset();
  username.style.border = "";
  email.style.border = "";
  password.style.border = "";
};

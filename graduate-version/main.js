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
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMessage[serial].innerHTML = "";
    id.style.border = "2px solid green";
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
  setTimeout(resetForm, 3000);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateFunction(username, 0, "Username cannot be blank");
  validateFunction(email, 1, "Email cannot be blank");
  validateFunction(password, 2, "Password cannot be blank");
});

const resetForm = () => {
  form.reset();
  Object.values(successIcon).forEach(val => val.style.opacity = "0");
  Object.values(failureIcon).forEach(val => val.style.opacity = "0");
  Object.values(errorMessage).forEach(val => val.innerHTML = "");
  
  username.style.border = "";
  email.style.border = "";
  password.style.border = "";
};

let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");
let errorMessage = document.querySelector(".error");
let successMessage = document.querySelector(".success");
let button = document.querySelector("#button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");
  console.log(form.elements[0]);

  if (username.value === "") {
    console.log("error username");
    errorMessage.innerText = "Input field cannot be blank";
    // username.style.background = "red"
    username.style.border = "2px solid red";
  } else if (email.value === "") {
    console.log("error email");
    errorMessage.innerText = "Input field cannot be blank";
    email.style.border = "2px solid red";
  } else if (password.value === "") {
    console.log("error password");
    errorMessage.innerText = "Input field cannot be blank";
    password.style.border = "2px solid red";
  } else {
    errorMessage.innerText = "";
    successMessage.innerText = "All input fields filled in correctly";
    username.style.border = "2px solid green";
    email.style.border = "2px solid green";
    password.style.border = "2px solid green";
  }

  resetForm();
});

const resetForm = () => {
  document.getElementById("form").reset();
  username.style.border = "";
  email.style.border = "";
  password.style.border = "";
};

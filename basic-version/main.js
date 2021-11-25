let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");
let errorMessage = document.querySelector(".error");
let successMessage = document.querySelector(".success");
let button = document.querySelector(".button");
let validation = false;
let correctUsername = false
let correctEmail = false
let correctPassword = false

function checkInput(element) {
  if (element.value === "") {
    // validation = false;
    element.style.border = "2px solid red";
    errorMessage.innerText = "Input field cannot be blank";
  } else {
    // validation = true;
    element.style.border = "";
    errorMessage.innerText = "";
  }
}

[("change", "focusout")].forEach(function (event) {
  username.addEventListener(event, (e) => {
    checkInput(e.target);
    // if (validation === true) {
    //   correctUsername = true
    // }
  });
  email.addEventListener(event, (e) => {
    checkInput(e.target);
    // if (validation === true) {
    //   correctEmail = true
    // }
  });
  password.addEventListener(event, (e) => {
    checkInput(e.target);
    // if (validation === true) {
    //   correctPassword = true
    // }
  });
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  // if (correctUsername === true && correctEmail === true && correctPassword === true) {
    setSuccess();
    setTimeout(resetForm, 2000);
  // }
});

const setSuccess = () => {
  username.style.border = "2px solid green";
  email.style.border = "2px solid green";
  password.style.border = "2px solid green";
  successMessage.innerText = "All input fields filled in correctly";
};

const resetForm = () => {
  form.reset();
  username.style.border = "";
  email.style.border = "";
  password.style.border = "";
  successMessage.innerText = "";
};

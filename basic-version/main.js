let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");
let errorMessage = document.querySelector(".error");
let successMessage = document.querySelector(".success");
let button = document.querySelector(".button");

function checkInput(element) {
  if (element.value === "") {
    element.style.border = "2px solid red";
    errorMessage.innerText = "Input field cannot be blank";
  } else {
    element.style.border = "";
    errorMessage.innerText = "";
  }
}

function validateEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}

[("change", "focusout")].forEach(function (event) {
  username.addEventListener(event, (e) => {
    checkInput(e.target);
  });
  email.addEventListener(event, (e) => {
    checkInput(e.target);
    validateEmail(e.target);
  });
  password.addEventListener(event, (e) => {
    checkInput(e.target);
  });
});

button.addEventListener("click", (e) => {
  console.log("SUBMIT");
  console.log("correct", {
    username,
    email,
    password,
  });
  console.log("USERNAME IS TRUE: ", username === true);
  e.preventDefault();
  if (username.value && email.value && password.value) {
    setSuccess();
    setTimeout(resetForm, 2000);
  } else {
    console.log("incorrect");
    setError();
  }
  // setTimeout(resetForm, 2000);
});

const setSuccess = () => {
  username.style.border = "2px solid green";
  email.style.border = "2px solid green";
  password.style.border = "2px solid green";
  successMessage.innerText = "All input fields filled in correctly";
};

const setError = () => {
  username.style.border = "2px solid red";
  email.style.border = "2px solid red";
  password.style.border = "2px solid red";
  errorMessage.innerText = "Input fields are not filled in correctly";
};

const resetForm = () => {
  form.reset();
  username.style.border = "";
  email.style.border = "";
  password.style.border = "";
  successMessage.innerText = "";
  errorMessage.innerText = "";
};

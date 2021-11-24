let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");
let errorMessage = document.querySelector(".error");
let successMessage = document.querySelector(".success");
let button = document.querySelector(".button");


['change', 'focusout'].forEach(function(event) {
  username.addEventListener(event, (e) => {
    checkInput(e.target)
  })
  email.addEventListener(event, (e) => {
    checkInput(e.target)
  })
  password.addEventListener(event, (e) => {
    checkInput(e.target)
  })
});

function checkInput(element) {
  if (element.value === "") {    
    element.style.border = "2px solid red";
    errorMessage.innerText = "Input field cannot be blank";
  } else {
    element.style.border = "";
    errorMessage.innerText = "";
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault()
  setSuccess()
  setTimeout(resetForm, 2000)
})

const setSuccess = () => {
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
  successMessage.innerText = ""
};


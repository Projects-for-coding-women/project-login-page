let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("#form")
let errorMessage = document.querySelector(".error")
let successIcon = document.querySelector(".success-icon")
let failureIcon = document.querySelector(".failure-icon")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  validation(username, 0, "Username cannot be blank")
  validation(email, 1, "Username cannot be blank")
  validation(password, 2, "Username cannot be blank")
})

let validation = (id, serial, message) => {
  if (id.value === "") {
    errorMessage[serial].innerHTML = message

    id.style.border = "2px solid red"
    failureIcon[serial].style.opacity = "1"
    successIcon[serial].style.opacity = "0"
  }
  else {
    errorMessage[serial].innerHTML = ""

    id.style.border = "2px solid green"
    failureIcon[serial].style.opacity = "0"
    successIcon[serial].style.opacity = "1"
  }
}
// TARGET ALL IDs AND CLASSES
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

// STORE THE CLASSES AND IDS INSIDE VARIABLES
let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),

  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");






// DON'T LOOK AT THE NEXT STEP BEFORE TRYING IT YOURSELF FIRST!




/* First step validation function:
let validationFunction = (id, serial, message) => {
  if (id.value === "") {
    errorMessage[serial].innerHTML = message
  }
  else {
    errorMessage[serial].innerHTML = ""

  }
}
*/





// DON'T LOOK AT THE NEXT STEP BEFORE TRYING IT YOURSELF FIRST!







/* Second step:
let validationFunction = (id, serial, message) => {
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


// Add to the event listener:
  validation(username, 0, "Username cannot be blank")
  validation(email, 1, "Username cannot be blank")
  validation(password, 2, "Username cannot be blank")

  */
# Project Login Page

### The goal of this project is to practice working with forms and form validation

This project is for more advanced students and graduates. We will be using HTML, CSS, and JavaScript

**Basic functionality:** we want the user to be able to log in, with their name, email and a password. There will be a basic validation of these data. 

A simple example looks like this:

<img src="/login1.png" width="250" /><img src="/login2.png" width="250" /><img src="/login3.png" width="250" />
---

### Detailed functionality
**Think about what your code should do. First try it yourself. If you need help with the code, read about the functionality here but try every item yourself first**
1.  We want the following to happen:
    1. The input fields border turns green when cursor comes into focus
    1. When user moves to other input field, border turns grey again
    1. When user leaves input field without filling anything in, and moves to other input field, border of the field that stays empty turns red and the error message appears (in red)
    1. When the user submits a blank form (input fields are empty), the error message appears (in red)
    1. If everything is filled in correctly and the user clicks the button, the success message appears and borders are green
    1. After clicking the button, the fields turn empty again right away. A delay of a few seconds must be added to make sure the user can see the success before everything turns empty
    1. A failure message could be *Username field cannot be blank* and a success message *All input fields filled in correctly* (feel free to create your own messages)
    
1. All input fields must have this functionality. For this, you need a function to check the input, a function for the success message (borders all green plus message appears in green), a function to reset the fields and borders
1. Every input field needs an event listener to listen for changes and user moving out of focus (i.e. leaving the input field) (hint: it is possible to use an event listener for more than one event)

---

### For advanced students

1. Create a new folder on your local computer with the name: project-login-page
1. Track your code with Git by using `git init` in the terminal
1. Create an index.html file with the general template code
1. Make sure you have *Login Page* as the title (this will show in the tab when your app runs in the browser)
1. Paste the following link inside the `<head>` tag (with this we can access the Font Awesome icons we need):  
```html
<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      crossorigin="anonymous"
    />
```
6. Create a `style.css` file and add this to your HTML file as `<link>` (check how to add CSS to an HTML file)  
7. Create a `main.js` file. Add this JavaScript file as `<script>` to the HTML file

**HTML**  
1. In the index.html, create a `div` (with class *container*), and inside it add the `form` tag (with id *form*)
1. Inside the `form`, create an `h2` with class *title* and write: **Please login:**
1. Below that, create three `div` tags for the three inputs: username, email and password
1. Each form `input` needs a `label` and an icon from Font Awesome. The icons are:
    1. for the username: `<i class="fas fa-user"></i>`
    1. for the email: `<i class="far fa-envelope"></i>`
    1. for the password: `<i class="fas fa-lock"></i>`
1. The `input` tag has type, name, id and placeholder, for example for `username`:
  ```html
  <input
        type="text"
        name="username"
        id="username"
        placeholder="Your username"
     />
  ```
6. Add type, name, id and placeholder in each of the input div's
7. To finish the form, add a submit button with class *button* and type *submit*
8. Add a div with class `error` and one with class `success`
9. If you are not sure, then check with a coach to see if your form is complete (you can use LiveServer to run your programme, it will look messy but that will be solved with CSS)

**CSS**  
1. You can remove default styles that browsers use by setting new styles (you can do that for any project):
```css
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}
```
2. Use Flexbox to style the form: position it in the center, maximum width 400px, and add any styling you want to make it look better (for example, add a border around the form, add height, width and padding to the input fields, round the corners, style the title text, etc.)
1. Add `focus` to the input fields by using `input:focus` in your CSS and add a border color to the input fields (read about **focus** [here](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus))
1. Now style the submit button so that it looks more professional, and has a hover effect with the cursor becoming a pointer


**JavaScript**  
1. There are class and id elements in the HTML we need to target in our code. Use `getElementById` or `querySelector` to grab the elements and put them into variables. For example: `let username = document.querySelector("#username")` or `document.getElementById("username")` (these two methods do the same thing)
1. Create variables so that you can use these in your JS code:
    1. username, 
    1. email, 
    1. password, 
    1. form, 
    1. errorMessage,
1. Add a `click` event listener to the button and use `preventDefault()` as a function inside this to prevent the page from refreshing after every change

---

### For graduates

These are examples of the form with an error and with all fields correctly filled in:  

<img src="/login4.png" width="330" />       <img src="/login5.png" width="350" />


1. In addition to the error message, a warning or success icon is needed: in each of the three `div`'s, after the closing of `<input>` add two icons and a `div` with class *error* as follows:
    1. `<i class="fas fa-exclamation-circle failure-icon"></i>`
    1. `<i class="far fa-check-circle success-icon"></i>`
    1. `<div class="error"></div>`
1. You have noticed there is repetition because need the same validation and error messages for three variables: username, email and password. Create functions to reduce this repetition. First, get all id's and classes from the HTML with two functions:
```js
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
``` 
Now create variables to store each id and class in this way:
```js
let username = id("username")
```
Have a look at the first part of the helpfile if you need help.
1. Create a function called `validationFunction` that will have three arguments: id, serial and message. 
The `serial` argument targets the three input fields, and the message argument will print a message when there is an error
1. Add an if/else condition to the function: if there is no input, there should be an errorMessage, and this message depends on the `serial` argument. Else, there is no message (look at the helpfile in the repo if you need a hint for this)
1. The **opacity** property makes the icon visible or invisible (1 or 0). If all of this is confusing, have a look at the hint.js file in the helpfiles
1. Now add an error message to the event listener function for each variable, that states that it cannot be blank. This has to be added for three variables: username, email and password. Use the validation function with arguments (id, serial and message) where id = username/email/password, serial = 0 or 1 or 2, and message is the relevant message ("*variable* cannot be blank")
1. Add media queries, for example mobile `max-width: 900px` and `max-width: 425px`, with changes in colour and size of elements when screen size changes

---

## Please note:
If you want to download a project on your local machine, do not fork it but clone the repo locally, on your computer. After that, create a new repo in your own GitHub account *with exactly the same project name*, and link the local repo to the remote repo in your GitHub account (see below). Why should you clone and not fork? It will show the project as **your own project** and not a fork of someone else's project. You can use it as a project for your portfolio.

You can connect a local project to a new, empty GitHub repo [as follows](https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line). It is very good to know this so that you can start a project locally and afterwards link it with a remote GitHub repo.

If you clone the project without forking it, you will have to change the 'remote origin' repository after cloning. Check the remote of your local project using `git remote -v`.
To link your local project to your own GitHub repo, you need to change the remote origin. Have a look at this article: https://devconnected.com/how-to-change-git-remote-origin/. With `git remote -v` you can again check if remote origin has been reset and now shows the name of your GitHub account.

---


//  intialization of the Side NAv
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, "draggable");


});
// Intialization of Collapsible lists
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, "accordion");
});


// form validation
function submitForm() {
  var email1 = document.getElementById("email").value;
  var pass1 = document.getElementById("pass").value;
  var fieldName = document.getElementById("name").value;
  if (email1 && pass1 && fieldName !== "") {

    localStorage.setItem("mail", email1)
    localStorage.setItem("password", pass1);
    localStorage.setItem("name", fieldName)

  }
  else {
    alert("Fill the following fields")
    return false;
  }
}
emailOutput.innerHTML = localStorage.getItem("mail");
nameOutput.innerHTML = localStorage.getItem("name");

// On loading browser window it displays the current date and changes the styling of the navigation menu.
window.onload = function () {
  var curLoc = window.location.href;
  // For this style to work enter the current url
  if (curLoc == "allTodos.html") {
    var navStyl = document.getElementById("navstyle");
    navStyl.className += " navS";
    var date = new Date().toString();
    var dateM = date.slice(0, 15);
    dandt.innerHTML = dateM;

    console.log(dateM);
  }
  // for second page
  else if (curLoc == "newTodo.html") {
    var StylTodo = document.getElementById("navTodo");
    StylTodo.className += " navS"

  }
}



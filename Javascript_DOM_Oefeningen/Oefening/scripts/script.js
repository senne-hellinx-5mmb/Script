//Javascript oefeningen
//General info:https://www.w3schools.com/js/js_htmldom.asp
//Onder elke oefening is een link of hint toegevoegd als hulp

//Oef 1

document.getElementById("textChangeButton").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById ("textChangeButton").innerHTML = "new text!";
}

//Oef 2

function myFunction() {
    var x = document.getElementById("visibilityChangeParagraph");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
//Oef 3

function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numberInput").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("validationResult").innerHTML = text;
  }

// oef 4
document.getElementById("addToListButton").onclick = function() {
  var textInput = document.getElementById("textInput").value;
  var list = document.getElementById("dynamicList");
  var listItem = document.createElement("li");
  listItem.textContent = textInput;
  list.appendChild(listItem);
};

// oef 5
document.getElementById("colourChangeDiv").onmouseover = function() {
  this.style.backgroundColor = "lightblue";
};

document.getElementById("colourChangeDiv").onmouseout = function() {
  this.style.backgroundColor = "";
};
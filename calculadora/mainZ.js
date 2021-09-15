/* Get the value of the <button> element's first attribute:

var x = document.getElementsByTagName("BUTTON")[0].attributes[0].value;

// Set the attribute value

attribute.value = value

// Change the value of the src attribute of an <img> element:

var x = document.getElementsByTagName("IMG")[0];
x.getAttributeNode("src").value = "pic_bulbon.gif";

// Attach a click event to the document. When the user clicks anywhere in the document, output "Hello World" in a <p> element with id="demo":

document.addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World";
});

// You can also refer to an external "named" function:

document.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
querySelector()
querySelectorAll()*/

// States

// 0 no numbers set 1 first number set 2 second number set
let stateOperation = 0;
// true = positivie flase = negative
let stateSign = true;
// values
let firstNumber = 0;
let secondNumber = 0;
let result = 0;

// find the screen element
const display = document.querySelector(".display .content"); 

// Iniciate to 0

display.textContent = "0";

// Find the number elements
const numbers = document.querySelectorAll(".num>button");

// Find the operator elements
const operators = document.querySelectorAll(".op>button");

// Displaying numbers
for (const number of numbers) {
  number.addEventListener("click", function(number){
    if (display.textContent == "0") {
      display.textContent = number.target.innerHTML;
  
    }else{
      display.textContent += number.target.innerHTML;
  
    }
  });
}

// Setting listeners to operator buttons
for (const operator of operators) {
  operator.addEventListener("click", function(operator){
    switch (operator.value) {
      case "ac":
        display.textContent = "0";
  
    }
  });
}

/*
for (const number of numbers) {
  number.addEventListener("click", function(number){
    if (display.textContent === "0") {
      display.textContent = number.value;
  
    }else{
      display.textContent += number.value;
  
    }
  });
}

// Setting listeners to operator buttons
for (const operator of operators) {
  operator.addEventListener("click", function(operator){
    switch (operator.value) {
      case "ac":
        display.textContent = "0";
  
    }
  });
}

*/

/*
function addition(number1, number2){
  var result = number1 + number2;
  return result;
}

function substraction(number1, number2) {
  var result = number1 -number2;
  return result;
}

function division (number1, number2){
  var result;
  if ( number1 !== 0){
    result = number1 / number2;
  }else{
    result = "Error: trying to divide by 0";
  }
  return result;
}

function multiplication (number){
  var result;
  result = number / 100;
  return result;
}
*/

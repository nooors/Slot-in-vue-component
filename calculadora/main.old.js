// States

// 0 ready to start 1 continue displaying
let stateOperation = 0;
// keeps operator type information
let operator = 0;
// keeps first number in memory
let memory = null;

// find the screen element
const display = document.querySelector(".display .content");

// Iniciate to 0
display.textContent = "0";

// Find the number elements
const numbers = document.querySelectorAll(".num>button");

// Find the operator elements
const operators = document.querySelectorAll(".op>button");

// Setting listeners to numbers buttons
for (const number of numbers) {
  number.addEventListener("click", addNumber);
}

// Setting listeners to operator buttons
for (const operator of operators) {
  operator.addEventListener("click", operate);
}

// Displaying numbers
function addNumber(e) {
  //max number on display
  if (display.textContent.length <= 9) {

    //ready for start or continue adding numbers
    if (stateOperation === 0) {
      display.textContent = e.target.value;
      stateOperation = 1;
    } else {
      display.textContent += e.target.value;
    }
  }
}

// Operating
function operate(ev) {
  switch (ev.target.value) {
    // Reset
    case "ac":
      reset();
      break;

    case "plus-minus":
      if (display.textContent.startsWith("-")) {
        display.textContent = display.textContent.replace("-", "");
      } else {
        display.textContent = "-" + display.textContent;
      }
      break;
    case "per-cent":
      display.textContent = parseFloat(display.textContent / 100);
      break;
    case "point":
      if (!display.textContent.includes('.')){
        display.textContent += '.';
      }
      break;
    case "times":
      operator = "*";
      if(memory){
        memory = operateMultiplication(memory, display.textContent);
        display.textContent = memory;
      }
      stateOperation = 0;
      memory = display.textContent;
      break;
    case "plus":
      operator = "+";
      if(memory){
        memory = operateAddition(memory, display.textContent);
        display.textContent = memory;
      }
      stateOperation = 0;
      memory = display,display.textContent;
      break;
    case "minus":
      operator = "-";
      if(memory){
        memory = operateSubtraction(memory, display.textContent);
        display.textContent = memory;
      }
      stateOperation = 0;
      memory = display.textContent;
      break;
    case "divided":
      operator = "/";
      if(memory){
        memory = operateDivision(memory, display.textContent);
        display.textContent = memory;
      }
      stateOperation = 0;
      memory = display.textContent;
      break;

      case "equal":
        stateOperation = 0;
        if(memory) {
          display.textContent = operateEqual(memory, display.textContent)
        }
        break;
  }
}

function reset(){
  display.textContent = "0";
  stateOperation = 0;
  operator = 0;
  memory = undefined;
}

function operateMultiplication(num1, num2){
  let result = parseFloat(num1 * num2).toFixed(8);
  return result.substr(0, 10);
}

function operateAddition (num1, num2){
  let result = parseFloat(num1 + num2).toFixed(8);
  return result.substr(0, 10);
}

function operateSubtraction (num1, num2){
  let result = parseFloat(num1 - num2).toFixed(8);
  return result.substr(0,10);
}

function operateDivision(num1, num2){
  let result;
  if(num2 === "0"){
    result = "Error!!!";
  }else{
    operation = parseFloat(num1 / num2).toFixed(8);
    result = operation.substr(0, 10);
  }

  return result;
}

function operateEqual (num1, num2){
  switch (operator){
    case "+":
      display.textContent = operateAddition(num1, num2);
      break;
    case "-":
      display.textContent = operateSubtraction(num1, num2);
      break;
    case "/":
      display.textContent = operateDivision(num1, num2);
      break;
    case "*":
      display.textContent = operateMultiplication(num1, num2);
      break;
  }

}

/* 
>>>>>> Only for personal information  <<<<<<<<<<<<<<<<

Get the value of the <button> element's first attribute:

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
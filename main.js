
let expression = document.getElementById('expression');
let operand = document.getElementById('operand');
let numbers = [...document.getElementsByClassName('number')];
let operators = [...document.getElementsByClassName('operator')];
let reset = document.getElementById('reset');
let equals = document.getElementById('equals');

let firstOperand, secondOperand, firstOperator, secondOperator;
let isOperatorClicked = false;


numbers.forEach(number => {
  number.addEventListener('click', numberClick);
});

operators.forEach(operator => {
  operator.addEventListener('click', operatorClick);
});

document.addEventListener('keydown', keypress);

reset.addEventListener('click', clear);


// For number buttons
function numberClick(e) 
{
  if (operand.textContent.length < 8 || isOperatorClicked) 
  {
    if (operand.textContent == 0 || isOperatorClicked)  
      operand.textContent = e.target.textContent;
    else operand.textContent += e.target.textContent;
  
    isOperatorClicked = false;
  }
}

// For operator buttons
function operatorClick(e) 
{
  if (!isOperatorClicked) evaluate(e.target.textContent);
  else changeOperator(e.target.textContent);

  isOperatorClicked = true;
}

function evaluate(operator) 
{
  let operandText = operand.textContent;

  if (!firstOperand && !secondOperand) {
    firstOperand = parseInt(operandText);
    firstOperator = operator;
  } else if (firstOperand && !secondOperand) {
    secondOperand = parseInt(operandText);
    secondOperator = operator;
  }

  if (firstOperand && secondOperand) operate();
  expression.textContent += `${operandText} ${firstOperator} `;
}

function changeOperator(operator) {
  firstOperator = operator;
  expression.textContent = expression.textContent.slice(0, -2) + operator + ' ';
}

function operate() 
{
  switch (firstOperator) {
    case '+':
      firstOperand = firstOperand + secondOperand;
      break;
    case '-':
      firstOperand = firstOperand - secondOperand;
      break;
    case '*':
      firstOperand = firstOperand * secondOperand;
      break;
    case '/':
      firstOperand = firstOperand / secondOperand;
      break;   
  }

  if (!!(firstOperand % 1)) firstOperand = roundOff(firstOperand);
  operand.textContent = firstOperand;
  firstOperator = secondOperator;
  secondOperand = secondOperator = null;
}

function roundOff(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

// For clear button
function clear() 
{
  operand.textContent = '0';
  expression.innerHTML = '&nbsp;';

  firstOperand = firstOperator = secondOperand = secondOperator = null;
  isOperatorClicked = false;
}

function keypress(e) 
{
  switch (e.key) {
    case "Backspace":
      operand.textContent = operand.textContent.slice(0, -1); 
      if (!operand.textContent) operand.textContent = '0';
      break;
    case "Enter":
      console.log("lez g");
      break;
  }
}
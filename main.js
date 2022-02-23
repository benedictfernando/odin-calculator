
let expression = document.getElementById('expression');
let operand = document.getElementById('operand');
let numbers = [...document.getElementsByClassName('number')];
let operators = [...document.getElementsByClassName('operator')];
let reset = document.getElementById('reset');
let equals = document.getElementById('equals');


numbers.forEach(number => {
  number.addEventListener('click', numberClick);
});

operators.forEach(operator => {
  operator.addEventListener('click', operatorClick);
});

reset.addEventListener('click', clear);


// For number buttons
function numberClick(e) {
  if (operand.textContent == 0) operand.textContent = e.target.textContent;
  else operand.textContent += e.target.textContent;
}

// For operator buttons
function operatorClick(e) {
  console.log(e.target.textContent);
}

// For clear button
function clear() {
  operand.textContent = '0';
  expression.innerHTML = '&nbsp;';
}

// For equals button
function evaluate() {
  // to-do
}
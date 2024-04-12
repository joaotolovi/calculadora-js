import {numbers, operations, display, displayOp} from './querySelector.js';

let operation = null;

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if(display.textContent === "0"){
      display.textContent = "";
    }
    display.textContent += number.textContent;
  })
})

operations.forEach( (op) => {
  op.addEventListener("click", () => {
    if(operation === null){
      display.textContent += op.textContent;
      if(operation !== "="){
        operation = op.textContent;
        if(operation !== null){
          let operationIndice = display.textContent.indexOf(operation);
          let firstNumber = display.textContent.substring(0, operationIndice);
          let lastNumber = display.textContent.substring(operationIndice + 1);
          let resultado = 0;
    
          tabuada(firstNumber, operation);  
    
          display.textContent = resultado;
          displayOp.textContent = operation;
          operation = null;
          
        }  
      }
    }
  }) 
})

document.getElementById("apagar").addEventListener("click", () => {
  display.textContent = "0";
  operation = null;
  displayOp.textContent = "";
  const container = document.getElementById('tabuada');
  container.innerHTML = '';
});

function tabuada(number, op) {
  const table = document.createElement('table');
  table.style.margin = 'auto';
 
  for (let i = 0; i <= 10; i++) {
     const row = document.createElement('tr');
     const cellNumber = document.createElement('td');
     const cellOperator = document.createElement('td');
     const cellNumberTwo = document.createElement('td');
     const cellResult = document.createElement('td');
 
     cellNumber.textContent = number;
     cellOperator.textContent = op;
     cellNumberTwo.textContent = i;

     const expression = `${number} ${op} ${i}`;
     let resultado = eval(expression);
     cellResult.textContent = "= "+resultado;

     row.appendChild(cellNumber);
     row.appendChild(cellOperator);
     row.appendChild(cellNumberTwo);
     row.appendChild(cellResult);
     table.appendChild(row);
  }
  const container = document.getElementById('tabuada');
  container.innerHTML = '';
 
  container.appendChild(table);
 }
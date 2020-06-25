import { doMath } from './utils.js';
console.log(doMath('add', 3, 5));
// get dom elements
// get add-input-1
const addInput1 = document.getElementById('add-input-1');
// get add-input-2
const addInput2 = document.getElementById('add-input-2');
// get add-button
const boogerButton = document.getElementById('add-button');
// get the add-result span
const boogerSpan = document.getElementById('add-result');

//get subtract-input-1
const subtractInput1 = document.getElementById('subtract-input-1');
//get subtract-input-2
const subtractInput2 = document.getElementById('subtract-input-2');
//get-subtract-button
const subtractButton = document.getElementById('subtract-button');
// get the subtract-result span
const subtractSpan = document.getElementById('subtract-result');

//get multiply-input-1
const multiplyInput1 = document.getElementById('multiply-input-1');
//get multiply-input-2
const multiplyInput2 = document.getElementById('multiply-input-2');
//get-multiply-button
const multiplyButton = document.getElementById('multiply-button');
// get the multiply-result span
const multiplySpan = document.getElementById('multiply-result');

//get divide-input-1
const divideInput1 = document.getElementById('divide-input-1');
//get divide-input-2
const divideInput2 = document.getElementById('divide-input-2');
//get-divide-button
const divideButton = document.getElementById('divide-button');
// get the divide-result span
const divideSpan = document.getElementById('divide-result');


// initialize state 

// set the event handler to the button
boogerButton.addEventListener('click', () => {
    // in the click event handler . . .
    // make sure we have the inputs (console.log)
    // make sure we have the span
    // make sure we have the .values of the inputs
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    // add the two values together
    const sum = doMath('add', value1, value2);
    // update the textContent of the span
    boogerSpan.textContent = sum;
});

subtractButton.addEventListener('click', ()=> {
    const value1 = subtractInput1.value;
    const value2 = subtractInput2.value;
    //subtract value2 from value 1
    const result = doMath('subtract', value1, value2);
    
    //update the textcontent span
    subtractSpan.textContent = result;
});

multiplyButton.addEventListener('click', () => {
    const value1 = multiplyInput1.value;
    const value2 = multiplyInput2.value;
    //multiply value 1 and 2
    const product = doMath('multiply', value1, value2);

    //update the textcontent of the span
    multiplySpan.textContent = product;
});

divideButton.addEventListener('click', () => {
    const value1 = divideInput1.value;
    const value2 = divideInput2.value;
    //divide value 1 by value 2
    const quotient = doMath('divide', value1, value2);
    //update the textContent of the span
    divideSpan.textContent = quotient;
});

export function doMath(operator, input1, input2) {
    const number1 = Number(input1);
    const number2 = Number(input2);

    switch (operator.toLowerCase()) {
        case 'add' :
            return number1 + number2;
            // break;
        case 'subtract' :
            return number1 - number2;
            // break;
        case 'multiply' :
            return number1 * number2;
            // break;
        case 'divide' :
            return number1 / number2;
            // break;
        default:
            return 'Please pass add, subtract, multiply, or divide as the first argument';
            // break;
        
    }
}
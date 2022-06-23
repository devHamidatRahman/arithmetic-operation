const operator = prompt('Enter the arithmetic operator: ');

let number1 = Number(prompt('Enter first number: '));
let number2 = Number(prompt('Enter second number: '));

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

alert(`${number1} ${operator} ${number2} = ${result}`);
// Simple Calculator Assignment
// Yeh program user se 2 numbers leta hai.
// Phir unka sum, subtraction aur percentage calculate karta hai.
// Percentage ka formula hai:
// (First Number / Second Number) * 100

alert("Welcome to JS \nLet's add and subtract 2 numbers and find percentage");

// User se pehla number lena
let firstNumber = Number(prompt("Enter first number: "));

// User se doosra number lena
let secondNumber = Number(prompt("Enter second number: "));

// Dono numbers ka sum calculate karna
let sum = firstNumber + secondNumber;

// Dono numbers ka subtraction calculate karna
let subtract = firstNumber - secondNumber;

// Percentage calculate karna
let percentage = (firstNumber / secondNumber) * 100;

// Result Display karna
alert(
    "Sum = " + sum +
    "\nSubtract = " + subtract +
    "\nPercentage = " + percentage.toFixed(2) + "%"
);

/*
Working:
1. Sabse pehle alert message display hota hai.
2. User se first number input liya jata hai.
3. User se second number input liya jata hai.
4. Program dono numbers ka sum calculate karta hai.
5. Program dono numbers ka subtraction calculate karta hai.
6. Program formula (num1 / num2) * 100 se percentage calculate karta hai.
7. Aakhir mein alert box mein sum, subtraction aur percentage display ki jati hai.
*/



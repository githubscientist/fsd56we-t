/*
    Functions: functions are blocks of code that can be called and executed at any time.
*/

// to create a function
// function declaration and definition
// function sayHello() {
//     console.log('hello');
// }

// // function call
// sayHello();

/*
    Types of Functions: arguments, return values

    1. Function with no arguments and no return value
    2. Function with arguments and no return value
    3. Function with no arguments and return value
    4. Function with arguments and return value
*/

// // Function with no arguments and no return value
// function sayHello() {
//     console.log(1);
//     console.log(2);
//     console.log(3);
// }

// sayHello();

// // Function with arguments and no return value
// function sayHello(count) {
//     for (let i = 1; i <= count; i++){
//         console.log(i);
//     }
// }

// sayHello(10);

// // Function with no arguments and return value
// function sayHello() {
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     return 'done!';
// }

// console.log(sayHello());

// Function with arguments and return value
// function sayHello(count) {
//     for (let i = 1; i <= count; i++){
//         console.log(i);
//     }
//     return 'done!';
// }

// console.log(sayHello(5));

// function sum(x, y) {
//     return x + y;
// }

// console.log(sum(5243234, 623423545));

/*
    Question1: Write a function that takes a number and returns the square of the number.

    Input: 5

    Output: 25

    Explanation: 5*5 = 25

    Question2: Write a function that takes a number and returns number*2 if the number is even and number*3 if the number is odd.

    Input: 5

    Output: 15

    Explanation: 5 is odd, so 5*3 = 15

    Input: 6

    Output: 12

    Explanation: 6 is even, so 6*2 = 12
*/

function square(number) {
    return number * number; // return number ** 2;
}

// console.log(square(5));

// function fun(number) {
//     if (number % 2 == 0) {
//         return number * 2;
//     } else {
//         return number * 3;
//     }
// }

// function fun(number) {
//     return number % 2 == 0 ? number * 2 : number * 3;
// }

// console.log(fun(6));

// let firstNumber = 51;
// let secondNumber = 6;
// let thirdNumber = 42;

// // if (firstNumber > secondNumber && firstNumber > thirdNumber) {
// //     console.log(firstNumber, 'is the greatest number');
// // } else if (secondNumber > thirdNumber) {
// //     console.log(secondNumber, 'is the greatest number');
// // } else {
// //     console.log(thirdNumber, 'is the greatest number');
// // }

// ((firstNumber > secondNumber) && (firstNumber > thirdNumber)) ? console.log(firstNumber, 'is the greatest number') : (secondNumber > thirdNumber) ? console.log(secondNumber, 'is the greatest number') : console.log(thirdNumber, 'is the greatest number');

/*
    Function types: syntax

    1. named function
    2. anonymous function or nameless function
    3. arrow function
    4. IIFE (Immediately Invoked Function Expression)
*/

// named functions
// function add(x, y) {
//     console.log(x + y);
// }

// add(5, 6);

// anonymous functions
// let add = function (x, y) {
//     console.log(x + y);
// }

// add(5, 6);

// // arrow functions
// let add = (x, y) => {
//     console.log(x + y);
// }

// add(5, 6);

// IIFE : Immediately Invoked Function Expression
// ((x, y) => {
//     console.log(x + y);
// })(5, 6);

(function (x, y) {
    console.log(x + y);
})(5, 6);
/*
    Hoisting and Scope

    In flag hoisting, like the flag is hoisted to the top of the pole, the variable declaration is hoisted to the top of the function or global scope. The variable assignment is not hoisted.
*/

// x = 10; // initialize x with 10
// console.log(x); // prints x

// let x; // declare x

// x = 10; // initialize x with 10
// console.log(x); // prints x

// console.log(typeof (x)); // because javascript is a dynamically typed language, which means that the type of a variable can change at runtime. 

// scope -> global scope, function scope, block scope
// scope tells us where the variable is accessible or visible.

// x is a global variable and visible to the entire file
// let x = 10; // global scope

// function fun() {
//     console.log(x); // prints x
// }

// console.log(x); // prints x

// x is a global variable and visible to the entire file
// var x = 10; // global scope

// function fun() {
//     console.log(x); // prints x
// }

// console.log(x); // prints x

// // x is a global variable and visible to the entire file
// var x = 10; // global scope

// function fun() {
//     console.log(x); // prints x
// }

// console.log(x); // prints x
// fun(); // prints x

// // x is a global variable and visible to the entire file
// let x = 10; // global scope

// function fun() {
//     let x = 20; // function scope or shadowing
//     console.log(x); // prints x
// }

// fun(); // prints x: 20

// console.log(x); // prints x: 10

// // x is a global variable and visible to the entire file
// let x = 10; // global scope

// if (true) {
//     console.log(x); // prints x: 10
// }

// console.log(x); // prints x: 10

// // x is a global variable and visible to the entire file
// let x = 10; // global scope

// if (true) {
//     let x = 20; // block scope or shadowing
//     console.log(x); // prints x: 20
// }

// console.log(x); // prints x: 10

// // x is a global variable and visible to the entire file
// let x = 10; // global scope

// if (true) {
//     x = 20; // global scope
//     console.log(x); // prints x: 20
// }

// console.log(x); // prints x: 20

// x is a global variable and visible to the entire file
// let x = 10; // global scope

// if (true) {
//     x = 20; // global scope
//     console.log(x); // prints x: 20
// }

// console.log(x); // prints x: 20

// block scope
// for (var i = 0; i < 5; i++);
// console.log(i);

// if (true) {
//     let x = 10; // block scope
//     console.log(x);
// }

// console.log(x); // ReferenceError: x is not defined

// if (true) {
//     var x = 10; // global scope
//     console.log(x);
// }

// console.log(x); // prints x: 10



// sayHello();

// function sayHello() {
//     console.log('hello');
// }

sayHello();

function sayHello() {
    console.log('hello');
}
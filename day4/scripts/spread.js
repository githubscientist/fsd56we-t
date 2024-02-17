/*
    Spread Operator

        - syntax: ...
        - used to expand an iterable object into a list of arguments
*/

// let nums = [1, 2, 3];

// // console.log(nums);

// console.log(...nums);

// console.log(1, 2, 3);

// ---------------------------

// let's say I want to create a new array with the elements of nums and add 4 and 5 to it

// let nums = [1, 2, 3];

// let newNums = [...nums, 4, 5];

// console.log(newNums);

// ---------------------------

// copy by value

// let x = 10;

// let y = x;

// y = 20;

// console.log(x); // 10
// console.log(y); // 20

// ---------------------------

// copy by reference

// let arr1 = [1, 2, 3];

// let arr2 = arr1;

// arr2.push(4);

// console.log(arr1); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3, 4]

// ---------------------------

// copy by value using spread operator

// let arr1 = [1, 2, 3];

// let arr2 = [...arr1];

// arr2.push(4);

// console.log(arr1); // [1, 2, 3]
// console.log(arr2); // [1, 2, 3, 4]

// ---------------------------

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(Math.max(...numbers));

// ---------------------------

let book = {
    title: "JavaScript",
    author: "John Doe",
    noOfPages: 300,
    price: 500
}

// console.log({...book});

let newBook = { ...book, price: 600 };

console.log(newBook);
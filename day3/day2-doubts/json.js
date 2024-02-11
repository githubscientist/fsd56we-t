// java script object
// let book = {
//     name: "dsa",
//     author: "sathish"
// }

// JavaScript Object
// let book = {
//     name: 'dsa',
//     author: 'sathish',
//     noOfPages: 300,
//     price: 523.35,
//     noOfCopies: 10
// }

// console.log(book);
// console.log('type:', typeof (book));

// JSON
let books = [
    {
        name: 'dsa',
        author: 'sathish',
        noOfPages: 300,
        price: 523.35,
        noOfCopies: 10
    },
    {
        name: 'dsa',
        author: 'sathish',
        noOfPages: 300,
        price: 523.35,
        noOfCopies: 10
    },
];

let booksJSON = JSON.stringify(books);

// console.log(booksJSON);
// console.log('type:', typeof (booksJSON));

/*
    {
        "name":"dsa",
        "author":"sathish",
        "noOfPages":300,
        "price":523.35,
        "noOfCopies":10
    }
*/

// on the server side
let booksObject = JSON.parse(booksJSON);

console.log(booksObject);

console.log('type:', typeof (booksObject));
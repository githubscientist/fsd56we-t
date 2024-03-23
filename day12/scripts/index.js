// create a reference for container div
const container = document.getElementById('container');

// console.log(container);

// create a new h1 element
const h1 = document.createElement('h1');

h1.textContent = 'Hello World!';

// console.log(document.body);

// console.log(h1);
container.appendChild(h1);

/*
    Exercise: 

    1. Create a new paragraph element and set its text content to "This is a paragraph". Append it to the body.

    2. Create a anchor element and set its content to "visit guvi.in" and set its href to "https://www.guvi.in". Append it to the body. [hint: use setAttribute('href', 'https://www.guvi.in') to set the attribute].
*/

// Create a new paragraph element

const paragraph = document.createElement('p');

// set its text content to "This is a paragraph".
paragraph.textContent = 'This is a paragraph';

// Append it to the body.
container.appendChild(paragraph);

// Create a anchor element
const anchor = document.createElement('a');

// set its content to "visit guvi.in" 
anchor.textContent = 'visit guvi.in';

// set its href to "https://www.guvi.in".[hint: use setAttribute('href', 'https://www.guvi.in') to set the attribute]
anchor.setAttribute('href', 'https://www.guvi.in');

anchor.setAttribute('target' , '_blank');

// Append it to the body.
container.appendChild(anchor);
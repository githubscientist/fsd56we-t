/*
    XHR: XMLHttpRequest

    1. Install the xhr2 package

    npm install xhr2

    2. Import the xhr2 package

    const XMLHttpRequest = require('xhr2');

    3. Create an instance/object of XMLHttpRequest

    const xhr = new XMLHttpRequest();

    4. Open the request

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    5. Send the request

    xhr.send();

    6. Listen for the response

    xhr.onload = function() {
        console.log(xhr.responseText);
    }

*/

// Import the xhr2 package
const XMLHttpRequest = require('xhr2');

// Create an instance/object of XMLHttpRequest
const xhr = new XMLHttpRequest();

// Open the request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// Send the request
xhr.send();

// Listen for the response
xhr.onload = function() {
    console.log(xhr.responseText);
}
// console.log(window);

console.log(window.location); // all the information about the current URL

// console.log(window.location.href); // URL

// console.log(window.location.hostname); // domain name

// console.log(window.location.origin); // protocol + hostname

// console.log(window.location.protocol); // http or https

// console.log(window.location.port); // port number

// redirecting to a different url
// window.location.href = '/login.html';

function redirect(path) {
    window.location.href = path;
}

let container = document.querySelector('.container');

// console.log(container.children[1]);
// container.innerText = 'Hello World';

// container.children[0].innerText = 'Hello World';
// container.children[1].innerText = 'Hello World';

// container.innerHTML = `<h1>Inner HTML</h1><p>This is a simple example for innerHTML</p>`;

for (let index = 0; index < container.children.length; index++){
    console.log(container.children[index]);
}
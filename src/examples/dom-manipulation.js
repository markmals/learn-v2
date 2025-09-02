console.log('=== DOM Manipulation Examples ===');
console.log('This file demonstrates DOM manipulation concepts.');
console.log('In a real webpage, this would interact with HTML elements.');

console.log('\n=== Finding Elements (simulated) ===');
console.log("document.querySelector('#submit-button') - finds button by ID");
console.log("document.querySelectorAll('.article-card') - finds all articles by class");
console.log("document.getElementById('contact-form') - finds form by ID");

console.log('\n=== Changing Content (simulated) ===');
console.log("button.textContent = 'Click me!' - changes text content");
console.log("button.innerHTML = '<strong>Click me!</strong>' - changes HTML content");

console.log('\n=== Changing Styles (simulated) ===');
console.log("button.style.backgroundColor = '#007acc' - changes background color");
console.log("button.classList.add('primary') - adds CSS class");
console.log("button.classList.remove('secondary') - removes CSS class");
console.log("button.classList.toggle('active') - toggles CSS class");

console.log('\n=== Creating Elements (simulated) ===');
const articleHTML = `
    <h2>New Article</h2>
    <p>This is a dynamically created article.</p>
`;
console.log("document.createElement('article') - creates new element");
console.log("Element HTML would be:", articleHTML.trim());

console.log('\n=== Adding to Page (simulated) ===');
console.log("container.appendChild(newElement) - adds element to page");

console.log('\n=== Removing Elements (simulated) ===');
console.log("element.remove() - removes element from page");

console.log('\n💡 Note: Run this in a real webpage to see DOM changes!');
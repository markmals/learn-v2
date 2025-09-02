// Strings (text)
const title = 'My First Article';
const description = `Published on ${new Date().getFullYear()}`;

console.log('=== Strings ===');
console.log('title:', title);
console.log('description:', description);

// Numbers
const price = 9.99;
const views = 1_234_567; // Underscores for readability

console.log('\n=== Numbers ===');
console.log('price:', price);
console.log('views:', views.toLocaleString());

// Booleans
let isPublished = true;
let hasComments = false;

console.log('\n=== Booleans ===');
console.log('isPublished:', isPublished);
console.log('hasComments:', hasComments);

// Arrays (lists)
const tags = ['javascript', 'web-development', 'tutorials'];
const scores = [85, 92, 78, 94];

console.log('\n=== Arrays ===');
console.log('tags:', tags);
console.log('scores:', scores);

// Objects (structured data)
const article = {
    title: 'Learning JavaScript',
    author: 'Jane Doe',
    publishedAt: new Date(),
    tags: ['javascript', 'beginner']
};

console.log('\n=== Objects ===');
console.log('article:', article);

// Null and undefined
let emptyValue = null;
let notDefinedYet; // undefined

console.log('\n=== Null and Undefined ===');
console.log('emptyValue:', emptyValue);
console.log('notDefinedYet:', notDefinedYet, `(type: ${typeof notDefinedYet})`);
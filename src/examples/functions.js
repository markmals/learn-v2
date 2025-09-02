// Function declaration
function greetUser(name) {
    return `Hello, ${name}!`;
}

// Arrow functions can be assigned to constants
const formatDate = (date) => {
    return date.toLocaleDateString();
};

// Arrow function shorthand when returning a value
const double = (x) => x * 2;
const isEven = (num) => num % 2 === 0;

console.log('=== Function Examples ===');
console.log(greetUser('Andy')); // "Hello, Andy!"
console.log(formatDate(new Date())); // Current date
console.log('double(100):', double(100)); // 200
console.log('isEven(42):', isEven(42)); // true
console.log('isEven(13):', isEven(13)); // false

console.log('\n=== Testing Different Inputs ===');
console.log(greetUser('Sarah'));
console.log('double(25):', double(25));
console.log('isEven(0):', isEven(0));
console.log('isEven(1):', isEven(1));
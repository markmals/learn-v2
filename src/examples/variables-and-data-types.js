// Variables (can change)
let username = 'alice';
let isLoggedIn = false;
let articleCount = 42;

console.log('=== Initial Values ===');
console.log('username:', username);
console.log('isLoggedIn:', isLoggedIn);
console.log('articleCount:', articleCount);

username = 'andy';
isLoggedIn = false;
articleCount = 0;

console.log('\n=== After Changes ===');
console.log('username:', username);
console.log('isLoggedIn:', isLoggedIn);
console.log('articleCount:', articleCount);

// Constants (cannot change)
const API_URL = 'https://api.example.com';
const MAX_ARTICLES = 100;

console.log('\n=== Constants ===');
console.log('API_URL:', API_URL);
console.log('MAX_ARTICLES:', MAX_ARTICLES);
const userRole = 'editor';
const articleCount = 5;

console.log('=== Variables ===');
console.log('User role:', userRole);
console.log('Article count:', articleCount);

console.log('\n=== If Statements ===');
if (userRole === 'admin') {
    console.log('Full access granted');
} else if (userRole === 'editor') {
    console.log('Editor access granted');
} else {
    console.log('Reader access only');
}

console.log('\n=== Switch Statements ===');
switch (userRole) {
    case 'admin':
        console.log('Can delete articles');
        // fallthrough
    case 'editor':
        console.log('Can edit articles');
        // fallthrough
    case 'author':
        console.log('Can create articles');
        break;
    default:
        console.log('Can read articles');
}

// Sample data for loops
const sampleArticles = [
    { title: 'First Article' },
    { title: 'Second Article' },
    { title: 'Third Article' }
];

const sampleBlogPost = {
    title: 'Sample Post',
    author: 'John Doe',
    views: 150
};

console.log('\n=== For Loop (traditional) ===');
for (let i = 0; i < sampleArticles.length; i++) {
    console.log(`Article ${i + 1}: ${sampleArticles[i].title}`);
}

console.log('\n=== For...of Loop (modern) ===');
for (const article of sampleArticles) {
    console.log(article.title);
}

console.log('\n=== For...in Loop (object properties) ===');
for (const key in sampleBlogPost) {
    console.log(`${key}: ${sampleBlogPost[key]}`);
}
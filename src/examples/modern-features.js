console.log('=== Modern JavaScript Features (ES6+) ===');

// Sample data for examples
const article = {
    title: 'Modern JavaScript Guide',
    author: 'Tech Writer',
    publishedAt: new Date('2024-01-15'),
    comments: [
        { author: { name: 'Alice' }, text: 'Great article!' },
        { author: { name: 'Bob' }, text: 'Very helpful!' }
    ]
};

const tags = ['javascript', 'es6', 'modern', 'features'];
const existingTags = ['web', 'frontend'];
const newTags = ['tutorial', 'guide'];

console.log('\n=== Destructuring ===');
const { title, author, publishedAt } = article;
console.log('Destructured from object:', { title, author, publishedAt });

const [first, second, ...rest] = tags;
console.log('Destructured from array:');
console.log('First:', first);
console.log('Second:', second);
console.log('Rest:', rest);

console.log('\n=== Template Literals ===');
const articleUrl = `/articles/${title.toLowerCase().replace(/\s+/g, '-')}`;
console.log('Generated URL:', articleUrl);

const formatDate = (date) => date.toLocaleDateString();
const htmlTemplate = `
    <article class="post">
        <h1>${title}</h1>
        <p>By ${author} on ${formatDate(publishedAt)}</p>
    </article>
`;
console.log('HTML Template:', htmlTemplate.trim());

console.log('\n=== Spread Operator ===');
const newArticle = { ...article, featured: true, views: 150 };
console.log('Original article keys:', Object.keys(article));
console.log('New article keys:', Object.keys(newArticle));
console.log('Featured:', newArticle.featured);

const allTags = [...existingTags, ...newTags];
console.log('Combined tags:', allTags);

console.log('\n=== Default Parameters ===');
function createArticle(title, author = 'Anonymous', publishedAt = new Date()) {
    return { title, author, publishedAt };
}

const article1 = createArticle('My Post');
const article2 = createArticle('Another Post', 'Jane Doe');
console.log('Article with defaults:', article1);
console.log('Article with author:', article2);

console.log('\n=== Optional Chaining ===');
const firstCommentAuthor = article.comments?.[0]?.author?.name ?? 'Unknown';
const nonExistentAuthor = article.reviews?.[0]?.author?.name ?? 'Unknown';
console.log('First comment author:', firstCommentAuthor);
console.log('Non-existent review author:', nonExistentAuthor);

console.log('\n=== Nullish Coalescing ===');
const user1 = { displayName: 'John Smith', username: 'johnsmith' };
const user2 = { username: 'janedoe' };
const user3 = {};

const displayName1 = user1.displayName ?? user1.username ?? 'Guest';
const displayName2 = user2.displayName ?? user2.username ?? 'Guest';
const displayName3 = user3.displayName ?? user3.username ?? 'Guest';

console.log('Display names:', { displayName1, displayName2, displayName3 });
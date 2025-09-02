console.log('=== Error Handling Examples ===');

// Custom error types
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetworkError';
    }
}

function validateArticle(article) {
    if (!article.title) {
        throw new ValidationError('Title is required');
    }
    if (article.title.length < 5) {
        throw new ValidationError('Title must be at least 5 characters');
    }
}

// Simulate database save
function mockDatabaseSave(articleData) {
    if (articleData.title === 'network-fail') {
        throw new NetworkError('Database connection failed');
    }
    return { ...articleData, id: Math.random(), saved: true };
}

function saveArticle(articleData) {
    try {
        console.log('Attempting to save article:', articleData.title);
        validateArticle(articleData);
        
        const savedArticle = mockDatabaseSave(articleData);
        console.log('✅ Article saved successfully!', savedArticle.id);
        return savedArticle;
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log('❌ Validation error:', error.message);
        } else if (error instanceof NetworkError) {
            console.log('❌ Network error:', error.message);
        } else {
            console.error('❌ Unexpected error:', error.message);
        }
        return null;
    }
}

console.log('\n=== Testing Error Handling ===');

// Test 1: Valid article
const validArticle = { title: 'My Great Article', content: 'Content here...' };
saveArticle(validArticle);

// Test 2: Missing title
const noTitleArticle = { content: 'Content without title...' };
saveArticle(noTitleArticle);

// Test 3: Title too short
const shortTitleArticle = { title: 'Hi', content: 'Short title...' };
saveArticle(shortTitleArticle);

// Test 4: Network error simulation
const networkFailArticle = { title: 'network-fail', content: 'This will cause network error...' };
saveArticle(networkFailArticle);

console.log('\n=== Advanced Error Handling ===');

function processMultipleArticles(articles) {
    const results = [];
    const errors = [];
    
    for (let i = 0; i < articles.length; i++) {
        try {
            const result = saveArticle(articles[i]);
            if (result) {
                results.push(result);
            }
        } catch (error) {
            errors.push({ index: i, error: error.message });
        }
    }
    
    console.log(`Processed ${articles.length} articles:`);
    console.log(`✅ Successful: ${results.length}`);
    console.log(`❌ Failed: ${errors.length}`);
    
    return { results, errors };
}

const testArticles = [
    { title: 'Good Article One', content: 'Content...' },
    { title: 'Bad', content: 'Too short title...' },
    { title: 'Good Article Two', content: 'More content...' },
    { title: 'network-fail', content: 'Network error...' }
];

processMultipleArticles(testArticles);
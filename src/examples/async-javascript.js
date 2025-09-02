console.log('=== Async JavaScript Examples ===');
console.log('This demonstrates asynchronous programming patterns.');

console.log('\n=== Simulated Promises ===');

// Simulate an API fetch with a Promise
function simulateFetchArticle(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 999) {
                reject(new Error('Article not found'));
            } else {
                const article = {
                    id: id,
                    title: `Article ${id}`,
                    content: 'This is sample content'
                };
                console.log('Article loaded:', article.title);
                resolve(article);
            }
        }, 1000); // Simulate network delay
    });
}

console.log('Fetching article with ID 1...');
simulateFetchArticle(1)
    .then(article => {
        console.log('✅ Success:', article);
        return article;
    })
    .catch(error => {
        console.error('❌ Error:', error.message);
    });

console.log('\n=== Async/Await (Modern Syntax) ===');

async function simulateLoadAndDisplayArticle(id) {
    try {
        console.log(`Loading article ${id}...`);
        const article = await simulateFetchArticle(id);
        console.log('✅ Article displayed:', article.title);
    } catch (error) {
        console.log('❌ Could not load article:', error.message);
    }
}

// Test successful load
simulateLoadAndDisplayArticle(2);

// Test error handling
simulateLoadAndDisplayArticle(999);

console.log('\n=== Multiple Async Operations ===');

async function simulateLoadDashboardData() {
    try {
        console.log('Loading dashboard data...');
        
        // Simulate multiple API calls
        const [articles, stats, comments] = await Promise.all([
            Promise.resolve([{ title: 'Article 1' }, { title: 'Article 2' }]),
            Promise.resolve({ totalViews: 1500, totalLikes: 89 }),
            Promise.resolve([{ author: 'John', text: 'Great post!' }])
        ]);
        
        console.log('✅ Dashboard data loaded:');
        console.log('Articles:', articles);
        console.log('Stats:', stats);
        console.log('Comments:', comments);
    } catch (error) {
        console.error('❌ Dashboard loading failed:', error);
    }
}

simulateLoadDashboardData();

console.log('\n💡 Note: In real apps, these would make actual HTTP requests!');
console.log('⏳ Some operations above are still running asynchronously...');

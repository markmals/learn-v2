const articles = [
    { title: 'First Post', views: 100 },
    { title: 'Second Post', views: 250 },
    { title: 'Third Post', views: 75 }
];

console.log('=== Original Articles ===');
console.log(articles);

// Adding elements
articles.push({ title: 'Fourth Post', views: 0 });
console.log('\n=== After Adding Fourth Post ===');
console.log(articles);

// Finding elements
const popularArticle = articles.find(article => article.views > 200);
const allTitles = articles.map(article => article.title);
const popularArticles = articles.filter(article => article.views > 100);

console.log('\n=== Finding Elements ===');
console.log('Popular article (>200 views):', popularArticle);
console.log('All titles:', allTitles);
console.log('Popular articles (>100 views):', popularArticles);

// Checking conditions
const hasPopularContent = articles.some(article => article.views > 200);
const allHaveViews = articles.every(article => article.views >= 0);

console.log('\n=== Checking Conditions ===');
console.log('Has popular content (>200 views):', hasPopularContent);
console.log('All have views (>=0):', allHaveViews);

// Transforming data
const totalViews = articles.reduce((sum, article) => sum + article.views, 0);

console.log('\n=== Transforming Data ===');
console.log('Total views:', totalViews);

// Sorting (creates a new array to avoid mutating original)
const sortedByViews = [...articles].sort((a, b) => b.views - a.views);

console.log('\n=== Sorting ===');
console.log('Sorted by views (descending):', sortedByViews);
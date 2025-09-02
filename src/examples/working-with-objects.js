const blogPost = {
    title: 'Understanding JavaScript',
    author: 'John Smith',
    publishedAt: new Date(),
    views: 0,
    
    // Methods (functions inside objects)
    incrementViews() {
        // access data on this object using the `this` keyword
        this.views++;
    },
    
    getUrl() {
        return `/posts/${this.title.toLowerCase().replace(/\s+/g, '-')}`;
    }
};

console.log('=== Initial Blog Post ===');
console.log('Title:', blogPost.title);
console.log('Author:', blogPost['author']);
console.log('Views:', blogPost.views);

console.log('\n=== Calling Methods ===');
console.log('Generated URL:', blogPost.getUrl());

blogPost.incrementViews();
console.log('Views after increment:', blogPost.views);

blogPost.incrementViews();
blogPost.incrementViews();
console.log('Views after more increments:', blogPost.views);

console.log('\n=== Adding Properties Dynamically ===');
blogPost.featured = true;
console.log('Featured:', blogPost.featured);

// use function expressions to access `this`
// arrow functions cannot access `this`
blogPost.addTag = function(tag) {
    if (!this.tags) this.tags = [];
    this.tags.push(tag);
};

blogPost.addTag('javascript');
blogPost.addTag('tutorial');
console.log('Tags added:', blogPost.tags);

console.log('\n=== Final Blog Post Object ===');
console.log(blogPost);
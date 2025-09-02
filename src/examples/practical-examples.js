console.log('=== Practical JavaScript Examples ===');
console.log('Real-world patterns for interactive websites');

console.log('\n=== 1. Reading Progress Indicator (simulated) ===');

function simulateReadingProgress() {
    console.log('Setting up reading progress indicator...');
    
    // Simulate different scroll positions
    const scrollPositions = [0, 0.25, 0.5, 0.75, 1.0];
    
    scrollPositions.forEach((progress, index) => {
        setTimeout(() => {
            const percentage = Math.round(progress * 100);
            console.log(`Scroll progress: ${percentage}% - progress bar updated`);
            
            if (progress === 1.0) {
                console.log('🎉 Article fully read!');
            }
        }, index * 500);
    });
}

simulateReadingProgress();

console.log('\n=== 2. Email Validation ===');

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Test email validation
const testEmails = [
    'user@example.com',
    'invalid-email',
    'test@domain.co.uk',
    '@invalid.com',
    'user@domain'
];

testEmails.forEach(email => {
    const isValid = isValidEmail(email);
    const status = isValid ? '✅ Valid' : '❌ Invalid';
    console.log(`${status}: ${email}`);
});

console.log('\n=== 3. Newsletter Signup (simulated) ===');

async function simulateNewsletterSignup(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'error@test.com') {
                reject(new Error('Subscription service unavailable'));
            } else {
                resolve({ success: true, message: 'Subscribed successfully!' });
            }
        }, 1000);
    });
}

async function handleNewsletterSubmit(email) {
    console.log(`Newsletter signup attempted: ${email}`);
    
    if (!isValidEmail(email)) {
        console.log('❌ Invalid email address');
        return;
    }
    
    console.log('Validating... ✅');
    console.log('Subscribing... ⏳');
    
    try {
        const result = await simulateNewsletterSignup(email);
        console.log('✅ Success:', result.message);
        console.log('Form reset and thank you message shown');
    } catch (error) {
        console.log('❌ Error:', error.message);
        console.log('Error message shown to user');
    }
}

// Test newsletter signup
handleNewsletterSubmit('user@example.com');
handleNewsletterSubmit('invalid-email');
handleNewsletterSubmit('error@test.com');

console.log('\n=== 4. Throttled Scroll Handler ===');

let scrollCallCount = 0;
function simulateThrottledScroll() {
    console.log('Setting up throttled scroll handler...');
    
    function throttledScrollHandler() {
        scrollCallCount++;
        console.log(`Throttled scroll event #${scrollCallCount} - updating UI`);
    }
    
    // Simulate rapid scroll events
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            if (i % 3 === 0) { // Only handle every 3rd event (throttled)
                throttledScrollHandler();
            }
        }, i * 50);
    }
}

simulateThrottledScroll();

console.log('\n=== 5. Feature Detection ===');

function checkFeatureSupport() {
    console.log('Checking browser feature support:');
    
    const features = {
        'Local Storage': typeof Storage !== 'undefined',
        'Fetch API': typeof fetch !== 'undefined',
        'Arrow Functions': (() => { try { eval('() => {}'); return true; } catch(e) { return false; } })(),
        'CSS Grid': CSS.supports('display', 'grid'),
        'Intersection Observer': 'IntersectionObserver' in window
    };
    
    Object.entries(features).forEach(([feature, supported]) => {
        const status = supported ? '✅ Supported' : '❌ Not supported';
        console.log(`${status}: ${feature}`);
    });
}

checkFeatureSupport();

console.log('\n💡 Note: These patterns are commonly used in production websites!');
console.log('⏳ Some async operations above are still running...');
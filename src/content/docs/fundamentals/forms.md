---
title: Forms
---

Forms are how users interact with your website—from signing up for newsletters to submitting comments. As a UX designer, you know good forms are crucial for user experience. Let's learn how to build them properly with HTML and make them work with both GET and POST methods.

## Basic Form Structure

Every form needs a `<form>` element and proper labels:

```html
<form action="/submit" method="post">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
    
    <button type="submit">Send Message</button>
</form>
```

**Key principles:**
- Every input needs a `<label>` with a matching `for` attribute
- Use semantic input types (`email`, `url`, `tel`, etc.)
- Include the `name` attribute for server processing
- Use `required` for mandatory fields

## GET vs POST Methods

The `method` attribute determines how data is sent:

### GET Method
```html
<form action="/search" method="get">
    <label for="query">Search:</label>
    <input type="search" id="query" name="q" placeholder="Enter search terms">
    <button type="submit">Search</button>
</form>
```

**When to use GET:**

- Search forms
- Filtering data
- Any read-only operation
- When you want bookmarkable URLs

**What happens:** Data appears in the URL like `?q=search+terms`

### POST Method

```html
<form action="/contact" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" required></textarea>
    
    <button type="submit">Send Message</button>
</form>
```

**When to use POST:**

- Contact forms
- User registration
- File uploads
- Any operation that changes data

**What happens:** Data is sent securely in the request body

## Input Types and Validation

HTML5 provides many input types with built-in validation:

```html
<form action="/signup" method="post">
    <!-- Text inputs -->
    <label for="fullname">Full Name:</label>
    <input type="text" id="fullname" name="fullname" required>
    
    <!-- Email with validation -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <!-- Password -->
    <label for="password">Password:</label>
    <input 
        type="password" 
        id="password" 
        name="password" 
        minlength="8" 
        required
    >
    
    <!-- Number with constraints -->
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="13" max="120" required>
    
    <!-- Date -->
    <label for="birthdate">Birth Date:</label>
    <input type="date" id="birthdate" name="birthdate">
    
    <!-- URL -->
    <label for="website">Website:</label>
    <input type="url" id="website" name="website" placeholder="https://">
    
    <!-- Phone -->
    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone">
    
    <button type="submit">Sign Up</button>
</form>
```

## Form Controls

### Select Dropdowns

```html
<label for="country">Country:</label>
<select id="country" name="country" required>
    <option value="">Choose a country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
</select>
```

### Radio Buttons (Single Choice)

```html
<fieldset>
    <legend>Subscription Type:</legend>
    <label>
        <input type="radio" name="subscription" value="free" checked>
        Free
    </label>
    <label>
        <input type="radio" name="subscription" value="premium">
        Premium
    </label>
    <label>
        <input type="radio" name="subscription" value="enterprise">
        Enterprise
    </label>
</fieldset>
```

### Checkboxes (Multiple Choice)

```html
<fieldset>
    <legend>Newsletter Preferences:</legend>
    <label>
        <input type="checkbox" name="newsletters" value="weekly">
        Weekly Updates
    </label>
    <label>
        <input type="checkbox" name="newsletters" value="monthly">
        Monthly Digest
    </label>
    <label>
        <input type="checkbox" name="newsletters" value="breaking">
        Breaking News
    </label>
</fieldset>
```

## Styling Forms

Make forms look professional and accessible:

```css
form {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background: #f9f9f9;
    border-radius: 8px;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #333;
}

input,
textarea,
select {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    margin-bottom: 1rem;
    transition: border-color 0.2s ease;
}

input:focus,
textarea:focus,
select:focus {
    outline: none;
    border-color: #007acc;
    box-shadow: 0 0 0 3px rgba(0, 122, 204, 0.1);
}

/* Invalid states */
input:invalid,
textarea:invalid,
select:invalid {
    border-color: #e53e3e;
}

input:valid,
textarea:valid,
select:valid {
    border-color: #38a169;
}

button {
    background: #007acc;
    color: white;
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

button:hover {
    background: #005a8a;
}

button:disabled {
    background: #ccc;
    cursor: not-allowed;
}

/* Responsive form layout */
@media (min-width: 768px) {
    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
}
```

## Form Validation

### HTML Validation Attributes

```html
<form action="/register" method="post" novalidate>
    <label for="username">Username:</label>
    <input 
        type="text" 
        id="username" 
        name="username"
        required
        minlength="3"
        maxlength="20"
        pattern="^[a-zA-Z0-9_]+$"
        title="Username can only contain letters, numbers, and underscores"
    >
    
    <label for="email">Email:</label>
    <input 
        type="email" 
        id="email" 
        name="email"
        required
        placeholder="your@email.com"
    >
    
    <label for="password">Password:</label>
    <input 
        type="password" 
        id="password" 
        name="password"
        required
        minlength="8"
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
        title="Password must be at least 8 characters with uppercase, lowercase, and number"
    >
    
    <button type="submit">Register</button>
</form>
```

### Custom Validation Messages

```javascript
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');

emailInput.addEventListener('invalid', (event) => {
    if (emailInput.validity.valueMissing) {
        emailInput.setCustomValidity('Please enter your email address');
    } else if (emailInput.validity.typeMismatch) {
        emailInput.setCustomValidity('Please enter a valid email address');
    }
});

emailInput.addEventListener('input', () => {
    emailInput.setCustomValidity('');
});
```

## Accessibility Best Practices

Make forms usable for everyone:

```html
<form action="/contact" method="post">
    <!-- Required field indication -->
    <label for="name">
        Name <span aria-label="required">*</span>
    </label>
    <input 
        type="text" 
        id="name" 
        name="name" 
        required 
        aria-describedby="name-error"
    >
    <div id="name-error" class="error-message" role="alert"></div>
    
    <!-- Help text -->
    <label for="password">Password</label>
    <input 
        type="password" 
        id="password" 
        name="password"
        aria-describedby="password-help"
        required
    >
    <div id="password-help" class="help-text">
        Must be at least 8 characters with uppercase, lowercase, and number
    </div>
    
    <!-- Grouped controls -->
    <fieldset>
        <legend>Preferred Contact Method</legend>
        <label>
            <input type="radio" name="contact" value="email" checked>
            Email
        </label>
        <label>
            <input type="radio" name="contact" value="phone">
            Phone
        </label>
    </fieldset>
    
    <button type="submit">Submit</button>
</form>
```

## File Uploads

Handle file uploads properly:

```html
<form action="/upload" method="post" enctype="multipart/form-data">
    <label for="avatar">Profile Picture:</label>
    <input 
        type="file" 
        id="avatar" 
        name="avatar"
        accept="image/*"
        required
    >
    
    <label for="resume">Resume (PDF only):</label>
    <input 
        type="file" 
        id="resume" 
        name="resume"
        accept=".pdf"
        required
    >
    
    <button type="submit">Upload Files</button>
</form>
```

## Progressive Enhancement

Start with HTML, enhance with JavaScript:

```html
<form action="/search" method="get" id="search-form">
    <label for="q">Search:</label>
    <input type="search" id="q" name="q" required>
    <button type="submit">Search</button>
    <div id="search-results"></div>
</form>

<script>
    document
        .getElementById('search-form')
        .addEventListener('submit', async (event) => {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const query = formData.get('q');
            
            try {
                const search = new URLSearchParams({ q: query })
                const response = await fetch(`/api/search?${search}`);
                const results = await response.json();
                
                const element = document.getElementById('search-results')
                element.innerHTML = results
                    .map((result) => `<div>${result.title}</div>`)
                    .join('');
            } catch (error) {
                // Fall back to regular form submission
                event.target.submit();
            }
        });
</script>
```

## Testing Your Forms

Always test forms thoroughly:

1. **Keyboard navigation** - Tab through all fields
2. **Screen readers** - Test with accessibility tools
3. **Mobile devices** - Test on small screens
4. **Network issues** - What happens if submission fails?
5. **Edge cases** - Very long inputs, special characters
6. **Multiple submissions** - Prevent accidental double-clicks

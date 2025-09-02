---
title: Responsive Design
---

Responsive design ensures your website looks great and works well on every device—from phones to tablets to desktop computers. As a UX designer, you already think about different screen sizes. Let's learn how to implement responsive design in code.

## The Mobile-First Approach

Start designing for the smallest screen, then enhance for larger ones:

```css
/* Base styles (mobile first) */
.article {
  padding: 1rem;
  font-size: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .article {
    padding: 2rem;
    font-size: 1.125rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .article {
    padding: 3rem;
    font-size: 1.25rem;
  }
}
```

## Viewport Meta Tag

Essential for responsive design - tells browsers how to handle the viewport:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Without this, mobile browsers assume your site is designed for desktop and zoom out.

## Flexible Grid Systems

Use relative units instead of fixed pixels:

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.grid {
  display: grid;
  gap: 2rem;
  
  /* Mobile: 1 column */
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid {
    /* Tablet: 2 columns */
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    /* Desktop: 3 columns */
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Responsive Typography

Typography should scale with screen size:

```css
:root {
  /* Fluid typography using clamp() */
  --text-sm: clamp(0.875rem, 0.8rem + 0.4vw, 1rem);
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.6vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.7vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
}

.article-title {
  font-size: var(--text-2xl);
  line-height: 1.2;
}

.article-body {
  font-size: var(--text-base);
  line-height: 1.6;
  max-width: 65ch; /* Optimal reading width */
}
```

## Responsive Images

Images should adapt to their container:

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Art direction with picture element */
.hero-image {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
}
```

HTML for different image crops:

```html
<picture>
  <source 
    media="(min-width: 1024px)" 
    srcset="hero-desktop.jpg"
  >
  <source 
    media="(min-width: 768px)" 
    srcset="hero-tablet.jpg"
  >
  <img 
    src="hero-mobile.jpg" 
    alt="Article hero image"
    class="hero-image"
  >
</picture>
```

## Container Queries

Style elements based on their container size, not the viewport:

```css
.article-card {
  container-type: inline-size;
  border: 1px solid #ddd;
  padding: 1rem;
}

/* When the card is wider than 300px */
@container (min-width: 300px) {
  .article-card h2 {
    font-size: 1.5rem;
  }
  
  .article-card .meta {
    display: flex;
    justify-content: space-between;
  }
}
```

## Responsive Navigation

Navigation patterns that work across devices:

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-menu {
  display: none;
}

/* Mobile menu toggle */
.nav-toggle {
  display: block;
  background: none;
  border: none;
  font-size: 1.5rem;
}

@media (min-width: 768px) {
  .nav-menu {
    display: flex;
    gap: 2rem;
  }
  
  .nav-toggle {
    display: none;
  }
}

/* When menu is open */
.nav-menu.is-open {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 1rem;
}
```

## Breakpoints Strategy

Use logical breakpoints based on content, not devices:

```css
/* Common breakpoint system */
:root {
  --bp-sm: 576px;   /* Small phones */
  --bp-md: 768px;   /* Tablets */
  --bp-lg: 992px;   /* Small laptops */
  --bp-xl: 1200px;  /* Desktops */
  --bp-xxl: 1400px; /* Large screens */
}

@media (min-width: 576px) { /* ... */ }
@media (min-width: 768px) { /* ... */ }
@media (min-width: 992px) { /* ... */ }
@media (min-width: 1200px) { /* ... */ }
```

## Touch-Friendly Design

Design for touch interactions:

```css
/* Minimum touch target size */
button,
.clickable {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem 1rem;
}

/* Hover effects only on devices that support hover */
@media (hover: hover) {
  button:hover {
    background-color: #007acc;
    transform: translateY(-1px);
  }
}
```

## Performance Considerations

Responsive design affects performance:

```css
/* Hide elements instead of loading them */
.desktop-only {
  display: none;
}

@media (min-width: 1024px) {
  .desktop-only {
    display: block;
  }
}

/* Prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Testing Your Design

Always test on real devices and different screen sizes:

1. **Browser dev tools** - Simulate different devices
2. **Real devices** - Nothing beats testing on actual hardware
3. **Screen readers** - Test with accessibility tools
4. **Different orientations** - Portrait and landscape
5. **Various network speeds** - Test on slow connections

## Common Responsive Patterns

### The Sidebar Pattern
```css
.layout {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .layout {
    grid-template-columns: 250px 1fr;
  }
}
```

### The Card Grid
```css
.card-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

### The Holy Grail Layout
```css
.holy-grail {
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .holy-grail {
    grid-template-columns: 200px 1fr 200px;
  }
  
  .main-content {
    grid-column: 2;
  }
}
```

## Accessibility in Responsive Design

Ensure your responsive design is accessible:

- Use semantic HTML elements
- Maintain focus management in mobile menus
- Ensure adequate color contrast at all sizes
- Test with keyboard navigation
- Provide alternative text for images

## Next Steps

Responsive design is about creating flexible, accessible experiences. Focus on:
- Content-first approach
- Progressive enhancement
- Performance optimization
- Accessibility testing

---
title: CSS
---

CSS (Cascading Style Sheets) brings your HTML to life with visual design. Since you know CSS basics, let's focus on the core concepts that will help you create stunning websites.

## The Box Model

Everything in CSS is a box. Understanding this is crucial:

```css
.article-card {
  width: 300px;          /* Content width */
  padding: 20px;         /* Space inside the box */
  border: 2px solid #ccc; /* Border around the box */
  margin: 10px;          /* Space outside the box */
}
```

**Total width = width + padding + border + margin**
In this case: 300 + 40 + 4 + 20 = 364px

## Selectors

CSS selectors let you target specific elements:

```css
/* Element selector */
h1 { color: blue; }

/* Class selector */
.article-title { font-size: 2rem; }

/* ID selector */
#main-article { background: white; }

/* Descendant selector */
.magazine article h2 { margin-top: 2rem; }

/* Pseudo-class selector */
.button:hover { background: #007acc; }
```

## The Cascade & Specificity

CSS rules "cascade" down, but specificity determines which rule wins:

1. **Inline styles** (highest priority)
2. **IDs** (#main-content)
3. **Classes, attributes, pseudo-classes** (.article, [href], :hover)
4. **Elements** (div, p, h1)

```css
/* These both target the same element */
.article h1 { color: blue; }     /* Specificity: 011 */
h1 { color: red; }               /* Specificity: 001 */

/* Blue wins because class + element > element alone */
```

## Modern Layout: Flexbox

Perfect for one-dimensional layouts:

```css
.article-list {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.article-card {
  flex: 1 1 300px; /* grow, shrink, basis */
  min-width: 0;     /* Prevents overflow */
}
```

Common flexbox patterns:
- `justify-content: space-between` - Spread items apart
- `align-items: center` - Center vertically
- `flex-direction: column` - Stack vertically

## Modern Layout: Grid

Perfect for two-dimensional layouts:

```css
.magazine-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr; /* sidebar, main, sidebar */
  grid-gap: 2rem;
  min-height: 100vh;
}

.feature-article {
  grid-column: 1 / -1; /* Span full width */
}
```

## Responsive Design

Use relative units and media queries:

```css
/* Relative units */
.article {
  font-size: 1.125rem;   /* 18px if base is 16px */
  padding: 2rem;         /* Scales with font size */
  width: 90vw;           /* 90% of viewport width */
  max-width: 65ch;       /* Max 65 characters wide */
}

/* Media queries */
@media (min-width: 768px) {
  .article-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .article-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Color & Typography

```css
.magazine {
  /* Color variables for consistency */
  --primary-color: #1a365d;
  --accent-color: #007acc;
  --text-color: #2d3748;
  --background: #f7fafc;
  
  /* Typography scale */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  
  color: var(--text-color);
  background: var(--background);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
}

.article-title {
  font-size: var(--text-2xl);
  color: var(--primary-color);
  font-weight: 700;
}
```

## Animations & Transitions

Add polish with smooth animations:

```css
.article-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

/* Keyframe animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.article {
  animation: fadeIn 0.6s ease-out;
}
```

## Custom Properties (CSS Variables)

Perfect for themes and consistency:

```css
:root {
  --spacing-unit: 1rem;
  --border-radius: 8px;
  --shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.card {
  padding: calc(var(--spacing-unit) * 1.5);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

/* Dark theme */
[data-theme="dark"] {
  --text-color: #e2e8f0;
  --background: #1a202c;
  --primary-color: #63b3ed;
}
```

## Debugging Tips

When CSS isn't working:

1. **Use browser dev tools** - Inspect elements and see which styles apply
2. **Check the cascade** - Later rules override earlier ones
3. **Verify specificity** - More specific selectors win
4. **Look for typos** - CSS fails silently on invalid properties
5. **Use the box model visualizer** - See padding, borders, margins

## Next Steps

With solid CSS foundations, you can:

- Create responsive layouts that work on all devices
- Build consistent design systems with custom properties
- Add smooth interactions with transitions
- Style your website content beautifully

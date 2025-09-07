# Contributor Guide

## Deno

#### Environment Setup

- Always use Deno 2.x features and APIs
- Use deno.json/deno.jsonc for project configuration
- Never use or create package.json nor tsconfig.json
- Prefer Deno's built-in tools and packages over npm packages when available
- Use the `imports` files in deno.json for dependency management
- Always use explicit file extensions in imports (.ts, .tsx)

#### Testing Requirements

- Run `deno task test` for unit tests
- Use Deno's built-in testing framework (`Deno.test`) for code that doesn't need to be run through the Vite plugin pipeline
- Use Vitest for code that needs to be run through the Vite plugin pipeline, for example React, Solid, Astro, or Svelte code
- For JavaScript framework components, use Testing Library (@testing-library/\*)
- Ensure all new features include corresponding unit tests
- Mock external APIs

#### Code Quality Checks

- Format code with `deno task fmt` before committing
- Run `deno task lint` and fix all info, warnings, and errors
- Type-check with `deno task typecheck`
- Prefer `unknown` over `any` unless absolutely necessary
- Use JSDoc/TSDoc comments for public APIs
- Document important lines of code with a single line comment

#### Common Commands

- Dev server: `deno task dev`
- Build: `deno task build`
- Test: `deno task test`
- Type check: `deno task typecheck`
- Lint: `deno task check`

#### Import Guidelines

- Use bare specifiers with import map for external deps
- Prefer `jsr:@std/*` for standard library
- Use relative imports for local modules
- Prefer import aliases over relative imports for local modules
- Always include file extensions

#### Security Best Practices

- Explicitly specify Deno permissions in scripts
- Never use --allow-all (-A) in production for user scripts (only for npm/jsr packages)
- Validate environment variables at startup using `@std/assert`

#### Debugging Approach

- Use console.log with clear prefixes during development
- Check Deno permissions first when encountering errors
- Verify deno.json `imports` configuration for dependency issues

#### Deno Issues

If you run into any Deno or Vite related issues that you cannot resolve, use the following commands to try resetting the cache:

```sh
find . -type d -name "node_modules" -exec rm -rf {} + && find . -type f -name "deno.lock" -delete
deno clean
deno install --allow-scripts
```

or simply:

```sh
deno task clean
```

## General Rules

**DO NOT** add return type annotations to functions or methods if their return type is `void` or `Promise<void>`. Those return types can be safely inferred.

#### Correctness

- **Remove anything that isn’t used** – delete unused imports, function parameters, and private class members.
- **Exhaust every hook dependency** – always list _all_ external values in React hook dependency arrays.
- **Keep hooks pure** – call React hooks only at the top level of a component (never in loops, conditions, or nested functions).
- **Use only real selectors** – in CSS, reference valid pseudo-classes, pseudo-elements, and type selectors only.

#### Suspicious Code

- **Skip the “any” shortcut** – prefer precise TypeScript types.
- **Hands off `document.cookie`** – manipulating cookies directly is forbidden. Use React Router's cookie utilities instead.

#### Performance

- **Compile regexes once** – declare regular expressions at module scope, not inside hot functions.

#### Style & Consistency

- **Stick to ES modules** – no `require` or other CommonJS patterns.
- **Prefer `import type`** – separate type-only imports.
- **Use the `node:` protocol** – write `import fs from 'node:fs'` rather than bare `'fs'`.
- **Arrays = `T[]`** – use shorthand array syntax consistently.
- **Don’t reassign parameters** – treat function arguments as read-only.
- **Favor `const`** – use `const` over `let` whenever a binding never changes.
- **One `const` per line** – declare variables individually.
- **Skip non-null assertions** – rewrite code so `!` isn’t necessary.
- **Avoid `enum`** – choose unions, objects, or literal types instead.
- **Stick with `trimStart/End`** – don’t use `trimLeft/Right`.
- **Default parameters go last** – never precede required params with optional ones.
- **Self-close when empty** – use `<Component />` instead of `<Component></Component>` when there are no children.
- **No unused template literals** – convert to quotes if you’re not interpolating.
- **Don’t write `substr`** – use `slice` instead.
- **Flatten simple `if` chains** – collapse `else { if … }` when feasible.
- **Export only the component** – in React Router routes, export nothing except the component and the whitelisted helpers (`loader`, `action`, `meta`, etc.).
- **Keep member access simple** – omit `public`, `private`, or `protected`. Use native JavaScript private properties (e.g. `##property`) when you need to make a property private.
- **Leverage `as const`** – assert immutability where appropriate.
- **Kill useless `else` blocks** – when the `if` branch returns or throws, omit the `else`.

## Conversation History

### The Project

You're creating a guide for a UX designer friend build a digital magazine/publication for his wife. The friend is skilled in UX design and Figma but gets lost with complex code and deployment. The magazine needs:

- Unique visual language for each issue
- Interactive pieces (like NYT's interactive articles)
- "Stickers" that act as visual hyperlinks between pieces
- Eventually: user accounts and user-generated stickers

### This Documentation Site

You are creating an Astro Starlight guide for your UX designer friend who is learning web development, incorporating your chosen stack.

The key insight: This isn't just about choosing technologies, but about creating a learning path that respects your friend's existing skills (UX design) while keeping the technical complexity manageable and the creative possibilities unlimited.

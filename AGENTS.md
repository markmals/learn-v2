# Contributor Guide

## Node

#### Environment Setup

- Always use Node LTS (22.18.0) features and APIs
- Use package.json & tsconfig.json for project configuration
- Prefer Node's built-in tools and packages over npm packages when available
- Always use the `node:` namespace when referencing Node built-in packages
- Use package.json for dependency management
- Use mise.toml for developer tool management

#### TypeScript Support

- As of Node 22.18.0, Node supports running TypeScript files without any arguments; this works now: `node my-script.ts`
- Write any build scripts using TypeScript and run them directly with Node instead of attempting to use `ts-node`, `tsx`, `deno`, `bun`, or any other runtime or TypeScript compiler
- Runtime files will still need to pass through the Vite pipeline, so they can continue to be authored with TypeScript
- The only JavaScript files in this project should be rare exceptions, like config files which do not support TypeScript yet or server files for runtimes which do not support TypeScript yet, for example

#### Testing Requirements

- Run `mise run test` for unit tests
- Use Node's built-in testing framework (`node:test`) for code that doesn't need to be run through the Vite plugin pipeline
- Use Vitest for code that needs to be run through the Vite plugin pipeline, for example React, Solid, Astro, or Svelte code
- For JavaScript framework components, use Testing Library (`@testing-library/*`)
- Ensure all new features include corresponding unit tests
- Mock external APIs

#### Code Quality Checks

- Format code with `mise run fmt` before committing
- Run `mise run lint` and fix all info, warnings, and errors
- Type-check with `mise run typecheck`
- Prefer `unknown` over `any` unless absolutely necessary
- Use JSDoc/TSDoc comments for public APIs
- Document important lines of code with a single line comment

#### Common Commands

- Install dependencies: `pnpm install`
- Add dependencies: `pnpm add ...`
- Use Astro commands: `astro ...`
- Dev server: `mise run dev`
- Build: `mise run build`
- Preview: `mise run preview`
- Test: `mise run test`
- Format: `mise run fmt`
- Lint: `mise run lint`
- Type-check: `mise run typecheck`

#### Import Guidelines

- Use `pnpm` for all package and in-project production dependency management
- Prefer `jsr:@std/*` for standard library (install using `pnpm add jsr:@std/fs`, for example)
- Use relative imports for local modules
- Prefer import aliases over relative imports for local modules when aliases are specified in the `tsconfig.json` field `compilerOptions.paths`
- Always use explicit file extensions in imports (e.g. `.ts`, `.tsx`, `.astro`)

#### Security Best Practices

- Validate environment variables at startup using `jsr:@std/assert`

#### Debugging Approach

- Never attempt to run the development server; ask the developer to run the development server to verify changes
- When debugging a tricky issue, add `console.*` statements with clear prefixes (e.g. `[DB_LOADING]: ...`) and ask the developer to run their code and paste back any logs to assist with debugging; **DO NOT** attempt to run long-running processes like development servers or watchers yourself

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

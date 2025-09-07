# Learn! Web Development: Documentation Site

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── AGENTS.md
├── astro.config.ts
├── sidebar.config.ts
├── mise.toml
├── wrangler.toml
├── .prettierrc.toml
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command              | Action                                           |
| :------------------- | :----------------------------------------------- |
| `mise install`       | Installs developer tools                         |
| `pnpm install`       | Installs project dependencies                    |
| `mise run dev`       | Starts local dev server at `localhost:4321`      |
| `mise run build`     | Build your production site to `./dist`           |
| `mise run preview`   | Preview your build locally, before deploying     |
| `mise run fmt`       | Format the entire project                        |
| `mise run typecheck` | Typecheck the entire project                     |
| `astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `astro --help`       | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

import type { StarlightUserConfig } from '@astrojs/starlight/types';

export const sidebar: StarlightUserConfig['sidebar'] = [
    {
        label: 'Introduction',
        items: [
            { label: 'Getting Started', link: 'intro/getting-started' },
        ],
    },
    {
        label: 'Fundamental Concepts',
        items: [
            { label: 'HTTP', link: 'fundamentals/http' },
            { label: 'HTML', link: 'fundamentals/html' },
            { label: 'CSS', link: 'fundamentals/css' },
            { label: 'Responsive Design', link: 'fundamentals/responsive-design' },
            { label: 'Forms', link: 'fundamentals/forms' },
            { label: 'JavaScript', link: 'fundamentals/javascript' },
            { label: 'TypeScript', link: 'fundamentals/typescript' },
            { label: 'Web Components', link: 'fundamentals/web-components' },
            { label: 'Fetch', link: 'fundamentals/fetch' },
        ],
    },
    {
        label: 'Software',
        items: [
            { label: 'The Terminal', link: 'software/terminal' },
            { label: 'Visual Studio Code', link: 'software/vs-code' },
            { label: 'Claude Code', link: 'software/claude-code' },
            { label: 'Git & GitHub', link: 'software/git-github' },
        ],
    },
    {
        label: 'Frameworks',
        items: [
            { label: 'Deno', link: 'frameworks/deno' },
            { label: 'Deno KV', link: 'frameworks/deno-kv' },
            { label: 'Astro', link: 'frameworks/astro' },
            { label: 'Nano Stores', link: 'frameworks/nanostores' },
        ],
    },
    {
        label: 'Deployment',
        items: [
            { label: 'Deno Deploy', link: 'deployment/deno-deploy' },
            { label: 'GitHub Actions', link: 'deployment/github-actions' },
            { label: 'Storyblok', link: 'deployment/storyblok' },
            { label: 'Clerk', link: 'deployment/clerk' },
        ],
    },
    {
        label: 'Tutorials',
        items: [
            { label: 'Address Book', link: 'tutorials/address-book' },
        ],
    },
];

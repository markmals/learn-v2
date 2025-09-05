import type { StarlightUserConfig } from '@astrojs/starlight/types';

export const sidebar: StarlightUserConfig['sidebar'] = [
    {
        label: 'Getting Started',
        items: [
            { label: 'The Terminal', link: 'getting-started/terminal' },
            { label: 'Visual Studio Code', link: 'getting-started/vs-code' },
            { label: 'Mise', link: 'getting-started/mise' },
            { label: 'Bun', link: 'getting-started/bun' },
            { label: 'TypeScript', link: 'getting-started/typescript' },
            { label: 'Biome', link: 'getting-started/biome' },
            { label: 'Fetch', link: 'getting-started/fetch' },
        ],
    },
    {
        label: 'Frameworks',
        items: [
            { label: 'Vite', link: 'frameworks/vite' },
            {
                label: 'React',
                link: 'frameworks/react',
                items: [
                    { label: 'JSX', link: 'frameworks/react/jsx' },
                    { label: 'Conditional Rendering', link: 'frameworks/react/conditionals' },
                    { label: 'Rendering Lists', link: 'frameworks/react/lists' },
                    { label: 'Hooks', link: 'frameworks/react/hooks' },
                    { label: 'Suspense', link: 'frameworks/react/suspense' },
                ],
            },
            {
                label: 'React Router',
                link: 'frameworks/react-router',
                items: [
                    { label: 'Nested Routing', link: 'frameworks/react-router/routing' },
                    { label: 'Server-Side Rendering', link: 'frameworks/react-router/ssr' },
                    { label: 'Loading Data', link: 'frameworks/react-router/loading' },
                    { label: 'Updating Data', link: 'frameworks/react-router/mutations' },
                    { label: 'Streaming Data', link: 'frameworks/react-router/streaming' },
                    {
                        label: 'Sessions & Cookies',
                        link: 'frameworks/react-router/sessions-cookies',
                    },
                    {
                        label: 'Progressive Enhancement',
                        link: 'frameworks/react-router/progressive-enhancement',
                    },
                    // { label: 'Middleware', link: 'frameworks/react-router/middleware' },
                    // { label: 'Server Components', link: 'frameworks/react-router/server-components' },
                    // { label: 'Server Actions', link: 'frameworks/react-router/server-actions' },
                ],
            },
            // { label: 'TanStack Query', link: 'frameworks/tanstack-query' },
            // { label: 'Sprinkles Store', link: 'frameworks/sprinkles-store' },
            {
                label: 'Tailwind CSS',
                link: 'frameworks/tailwind-css',
                items: [
                    { label: 'Colors', link: 'frameworks/tailwind-css/colors' },
                    { label: 'States', link: 'frameworks/tailwind-css/states' },
                    {
                        label: 'Responsive Design',
                        link: 'frameworks/tailwind-css/responsive-design',
                    },
                    { label: 'Dark Mode', link: 'frameworks/tailwind-css/dark-mode' },
                    { label: 'Theme Variables', link: 'frameworks/tailwind-css/theme-vars' },
                    { label: 'Custom Styles', link: 'frameworks/tailwind-css/custom-styles' },
                    // { label: 'Tailwind Plus', link: 'frameworks/tailwind-css/plus' },
                    // { label: 'React Aria Components', link: 'frameworks/tailwind-css/rac' },
                ],
            },
            {
                label: '<code>shadcn</code>',
                link: 'frameworks/shadcn',
                items: [
                    { label: '<code>shadcn/ui</code>', link: 'frameworks/shadcn/ui' },
                    { label: '<code>shadcn</code> Registry', link: 'frameworks/shadcn/registry' },
                    // { label: 'Radix Themes', link: 'frameworks/shadcn/radix-themes' },
                    { label: 'Radix Primitives', link: 'frameworks/shadcn/radix-primitives' },
                    // { label: 'Radix Icons', link: 'frameworks/shadcn/radix-icons' },
                    // { label: 'Radix Colors', link: 'frameworks/shadcn/radix-colors' },
                ],
            },
            {
                label: 'Animations',
                items: [
                    { label: 'Motion', link: 'frameworks/motion' },
                    { label: 'View Transitions', link: 'frameworks/view-transitions' },
                ],
            },
        ],
    },
    {
        label: 'Agentic Development',
        items: [
            { label: 'ChatGPT', link: 'ai-dev/chat-gpt' },
            { label: 'Codex IDE', link: 'ai-dev/ide' },
            { label: 'Codex CLI', link: 'ai-dev/cli' },
            { label: 'Codex Cloud', link: 'ai-dev/cloud' },
            { label: 'AGENTS.md', link: 'ai-dev/agents-md' },
        ],
    },
    {
        label: 'Code Management',
        items: [
            { label: 'Git', link: 'code/git' },
            { label: 'GitHub', link: 'code/github' },
            { label: 'Pull Requests', link: 'code/prs' },
            { label: 'GitHub Issues & Discussions', link: 'code/issues-discussions' },
            { label: 'GitHub Projects', link: 'code/projects' },
            { label: 'GitHub Actions', link: 'code/actions' },
        ],
    },
    {
        label: 'Hosting',
        items: [
            { label: 'Domain Names', link: 'hosting/cloudflare-registrar' },
            { label: 'Edge Server Hosting', link: 'hosting/cloudflare-workers' },
            // { label: 'Container Server Hosting', link: 'hosting/cloudflare-containers' },
            { label: 'Key-Value Store', link: 'hosting/cloudflare-kv' },
            { label: 'Relational Database', link: 'hosting/cloudflare-d1' },
            { label: 'File Storage', link: 'hosting/cloudflare-r2' },
            // { label: 'Delivery Queues', link: 'hosting/cloudflare-queues' },
            // { label: 'Schedule Work', link: 'hosting/cloudflare-cron' },
            // { label: 'Real-Time Multiplayer Collaboration', link: 'hosting/y-partyserver' },
            // { label: 'Private LLM Infrence', link: 'hosting/cloudflare-ai' },
        ],
    },
    {
        label: 'App Platform',
        items: [
            // { label: 'Convex Database', link: 'app-platform/convex-db' },
            // { label: 'Convex File Storage', link: 'app-platform/convex-files' },
            // {
            //     label: 'Convex Real-Time Multiplayer Collaboration',
            //     link: 'app-platform/convex-realtime',
            // },
            // { label: 'Y-Sweet Real-Time Multiplayer Collaboration', link: 'app-platform/y-sweet' },
            // { label: 'Clerk Authentication', link: 'app-platform/clerk' },
            { label: 'Storyblok', link: 'app-platform/storyblok' },
        ],
    },
    // {
    //     label: 'Tutorials',
    //     items: [
    //         { label: 'Address Book', link: 'tutorials/address-book' },
    //     ],
    // },
];

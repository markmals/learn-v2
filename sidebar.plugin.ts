import type { AstroIntegration } from "astro";

export function sidebarWatcher(): AstroIntegration {
    return {
        name: "watch-sidebar",
        hooks: {
            "astro:config:setup"({ addWatchFile, config }) {
                addWatchFile(new URL("sidebar.config.ts", config.root));
            },
        },
    };
}

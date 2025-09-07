import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { sidebar } from "./sidebar.config.ts";

export default defineConfig({
    output: "static",
    integrations: [
        starlight({
            title: "Learn! Web Dev",
            favicon: "./src/assets/graduation-cap.svg",
            logo: {
                src: "./src/assets/graduation-cap.svg",
            },
            sidebar,
            customCss: ["./src/styles/custom.css"],
            expressiveCode: {
                themes: ["github-dark", "github-light"],
                styleOverrides: {
                    codeFontFamily: `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, 
                    Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
                },
            },
            components: {
                Footer: "./src/components/Footer.astro",
            },
        }),
    ],
});

export default {
    async fetch(request, env) {
        // Serve static assets for all requests
        return env.ASSETS.fetch(request);
    },
} satisfies ExportedHandler<Env>;

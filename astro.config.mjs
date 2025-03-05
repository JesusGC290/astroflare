import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
    site: 'https://astroflare.github.io',
    base: '/astroflare/',
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()],
    },
});

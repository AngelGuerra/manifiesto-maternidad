import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.manifiestoporlasmadres.org",
  trailingSlash: "always",
  integrations: [
    alpinejs(),
    sitemap({
      filter: (page) =>
        page !==
          "https://www.manifiestoporlasmadres.org/politica-de-cookies/" &&
        page !==
          "https://www.manifiestoporlasmadres.org/politica-de-privacidad-y-aviso-legal/",
    }),
    tailwind(),
  ],
});

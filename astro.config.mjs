import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://www.manifiestoporlasmadres.org",
	trailingSlash: "always",
	integrations: [
		tailwind(),
		alpinejs(),
		sitemap({
			filter: (page) =>
				page !==
					"https://www.manifiestoporlasmadres.org/politica-de-cookies/" &&
				page !==
					"https://www.manifiestoporlasmadres.org/politica-de-privacidad-y-aviso-legal/",
		}),
	],
});

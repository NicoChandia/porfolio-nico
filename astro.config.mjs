import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  // URL pública: la usan robots.txt y las etiquetas Open Graph
  site: 'https://porfolio-nico.vercel.app',
  integrations: [tailwind(), robotsTxt({ sitemap: false })],
  devToolbar: {
    //SACAR si quiero recuperar la Barra de herramientas de Astro
    enabled: false,
  },
});

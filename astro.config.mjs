import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  devToolbar: {
    //SACAR si quiero recuperar la Barra de herramientas de Astro
    enabled: false,
    site: 'https://nicochandia.github.io/porfolio-nico/',
    base: '/porfolio-nico/' // Solo si es un proyecto dentro de un repositorio
  }
});
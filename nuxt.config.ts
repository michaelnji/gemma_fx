// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/app.css"],
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/sanity',
    'nuxt-seo-utils',
    '@nuxtjs/seo',
    "nuxt-radash",
    // 'nuxt-glaze'
  ],
  icon: {

    customCollections: [
      {
        prefix: 'kira',
        dir: './assets/icons'
      },
    ],
    clientBundle: {
      // list of icons to include in the client bundle
      icons: [

      ],
      // include all custom collections in the client bundle
      includeCustomCollections: true,
    },
  },

  fonts: {
    defaults: {
      weights: [300, 400, 500, 600, 700, 800, 900],
      styles: ['normal', 'italic'],

    },
    // use ~public/fonts for your font files
    provider: 'local'
  },
  app: {
    head: {
      viewport: "height=device-height, width=device-width, initial-scale=1.0",
    }
  },
  runtimeConfig: {
    sanityToken: '',
    public: {
      sanityProjectId: '1h1ec0mp'
    }
  },
  sanity: {
    projectId: '1h1ec0mp',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-12-13',
    token: process.env.NUXT_SANITY_TOKEN,
    perspective: 'published'
  }
})
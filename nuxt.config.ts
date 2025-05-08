// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  fonts: {
    google: {
      families: ['Roboto', 'Open Sans']
    }
  },
  content: {
    highlight: {
      theme: 'github-dark',
    },
  },
  css: [
    '@/assets/css/tailwind.css',
  ]
});
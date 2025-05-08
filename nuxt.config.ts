// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Blog de Viajes',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Explora destinos únicos con nuestro Blog de Viajes' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/assets/images/logo_blog.png' },
      ],
    },
    baseURL: '/Blog-de-Viajes/',
  },
  generate: {
    routes: [
      '/post/blog',
      '/post/about',
      '/post/destinos',
      '/post/contacto',
    ],
  },
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
  fonts: {
    google: {
      families: ['Roboto', 'Open Sans'],
    },
  },
  content: {
    highlight: {
      theme: 'github-dark',
    },
  },
  css: [
    '@/assets/css/tailwind.css',
  ],
});
import tailwindcss from '@tailwindcss/vite';
import { destinations } from './data/destinations';

const destinationRoutes = destinations.map(({ id }) => `/post/destinos/${id}`);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    app: {
        baseURL: '/Blog-de-Viajes/',
        head: {
            title: 'Blog de Viajes',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Explora destinos únicos con nuestro Blog de Viajes'
                },
            ],
            link: [
                {rel: 'icon', type: 'image/svg+xml', href: '/Blog-de-Viajes/assets/images/favicon-viajes.svg'},
            ],
        },
    },
    generate: {
        routes: [
            '/post/blog',
            '/post/about',
            '/post/destinos',
            '/post/contacto',
            ...destinationRoutes,
        ],
    },
    modules: [
        '@nuxt/eslint',
        '@nuxt/icon',
        '@nuxt/fonts',
    ],
    icon: {
        serverBundle: {
            collections: ['mdi'],
        },
        clientBundle: {
            scan: true,
        },
    },
    fonts: {
        google: {
            families: ['Bodoni Moda', 'Atkinson Hyperlegible', 'IBM Plex Mono'],
        },
    },
    vite: {
        plugins: [tailwindcss()],
    },
    css: [
        '@/assets/css/tailwind.css',
    ],
});

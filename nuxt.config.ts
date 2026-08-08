import tailwindcss from '@tailwindcss/vite';
import { destinations } from './data/destinations';
import { articles } from './data/articles';

const destinationRoutes = destinations.map(({ id }) => `/destinations/${id}`);
const articleRoutes = articles.map(({ slug }) => `/blog/${slug}`);
const staticRoutes = ['/blog', '/about', '/destinations', '/contact'];
const localizedRoutes = [...staticRoutes, ...destinationRoutes, ...articleRoutes];
const deploymentBase = '/Blog-de-Viajes';

const legacyRoutes: Record<string, string> = {
    '/post/blog': '/blog',
    '/post/about': '/about',
    '/post/destinos': '/destinations',
    '/post/contacto': '/contact',
    '/post/blog/viajar-con-presupuesto': '/blog/travel-on-a-budget',
    '/post/blog/elegir-proximo-destino': '/blog/choose-your-next-destination',
    '/post/blog/empacar-ligero': '/blog/pack-light',
    '/post/destinos/paris': '/destinations/paris',
    '/post/destinos/roma': '/destinations/rome',
    '/post/destinos/tokio': '/destinations/tokyo',
    '/post/destinos/londres': '/destinations/london',
    '/post/destinos/nueva-york': '/destinations/new-york',
    '/post/destinos/barcelona': '/destinations/barcelona',
};
const legacyRedirects = Object.fromEntries(
    Object.entries(legacyRoutes).flatMap(([from, to]) => [
        [from, {redirect: {to: `${deploymentBase}${to}`, statusCode: 301 as const}}],
        [`/en${from}`, {redirect: {to: `${deploymentBase}/en${to}`, statusCode: 301 as const}}],
    ]),
);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    app: {
        baseURL: `${deploymentBase}/`,
        head: {
            title: 'Blog de Viajes',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
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
            '/sitemap.xml',
            ...localizedRoutes,
            ...localizedRoutes.map((route) => `/en${route}`),
            ...Object.keys(legacyRedirects),
        ],
    },
    routeRules: legacyRedirects,
    modules: [
        '@nuxtjs/i18n',
        '@nuxt/eslint',
        '@nuxt/icon',
        '@nuxt/fonts',
    ],
    i18n: {
        strategy: 'prefix_except_default',
        defaultLocale: 'es',
        baseUrl: 'https://kevin0018.github.io',
        langDir: 'locales',
        locales: [
            {code: 'es', language: 'es-ES', name: 'Español', file: 'es.json'},
            {code: 'en', language: 'en-GB', name: 'English', file: 'en.json'},
        ],
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'travel_blog_locale',
            redirectOn: 'root',
            fallbackLocale: 'es',
        },
        bundle: {
            optimizeTranslationDirective: false,
        },
    },
    icon: {
        serverBundle: {
            collections: ['mdi'],
        },
        clientBundle: {
            scan: true,
        },
    },
    fonts: {
        families: [
            {name: 'Bodoni Moda', provider: 'google'},
            {name: 'Atkinson Hyperlegible', provider: 'google'},
            {name: 'IBM Plex Mono', provider: 'google'},
        ],
    },
    vite: {
        plugins: [tailwindcss()],
    },
    css: [
        '@/assets/css/tailwind.css',
    ],
});

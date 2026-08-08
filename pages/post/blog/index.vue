<template>
    <section class="bg-spain-paper px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div class="mx-auto max-w-[90rem]">
            <header class="grid gap-8 border-b border-spain-sand pb-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.75fr)] lg:items-end">
                <div>
                    <p class="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-spain-red">
                        Notas para viajar mejor
                    </p>
                    <h1 class="mt-4 max-w-4xl text-6xl font-bold leading-[0.92] text-spain-wine sm:text-7xl lg:text-8xl">
                        Antes de cerrar la maleta
                    </h1>
                </div>
                <div class="border-l-2 border-spain-yellow pl-6">
                    <p class="text-lg leading-8 text-spain-ink/75">
                        Decisiones pequeñas que hacen un viaje más ligero: elegir destino, ordenar el presupuesto y llevar solo lo necesario.
                    </p>
                    <p class="mt-5 font-mono text-xs uppercase tracking-wider text-spain-ink/50">
                        Archivo · {{ posts.length }} lecturas
                    </p>
                </div>
            </header>

            <article class="relative mt-12 grid overflow-hidden border-b border-spain-sand pb-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:items-stretch">
                <figure class="relative min-h-[24rem] overflow-hidden rounded-t-[2rem] bg-spain-ink lg:min-h-[36rem] lg:rounded-l-[2rem] lg:rounded-tr-none">
                    <img
                        :src="`${baseURL}${featuredPost.imagen}`"
                        :alt="featuredPost.alt"
                        width="960"
                        height="720"
                        fetchpriority="high"
                        decoding="async"
                        class="absolute inset-0 h-full w-full object-cover"
                    >
                    <figcaption class="absolute bottom-4 left-4 z-10 rounded-full bg-spain-ink/75 px-3 py-1 text-xs text-white/75">
                        Foto de
                        <a :href="featuredPost.creditoAutorUrl" target="_blank" rel="noopener noreferrer" class="relative z-20 underline hover:text-spain-yellow">{{ featuredPost.autor }}</a>
                        en
                        <a :href="featuredPost.creditoUnsplashUrl" target="_blank" rel="noopener noreferrer" class="relative z-20 underline hover:text-spain-yellow">Unsplash</a>
                    </figcaption>
                </figure>

                <div class="flex flex-col justify-between bg-spain-wine p-7 text-white sm:p-10 lg:p-12">
                    <div>
                        <div class="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-spain-yellow">
                            <span>Lectura destacada</span>
                            <span aria-hidden="true" class="h-px flex-1 bg-spain-yellow/40"/>
                            <span>{{ featuredPost.categoria }}</span>
                        </div>
                        <h2 class="mt-8 text-4xl font-bold leading-tight sm:text-5xl">
                            {{ featuredPost.titulo }}
                        </h2>
                        <p class="mt-5 text-lg leading-8 text-white/75">
                            {{ featuredPost.resumen }}
                        </p>
                    </div>
                    <nuxt-link
                        :to="`/post/blog/${featuredPost.slug}`"
                        :aria-label="`Leer ${featuredPost.titulo}`"
                        class="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-spain-yellow px-6 py-3 font-semibold text-spain-ink transition-colors after:absolute after:inset-0 after:content-[''] hover:bg-white"
                    >
                        Leer artículo
                        <Icon name="mdi:arrow-right" class="h-5 w-5"/>
                    </nuxt-link>
                </div>
            </article>

            <div class="mt-2">
                <article
                    v-for="(post, index) in remainingPosts"
                    :key="post.slug"
                    class="relative grid gap-6 border-b border-spain-sand py-10 sm:grid-cols-[12rem_minmax(0,1fr)_auto] sm:items-center lg:grid-cols-[16rem_minmax(0,1fr)_auto]"
                >
                    <img
                        :src="`${baseURL}${post.imagen}`"
                        :alt="post.alt"
                        width="480"
                        height="320"
                        loading="lazy"
                        decoding="async"
                        class="aspect-[3/2] w-full rounded-2xl object-cover"
                    >
                    <div>
                        <p class="font-mono text-xs font-semibold uppercase tracking-wider text-spain-red">
                            {{ post.categoria }} · Nota {{ String(index + 2).padStart(2, "0") }}
                        </p>
                        <h2 class="mt-3 max-w-3xl text-3xl font-bold text-spain-wine sm:text-4xl">
                            {{ post.titulo }}
                        </h2>
                        <p class="mt-3 max-w-2xl leading-7 text-spain-ink/70">{{ post.resumen }}</p>
                        <p class="relative z-10 mt-3 text-xs text-spain-ink/50">
                            Foto de
                            <a :href="post.creditoAutorUrl" target="_blank" rel="noopener noreferrer" class="underline hover:text-spain-red">{{ post.autor }}</a>
                            en
                            <a :href="post.creditoUnsplashUrl" target="_blank" rel="noopener noreferrer" class="underline hover:text-spain-red">Unsplash</a>
                        </p>
                    </div>
                    <nuxt-link
                        :to="`/post/blog/${post.slug}`"
                        :aria-label="`Leer ${post.titulo}`"
                        class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-spain-red text-spain-red transition-colors after:absolute after:inset-0 after:content-[''] hover:bg-spain-red hover:text-white"
                    >
                        <Icon name="mdi:arrow-top-right" class="h-5 w-5"/>
                    </nuxt-link>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { articles } from "~/data/articles";
import { toSiteUrl } from "~/utils/site";

const { app: { baseURL } } = useRuntimeConfig();
const posts = articles;
const featuredPost = posts[0]!;
const remainingPosts = posts.slice(1);

useSeoMeta({
    title: "Consejos y notas de viaje · Blog de Viajes",
    description: "Artículos prácticos para elegir destino, preparar el presupuesto y viajar con un equipaje más ligero.",
    ogTitle: "Consejos y notas de viaje",
    ogDescription: "Artículos prácticos para preparar viajes con mejores decisiones.",
    ogImage: toSiteUrl(articles[0]?.imagen),
    ogType: "website",
    twitterCard: "summary_large_image",
});

useJsonLd({
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Notas para viajar mejor",
    url: toSiteUrl("post/blog"),
    blogPost: articles.map((article) => ({
        "@type": "BlogPosting",
        headline: article.titulo,
        url: toSiteUrl(`post/blog/${article.slug}`),
    })),
});
</script>

<style scoped>
/* Hallmark · pre-emit critique: P5 H5 E4 S5 R4 V5 · genre: editorial travel notebook · macrostructure: editorial index · design-system: design.md · designed-as-app */
</style>

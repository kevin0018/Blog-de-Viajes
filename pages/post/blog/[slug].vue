<template>
    <article class="bg-spain-paper px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div class="mx-auto max-w-5xl">
            <nuxt-link
                to="/post/blog"
                class="inline-flex items-center gap-2 font-semibold text-spain-red transition-colors hover:text-spain-wine"
            >
                <Icon name="mdi:arrow-left" class="h-5 w-5"/>
                Volver al blog
            </nuxt-link>

            <header class="mt-10 max-w-4xl">
                <p class="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-spain-red">
                    {{ article.categoria }}
                </p>
                <h1 class="mt-4 text-4xl font-bold leading-tight text-spain-wine sm:text-5xl lg:text-6xl">
                    {{ article.titulo }}
                </h1>
                <p class="mt-6 max-w-3xl text-lg leading-8 text-spain-ink/75">
                    {{ article.introduccion }}
                </p>
            </header>

            <figure class="mt-12 overflow-hidden rounded-2xl border border-spain-sand bg-spain-sand/30">
                <img
                    :src="`${baseURL}${article.imagen}`"
                    :alt="article.alt"
                    width="1200"
                    height="675"
                    fetchpriority="high"
                    decoding="async"
                    class="max-h-[36rem] w-full object-cover"
                >
                <figcaption class="px-5 py-3 text-xs text-spain-ink/65">
                    Foto de
                    <a
                        :href="article.creditoAutorUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline transition-colors hover:text-spain-red"
                    >
                        {{ article.autor }}
                    </a>
                    en
                    <a
                        :href="article.creditoUnsplashUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline transition-colors hover:text-spain-red"
                    >
                        Unsplash
                    </a>
                </figcaption>
            </figure>

            <div class="mx-auto mt-14 max-w-3xl space-y-12">
                <section v-for="section in article.secciones" :key="section.titulo">
                    <h2 class="text-3xl font-bold text-spain-wine">{{ section.titulo }}</h2>
                    <div class="mt-5 space-y-4 text-base leading-8 text-spain-ink/80 sm:text-lg">
                        <p v-for="paragraph in section.parrafos" :key="paragraph">
                            {{ paragraph }}
                        </p>
                    </div>
                    <ul v-if="section.puntos" class="mt-6 grid gap-3">
                        <li
                            v-for="point in section.puntos"
                            :key="point"
                            class="flex gap-3 rounded-xl border border-spain-sand bg-spain-yellow/10 px-4 py-3 leading-7"
                        >
                            <Icon name="mdi:map-marker-outline" class="mt-1 h-5 w-5 shrink-0 text-spain-red"/>
                            <span>{{ point }}</span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import { findArticleBySlug } from "~/data/articles";

const route = useRoute();
const { app: { baseURL } } = useRuntimeConfig();
const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug;
const article = findArticleBySlug(slug ?? "");

if (!article) {
    throw createError({
        statusCode: 404,
        statusMessage: "Artículo no encontrado",
    });
}

useSeoMeta({
    title: `${article.titulo} · Blog de Viajes`,
    description: article.resumen,
    ogTitle: article.titulo,
    ogDescription: article.resumen,
    ogImage: `${baseURL}${article.imagen}`,
    ogType: "article",
});
</script>

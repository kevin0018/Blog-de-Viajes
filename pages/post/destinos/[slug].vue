<template>
    <article class="bg-spain-paper px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div class="mx-auto max-w-[90rem]">
            <nuxt-link
                to="/post/destinos"
                class="inline-flex items-center gap-2 font-semibold text-spain-red transition-colors hover:text-spain-wine"
            >
                <Icon name="mdi:arrow-left" class="h-5 w-5"/>
                Volver a destinos
            </nuxt-link>

            <div class="mt-10 grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:items-end">
                <figure class="relative min-h-[28rem] overflow-hidden rounded-3xl bg-spain-ink lg:min-h-[40rem]">
                    <img
                        :src="`${baseURL}${destination.imagen}`"
                        :alt="destination.alt"
                        :style="{ objectPosition: destination.posicionImagen }"
                        width="1200"
                        height="900"
                        fetchpriority="high"
                        decoding="async"
                        class="absolute inset-0 h-full w-full object-cover"
                    >
                    <div class="absolute inset-0 bg-gradient-to-t from-spain-ink/65 via-transparent to-transparent"/>
                    <figcaption class="absolute bottom-5 left-5 text-xs text-white/75">
                        Foto de
                        <a :href="destination.creditoAutorUrl" target="_blank" rel="noopener noreferrer" class="underline hover:text-spain-yellow">
                            {{ destination.autor }}
                        </a>
                        en
                        <a :href="destination.creditoUnsplashUrl" target="_blank" rel="noopener noreferrer" class="underline hover:text-spain-yellow">
                            Unsplash
                        </a>
                    </figcaption>
                </figure>

                <header class="min-w-0 pb-3">
                    <p class="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-spain-red">
                        {{ destination.pais }}
                    </p>
                    <h1 class="mt-4 min-w-0 [overflow-wrap:anywhere] text-5xl font-bold leading-none text-spain-wine sm:text-6xl lg:text-7xl">
                        {{ destination.nombre }}
                    </h1>
                    <p class="mt-6 max-w-2xl text-lg leading-8 text-spain-ink/75">
                        {{ destination.descripcion }}
                    </p>

                    <dl class="mt-8 grid grid-cols-2 gap-3">
                        <div class="rounded-2xl border border-spain-sand bg-spain-yellow/10 p-4">
                            <dt class="font-mono text-xs uppercase tracking-wider text-spain-red">Estancia ideal</dt>
                            <dd class="mt-2 font-semibold">{{ destination.estancia }}</dd>
                        </div>
                        <div class="rounded-2xl border border-spain-sand bg-spain-yellow/10 p-4">
                            <dt class="font-mono text-xs uppercase tracking-wider text-spain-red">Mejor momento</dt>
                            <dd class="mt-2 font-semibold">{{ destination.mejorEpoca }}</dd>
                        </div>
                    </dl>
                </header>
            </div>

            <section class="mx-auto mt-20 max-w-5xl border-t border-spain-sand pt-12">
                <h2 class="text-3xl font-bold text-spain-wine sm:text-4xl">Tres puntos para empezar la ruta</h2>
                <ol class="mt-8 grid gap-5 lg:grid-cols-3">
                    <li
                        v-for="(plan, index) in destination.planes"
                        :key="plan"
                        class="rounded-2xl border border-spain-sand bg-spain-yellow/10 p-6"
                    >
                        <span class="font-mono text-xs font-semibold text-spain-red">Parada {{ index + 1 }}</span>
                        <p class="mt-4 leading-7 text-spain-ink/80">{{ plan }}</p>
                    </li>
                </ol>
            </section>
        </div>
    </article>
</template>

<script setup lang="ts">
import { findDestinationBySlug } from "~/data/destinations";

const route = useRoute();
const { app: { baseURL } } = useRuntimeConfig();
const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug;
const destination = findDestinationBySlug(slug ?? "");

if (!destination) {
    throw createError({ statusCode: 404, statusMessage: "Destino no encontrado" });
}

useSeoMeta({
    title: `${destination.nombre} · Blog de Viajes`,
    description: destination.descripcion,
    ogTitle: `Guía de ${destination.nombre}`,
    ogDescription: destination.descripcion,
    ogImage: `${baseURL}${destination.imagen}`,
    ogType: "article",
});
</script>

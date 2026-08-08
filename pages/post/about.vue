<template>
    <article class="bg-spain-paper px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div class="mx-auto max-w-[90rem]">
            <header class="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(24rem,1.3fr)] lg:items-start">
                <div class="lg:sticky lg:top-24">
                    <p class="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-spain-red">
                        Detrás del proyecto
                    </p>
                    <h1 class="mt-4 text-6xl font-bold leading-[0.9] text-spain-wine sm:text-7xl">
                        Viajar también es diseñar decisiones
                    </h1>
                </div>

                <div class="max-w-3xl border-l-2 border-spain-yellow pl-6 sm:pl-10">
                    <p class="text-2xl leading-9 text-spain-ink sm:text-3xl sm:leading-[1.35]">
                        Soy Kevin, desarrollador de este cuaderno digital. Lo construí para explorar cómo el contenido, la interfaz y una utilidad real pueden convivir en un proyecto pequeño.
                    </p>
                    <p class="mt-8 text-lg leading-8 text-spain-ink/70">
                        No pretende sustituir una guía exhaustiva. Cada destino ofrece un punto de partida y un planificador que permite adaptar, guardar y compartir la ruta desde el navegador.
                    </p>
                </div>
            </header>

            <figure class="relative mt-16 min-h-[28rem] overflow-hidden rounded-[2rem] bg-spain-ink lg:min-h-[42rem]">
                <img
                    :src="`${baseURL}assets/images/about.jpg`"
                    alt="Persona contemplando un paisaje de montaña al atardecer"
                    width="1920"
                    height="1080"
                    fetchpriority="high"
                    decoding="async"
                    class="absolute inset-0 h-full w-full object-cover"
                >
                <div class="absolute inset-0 bg-gradient-to-r from-spain-ink/65 via-transparent to-transparent"/>
                <blockquote class="absolute bottom-8 left-6 max-w-lg text-3xl font-bold leading-tight text-white sm:bottom-12 sm:left-12 sm:text-4xl">
                    “Primero entender el viaje. Después decidir qué merece estar en pantalla.”
                </blockquote>
                <figcaption class="absolute bottom-4 right-5 text-xs text-white/70">
                    Foto de
                    <a href="https://unsplash.com/es/@urban_vintage" target="_blank" rel="noopener noreferrer" class="underline hover:text-spain-yellow">Urban Vintage</a>
                    en Unsplash
                </figcaption>
            </figure>

            <section class="mt-20 grid gap-10 border-t border-spain-sand pt-12 lg:grid-cols-[minmax(16rem,0.6fr)_minmax(0,1.4fr)]">
                <div>
                    <p class="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-spain-red">Cómo está construido</p>
                    <h2 class="mt-4 text-4xl font-bold text-spain-wine sm:text-5xl">Del contenido al producto</h2>
                </div>

                <ol class="border-l border-spain-sand">
                    <li v-for="(step, index) in process" :key="step.title" class="relative border-b border-spain-sand pb-8 pl-8 pt-1 first:pt-0 last:border-b-0">
                        <span class="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-spain-yellow font-mono text-[0.65rem] font-bold text-spain-ink">
                            {{ index + 1 }}
                        </span>
                        <h3 class="text-2xl font-bold">{{ step.title }}</h3>
                        <p class="mt-3 max-w-2xl leading-7 text-spain-ink/70">{{ step.copy }}</p>
                    </li>
                </ol>
            </section>

            <section class="mt-20 grid gap-8 bg-spain-wine px-6 py-10 text-white sm:px-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-14 lg:py-12">
                <div>
                    <h2 class="text-4xl font-bold sm:text-5xl">¿Quieres recorrerlo?</h2>
                    <p class="mt-4 max-w-2xl text-lg leading-8 text-white/70">
                        Empieza por una ciudad, construye tu itinerario y comprueba cómo responde el proyecto en móvil y escritorio.
                    </p>
                </div>
                <div class="flex flex-wrap gap-3">
                    <nuxt-link to="/post/destinos" class="inline-flex items-center gap-2 rounded-full bg-spain-yellow px-6 py-3 font-semibold text-spain-ink transition-colors hover:bg-white">
                        Explorar destinos
                        <Icon name="mdi:arrow-right" class="h-5 w-5"/>
                    </nuxt-link>
                    <nuxt-link to="/post/contacto" class="rounded-full border border-white/30 px-6 py-3 font-semibold transition-colors hover:border-white">
                        Contactar
                    </nuxt-link>
                </div>
            </section>
        </div>
    </article>
</template>

<script setup lang="ts">
const { app: { baseURL } } = useRuntimeConfig();

const process = [
    { title: "Contenido tipado", copy: "Artículos, destinos y paradas viven en fuentes de datos compartidas. Las páginas consumen el mismo contenido sin duplicarlo." },
    { title: "Interacción local", copy: "El itinerario se puede ordenar, recuperar y compartir sin cuentas ni seguimiento. El estado permanece bajo el control del navegador." },
    { title: "Entrega verificable", copy: "Lint, comprobación de tipos y generación estática forman parte del flujo para que la demo publicada corresponda con el código revisado." },
] as const;

useSeoMeta({
    title: "Sobre el proyecto · Blog de Viajes",
    description: "La historia, el proceso y las decisiones técnicas detrás de Blog de Viajes, un proyecto de Kevin Hernández.",
});
</script>

<style scoped>
/* Hallmark · pre-emit critique: P5 H5 E4 S5 R5 V4 · genre: editorial travel notebook · macrostructure: project letter · design-system: design.md · designed-as-app */
</style>

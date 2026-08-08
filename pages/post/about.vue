<template>
    <article class="bg-spain-paper px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div class="mx-auto max-w-[90rem]">
            <header class="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(24rem,1.3fr)] lg:items-start">
                <div class="lg:sticky lg:top-24">
                    <p class="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-spain-red">
                        {{ $t('about.kicker') }}
                    </p>
                    <h1 class="mt-4 text-[2.8rem] font-bold leading-[0.94] text-spain-wine sm:text-7xl">
                        {{ $t('about.title') }}
                    </h1>
                </div>

                <div class="max-w-3xl border-l-2 border-spain-yellow pl-6 sm:pl-10">
                    <p class="text-xl leading-8 text-spain-ink sm:text-3xl sm:leading-[1.35]">
                        {{ $t('about.lead') }}
                    </p>
                    <p class="mt-8 text-lg leading-8 text-spain-ink/70">
                        {{ $t('about.copy') }}
                    </p>
                </div>
            </header>

            <figure class="relative mt-12 min-h-[24rem] overflow-hidden rounded-[1.5rem] bg-spain-ink sm:mt-16 sm:min-h-[28rem] lg:min-h-[42rem] lg:rounded-[2rem]">
                <picture>
                    <source type="image/avif" :srcset="`${baseURL}assets/images/about-960.avif 960w, ${baseURL}assets/images/about-1440.avif 1440w, ${baseURL}assets/images/about.avif 1920w`" sizes="100vw">
                    <source type="image/webp" :srcset="`${baseURL}assets/images/about-960.webp 960w, ${baseURL}assets/images/about-1440.webp 1440w, ${baseURL}assets/images/about.webp 1920w`" sizes="100vw">
                    <img
                        :src="`${baseURL}assets/images/about.webp`"
                        :alt="$t('about.imageAlt')"
                        width="1920"
                        height="1275"
                        fetchpriority="high"
                        decoding="async"
                        class="absolute inset-0 h-full w-full object-cover"
                    >
                </picture>
                <div class="absolute inset-0 bg-gradient-to-r from-spain-ink/65 via-transparent to-transparent"/>
                <blockquote class="absolute bottom-12 left-5 right-5 max-w-lg text-2xl font-bold leading-tight text-white sm:bottom-12 sm:left-12 sm:right-auto sm:text-4xl">
                    {{ $t('about.quote') }}
                </blockquote>
                <figcaption class="absolute bottom-4 right-5 text-xs text-white/70">
                    {{ $t('common.photoBy') }}
                    <a href="https://unsplash.com/es/@urban_vintage" target="_blank" rel="noopener noreferrer" class="underline hover:text-spain-yellow">Urban Vintage</a>
                    {{ $t('common.on') }} Unsplash
                </figcaption>
            </figure>

            <section class="mt-20 grid gap-10 border-t border-spain-sand pt-12 lg:grid-cols-[minmax(16rem,0.6fr)_minmax(0,1.4fr)]">
                <div>
                    <h2 class="text-4xl font-bold text-spain-wine sm:text-5xl">{{ $t('about.process') }}</h2>
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
                    <h2 class="text-4xl font-bold sm:text-5xl">{{ $t('about.ctaTitle') }}</h2>
                    <p class="mt-4 max-w-2xl text-lg leading-8 text-white/70">
                        {{ $t('about.ctaCopy') }}
                    </p>
                </div>
                <div class="flex flex-wrap gap-3">
                    <nuxt-link :to="localePath('/post/destinos')" class="inline-flex items-center gap-2 rounded-full bg-spain-yellow px-6 py-3 font-semibold text-spain-ink transition-colors hover:bg-spain-paper">
                        {{ $t('about.explore') }}
                        <Icon name="mdi:arrow-right" class="h-5 w-5"/>
                    </nuxt-link>
                    <nuxt-link :to="localePath('/post/contacto')" class="rounded-full border border-white/30 px-6 py-3 font-semibold transition-colors hover:border-white">
                        {{ $t('about.contact') }}
                    </nuxt-link>
                </div>
            </section>
        </div>
    </article>
</template>

<script setup lang="ts">
import { toSiteUrl } from "~/utils/site";

const { app: { baseURL } } = useRuntimeConfig();
const localePath = useLocalePath();
const {locale, t} = useI18n();

const process = computed(() => [1, 2, 3].map((step) => ({title: t(`about.step${step}Title`), copy: t(`about.step${step}Copy`)})));

useSeoMeta({
    title: computed(() => locale.value === "en" ? "About the project · Travel Journal" : "Sobre el proyecto · Blog de Viajes"),
    description: computed(() => locale.value === "en" ? "The story, process and technical decisions behind Travel Journal, a project by Kevin Hernández." : "La historia, el proceso y las decisiones técnicas detrás de Blog de Viajes, un proyecto de Kevin Hernández."),
    ogTitle: computed(() => locale.value === "en" ? "About Travel Journal" : "Sobre Blog de Viajes"),
    ogDescription: computed(() => locale.value === "en" ? "The product process and decisions behind the project." : "El proceso y las decisiones de producto detrás del proyecto."),
    ogImage: toSiteUrl("assets/images/about.webp"),
    ogType: "website",
    twitterCard: "summary_large_image",
});

useJsonLd({
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Sobre el proyecto",
    url: toSiteUrl("post/about"),
    author: { "@type": "Person", name: "Kevin Hernández", url: "https://github.com/kevin0018" },
});
</script>

<style scoped>
/* Hallmark · pre-emit critique: P5 H5 E4 S5 R5 V4 · genre: editorial travel notebook · macrostructure: project letter · design-system: design.md · designed-as-app */
</style>

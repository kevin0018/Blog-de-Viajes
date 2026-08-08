<template>
    <section class="contact-stage relative z-20 flex items-start px-4 pb-20 pt-28 sm:px-6 lg:items-center lg:px-12">
        <div class="mx-auto grid min-w-0 w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div class="min-w-0 text-white">
                <h1 class="max-w-xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                    {{ $t('contact.title') }}
                </h1>
                <p class="mt-5 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
                    {{ $t('contact.lead') }}
                </p>
            </div>

            <aside class="w-full min-w-0 rounded-2xl border border-spain-yellow/50 bg-spain-paper/95 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
                <h2 class="text-2xl font-bold text-spain-wine sm:text-3xl">{{ $t('contact.cardTitle') }}</h2>
                <p class="mt-3 text-sm leading-6 text-spain-ink/70 sm:text-base">
                    {{ $t('contact.cardCopy') }}
                </p>

                <div class="mt-8 grid gap-4">
                    <a
                        href="https://github.com/kevin0018"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center gap-2 rounded-md bg-spain-red px-6 py-3 font-semibold text-white transition-colors hover:bg-spain-wine"
                    >
                        <Icon name="mdi:github" class="h-5 w-5"/>
                        {{ $t('contact.profile') }}
                    </a>
                    <a
                        href="https://github.com/kevin0018/Blog-de-Viajes/issues/new"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center gap-2 rounded-md border border-spain-red px-6 py-3 font-semibold text-spain-red transition-colors hover:bg-spain-yellow/20"
                    >
                        <Icon name="mdi:map-marker-plus-outline" class="h-5 w-5"/>
                        {{ $t('contact.suggest') }}
                    </a>
                </div>
            </aside>
        </div>
    </section>
</template>

<script setup lang="ts">
import { toSiteUrl } from "~/utils/site";
const {locale} = useI18n();

useSeoMeta({
    title: computed(() => locale.value === "en" ? "Contact and collaboration · Travel Journal" : "Contacto y colaboración · Blog de Viajes"),
    description: computed(() => locale.value === "en" ? "Review the code, suggest a destination or contact Kevin Hernández through GitHub." : "Consulta el código, propón un destino o contacta con Kevin Hernández a través de GitHub."),
    ogTitle: computed(() => locale.value === "en" ? "Contact and collaboration" : "Contacto y colaboración"),
    ogDescription: computed(() => locale.value === "en" ? "Open source, destination suggestions and conversation about the project." : "Código abierto, propuestas de destinos y conversación sobre el proyecto."),
    ogImage: toSiteUrl("assets/images/header-bg-1920.webp"),
    ogType: "website",
    twitterCard: "summary_large_image",
});

useJsonLd({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacto y colaboración",
    url: toSiteUrl("post/contacto"),
});
</script>

<style scoped>
/* Hallmark · pre-emit critique: P4 H4 E4 S4 R5 V4 · genre: editorial travel notebook · macrostructure: split contact stage · design-system: design.md · designed-as-app */

.contact-stage {
    min-height: max(100vh, 64rem);
    margin-top: calc(-1 * max(100vh, 64rem));
}

@media (min-width: 64rem) {
    .contact-stage {
        min-height: max(100vh, 46rem);
        margin-top: calc(-1 * max(100vh, 46rem));
    }
}
</style>

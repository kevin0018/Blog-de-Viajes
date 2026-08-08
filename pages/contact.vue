<template>
    <section class="contact-stage relative z-20 flex items-center px-4 pb-12 pt-24 sm:px-6 sm:pb-16 lg:px-12">
        <div class="mx-auto grid w-full min-w-0 max-w-md items-center gap-7 sm:max-w-xl lg:max-w-6xl lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div class="min-w-0 text-center text-white lg:text-left">
                <h1 class="mx-auto max-w-xl text-4xl font-bold leading-tight sm:text-5xl lg:mx-0 lg:text-6xl">
                    {{ $t('contact.title') }}
                </h1>
                <p class="mx-auto mt-5 max-w-lg text-base leading-7 text-white/80 sm:text-lg lg:mx-0">
                    {{ $t('contact.lead') }}
                </p>
            </div>

            <aside class="w-full min-w-0 rounded-[1.75rem] border border-spain-yellow/50 bg-spain-paper/95 p-6 text-center shadow-2xl backdrop-blur-sm sm:p-8 lg:text-left">
                <h2 class="text-2xl font-bold text-spain-wine sm:text-3xl">{{ $t('contact.cardTitle') }}</h2>
                <p class="mt-3 text-sm leading-6 text-spain-ink/70 sm:text-base">
                    {{ $t('contact.cardCopy') }}
                </p>

                <div class="mt-8 grid gap-4">
                    <a
                        href="https://github.com/kevin0018"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-spain-red px-6 py-3 font-semibold text-white transition-colors hover:bg-spain-wine"
                    >
                        <Icon name="mdi:github" class="h-5 w-5"/>
                        {{ $t('contact.profile') }}
                    </a>
                    <a
                        href="https://github.com/kevin0018/Blog-de-Viajes/issues/new"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-spain-red px-6 py-3 font-semibold text-spain-red transition-colors hover:bg-spain-yellow/20"
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
    url: toSiteUrl("contact"),
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

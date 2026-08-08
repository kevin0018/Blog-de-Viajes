<template>
    <div>
        <section class="px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
                <div class="mx-auto max-w-[90rem]">
                    <div class="mb-9 flex flex-col gap-4 border-b border-spain-sand pb-6 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <p class="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-spain-red">
                                Próxima parada
                            </p>
                            <h2 class="section-title text-3xl font-bold sm:text-4xl">Destinos para perderse</h2>
                        </div>
                        <p class="max-w-xl text-sm leading-6 text-spain-ink/70 sm:text-base">
                            Cuatro ciudades con ritmos muy distintos. Elige una y empieza a preparar
                            la próxima escapada.
                        </p>
                    </div>

                    <div class="relative">
                        <button
                            aria-label="Ver destinos anteriores"
                            class="absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-spain-wine p-2 text-white shadow-lg transition hover:bg-spain-yellow hover:text-spain-ink xl:hidden"
                            @click="scrollLeft"
                        >
                            <Icon name="mdi:chevron-left" class="h-6 w-6"/>
                        </button>
                        <button
                            aria-label="Ver más destinos"
                            class="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-spain-wine p-2 text-white shadow-lg transition hover:bg-spain-yellow hover:text-spain-ink xl:hidden"
                            @click="scrollRight"
                        >
                            <Icon name="mdi:chevron-right" class="h-6 w-6"/>
                        </button>

                        <div
                            ref="carousel"
                            class="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-3 xl:grid xl:grid-cols-4 xl:gap-6 xl:overflow-visible xl:px-0"
                        >
                            <article
                                v-for="(destino, index) in destinos"
                                :key="index"
                                class="group flex w-[82vw] max-w-80 flex-shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-spain-sand bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-80 xl:w-auto xl:max-w-none"
                            >
                                <div class="overflow-hidden">
                                    <img
                                        :src="`${baseURL}${destino.imagen}`"
                                        :alt="destino.nombre"
                                        width="640"
                                        height="420"
                                        loading="lazy"
                                        decoding="async"
                                        class="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03] xl:h-56"
                                    >
                                </div>
                                <div class="flex flex-1 flex-col p-6">
                                    <div class="mb-4 flex items-center justify-between gap-3">
                                        <h3 class="text-xl font-bold">{{ destino.nombre }}</h3>
                                        <span class="shrink-0 rounded-full bg-spain-yellow/25 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-spain-wine">
                                            {{ destino.estancia }}
                                        </span>
                                    </div>
                                    <p class="mb-5 text-sm leading-6 text-spain-ink/75">
                                        {{ destino.descripcion }}
                                    </p>
                                    <p class="mt-auto border-t border-spain-sand pt-4 text-xs text-spain-ink/60">
                                        Foto de
                                        <a
                                            :href="destino.creditoAutorUrl"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="underline hover:text-spain-red"
                                        >
                                            {{ destino.autor }}
                                        </a>
                                        en
                                        <a
                                            :href="destino.creditoUnsplashUrl"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="underline hover:text-spain-red"
                                        >
                                            Unsplash
                                        </a>
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div class="mt-8 flex justify-center lg:justify-end">
                        <nuxt-link
                            to="/post/destinos"
                            class="inline-flex items-center gap-2 rounded-full bg-spain-red px-8 py-3 font-semibold text-white transition hover:bg-spain-wine"
                        >
                            Todos los destinos
                            <Icon name="mdi:arrow-right" class="h-5 w-5"/>
                        </nuxt-link>
                    </div>
                </div>
        </section>

        <section
                class="relative flex min-h-[34rem] items-center overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-20 sm:px-6 lg:min-h-[40rem]"
                :style="{ backgroundImage: `url(${baseURL}assets/images/about.jpg)` }"
            >
                <div class="absolute inset-0 bg-spain-wine/65"/>
                <div
                    class="relative z-10 mx-auto max-w-3xl text-center"
                >
                    <p class="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-spain-yellow">
                        Detrás del cuaderno
                    </p>
                    <h2 class="text-4xl font-bold text-white sm:text-5xl">Sobre mí</h2>
                    <p class="mx-auto mt-6 max-w-2xl text-base leading-7 text-spain-paper/90 sm:text-lg sm:leading-8">
                        Soy una persona apasionada por los viajes, la fotografía y la escritura.
                        En este blog comparto experiencias, consejos y recomendaciones de los destinos
                        que he visitado para inspirar tu próxima aventura.
                    </p>
                    <nuxt-link
                        to="/post/about"
                        class="mt-8 inline-flex items-center gap-2 rounded-full bg-spain-yellow px-8 py-3 font-semibold text-spain-ink transition hover:bg-white"
                    >
                        ¿Quieres saber más?
                        <Icon name="mdi:arrow-right" class="h-5 w-5"/>
                    </nuxt-link>
                </div>

                <div class="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap text-xs text-white/70">
                    Foto de
                    <a
                        href="https://unsplash.com/es/@urban_vintage?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                        class="underline hover:text-spain-yellow"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Urban Vintage
                    </a>
                    en
                    <a
                        href="https://unsplash.com/es/fotos/fotografia-de-paisaje-de-montana-golpeada-por-los-rayos-del-sol-78A265wPiO4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                        class="underline hover:text-spain-yellow"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Unsplash
                    </a>
                </div>
        </section>

        <button
                v-if="mostrarBotonSubir"
                aria-label="Volver al inicio"
                class="fixed bottom-20 right-6 bg-spain-red text-white p-4 rounded-full shadow-lg hover:bg-spain-yellow hover:text-spain-ink transition"
                @click="scrollToTop"
            >
                <Icon name="mdi:arrow-up" class="h-6 w-6"/>
        </button>
    </div>
</template>
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { homeDestinations } from "~/data/destinations";

// Obtén el baseURL desde la configuración del entorno
const { app: { baseURL } } = useRuntimeConfig();

const destinos = homeDestinations;

// Referencia al carrusel
const carousel = ref<HTMLElement | null>(null);

// Función para desplazar hacia la izquierda
const scrollLeft = () => {
    carousel.value?.scrollBy({ left: -300, behavior: "smooth" });
};

// Función para desplazar hacia la derecha
const scrollRight = () => {
    carousel.value?.scrollBy({ left: 300, behavior: "smooth" });
};

// Lógica del botón flotante
const mostrarBotonSubir = ref(false);

const manejarScroll = () => {
    mostrarBotonSubir.value = window.scrollY > 300;
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
    window.addEventListener("scroll", manejarScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", manejarScroll);
});
</script>

<style scoped>
/* Ocultar scrollbar en navegadores compatibles */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>

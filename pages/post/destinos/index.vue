<template>
    <section class="bg-spain-paper px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div class="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
            <p class="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-spain-red">
                Seis formas de perderse
            </p>
            <h1 class="section-title text-4xl font-bold sm:text-5xl">Destinos</h1>
            <p class="mt-6 text-base leading-7 text-spain-ink/70 sm:text-lg">
                Ciudades con ritmos, escalas y paisajes muy distintos. Recorre este mural
                de postales y encuentra la inspiración para tu próxima aventura.
            </p>
        </div>

        <div class="mx-auto mb-8 max-w-[90rem] border-y border-spain-sand py-5">
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto] lg:items-end">
                <label v-for="filter in filters" :key="filter.key" class="grid gap-2">
                    <span class="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-spain-red">{{ filter.label }}</span>
                    <select
                        v-model="filterModels[filter.key].value"
                        class="h-11 w-full rounded-lg border border-spain-sand bg-white px-3 text-sm text-spain-ink"
                    >
                        <option v-for="option in filter.options" :key="option.value" :value="option.value">
                            {{ option.label }}
                        </option>
                    </select>
                </label>
                <button
                    type="button"
                    class="h-11 rounded-full border border-spain-red px-5 text-sm font-semibold text-spain-red transition-colors hover:bg-spain-red hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                    :disabled="!hasActiveFilters"
                    @click="resetFilters"
                >
                    Limpiar filtros
                </button>
            </div>
            <p class="mt-4 font-mono text-xs text-spain-ink/55" aria-live="polite">
                {{ destinos.length }} {{ destinos.length === 1 ? "destino encontrado" : "destinos encontrados" }}
            </p>
        </div>

        <div
            v-if="destinos.length"
            class="mx-auto grid max-w-[90rem] grid-cols-1 gap-4 md:auto-rows-[14rem] md:grid-cols-2 md:grid-flow-dense lg:auto-rows-[8.5rem] lg:grid-cols-6"
        >
            <button
                v-for="destino in destinos"
                :key="destino.nombre"
                type="button"
                :class="destino.layout"
                :aria-label="`Abrir guía rápida de ${destino.nombre}`"
                aria-haspopup="dialog"
                class="group relative min-h-[22rem] overflow-hidden rounded-3xl border border-spain-sand/70 bg-spain-ink text-left shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 active:scale-[0.99] md:min-h-0"
                @click="openDestination(destino)"
            >
                <img
                    :src="`${baseURL}${destino.imagen}`"
                    :alt="destino.alt"
                    :style="{objectPosition: destino.posicionImagen}"
                    width="960"
                    height="720"
                    loading="lazy"
                    decoding="async"
                    class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-spain-ink via-spain-ink/20 to-transparent transition-colors group-hover:via-spain-ink/30"/>

                <div class="absolute left-5 top-5">
                    <span class="rounded-full bg-spain-yellow px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-spain-ink shadow">
                        {{ destino.pais }}
                    </span>
                </div>

                <div class="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                    <h2
                        class="text-3xl font-bold leading-none sm:text-4xl"
                        :class="destino.destacado ? 'lg:text-5xl' : 'lg:text-4xl'"
                    >
                        {{ destino.nombre }}
                    </h2>
                    <p class="mt-3 max-w-xl text-sm leading-6 text-white/80">
                        {{ destino.descripcion }}
                    </p>
                    <span class="mt-4 inline-flex items-center gap-2 border-t border-white/30 pt-3 text-sm font-semibold text-spain-yellow">
                        Abrir guía
                        <Icon name="mdi:arrow-top-right" class="h-5 w-5"/>
                    </span>
                </div>
            </button>
        </div>

        <div v-else class="mx-auto max-w-[90rem] border border-dashed border-spain-sand px-6 py-16 text-center">
            <Icon name="mdi:map-search-outline" class="mx-auto h-10 w-10 text-spain-red"/>
            <h2 class="mt-4 text-3xl font-bold text-spain-wine">No hay una postal con esa combinación</h2>
            <p class="mt-3 text-spain-ink/65">Prueba con otro ritmo de viaje o recupera el mural completo.</p>
            <button type="button" class="mt-6 rounded-full bg-spain-red px-6 py-3 font-semibold text-white hover:bg-spain-wine" @click="resetFilters">
                Ver todos los destinos
            </button>
        </div>

        <button
            v-if="mostrarBotonSubir"
            aria-label="Volver al inicio"
            class="fixed bottom-20 right-6 z-40 rounded-full bg-spain-red p-4 text-white shadow-lg transition hover:bg-spain-yellow hover:text-spain-ink"
            @click="scrollToTop"
        >
            <Icon name="mdi:arrow-up" class="h-6 w-6" />
        </button>

        <dialog
            ref="destinationDialog"
            class="destination-dialog m-auto max-h-[calc(100dvh-2rem)] w-[min(72rem,calc(100%-2rem))] overflow-auto rounded-3xl border-0 bg-spain-paper p-0 text-spain-ink shadow-2xl"
            :aria-labelledby="activeDestination ? `destination-title-${activeDestination.id}` : undefined"
            @close="activeDestination = null"
            @click="handleDialogClick"
        >
            <div
                v-if="activeDestination"
                class="relative grid min-h-[32rem] lg:grid-cols-[0.9fr_1.1fr]"
            >
                <button
                    type="button"
                    aria-label="Cerrar guía del destino"
                    class="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-spain-wine text-white shadow-lg transition hover:bg-spain-red"
                    @click="closeDestination"
                >
                    <Icon name="mdi:close" class="h-6 w-6"/>
                </button>

                <div class="relative min-h-72 overflow-hidden lg:min-h-full">
                    <img
                        :src="`${baseURL}${activeDestination.imagen}`"
                        :alt="activeDestination.alt"
                        :style="{objectPosition: activeDestination.posicionImagen}"
                        width="960"
                        height="960"
                        class="absolute inset-0 h-full w-full object-cover"
                    >
                    <div class="absolute inset-0 bg-gradient-to-t from-spain-ink/70 via-transparent to-transparent lg:bg-gradient-to-r"/>
                </div>

                <div class="p-7 sm:p-10 lg:p-12">
                    <p class="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-spain-red">
                        {{ activeDestination.pais }}
                    </p>
                    <h2
                        :id="`destination-title-${activeDestination.id}`"
                        class="mt-3 text-4xl font-bold text-spain-wine sm:text-5xl"
                    >
                        {{ activeDestination.nombre }}
                    </h2>
                    <p class="mt-5 text-base leading-7 text-spain-ink/75">
                        {{ activeDestination.descripcion }}
                    </p>

                    <dl class="mt-7 grid grid-cols-2 gap-3">
                        <div class="rounded-2xl border border-spain-sand bg-white p-4">
                            <dt class="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-spain-red">
                                Estancia ideal
                            </dt>
                            <dd class="mt-2 font-semibold">{{ activeDestination.estancia }}</dd>
                        </div>
                        <div class="rounded-2xl border border-spain-sand bg-white p-4">
                            <dt class="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-spain-red">
                                Mejor momento
                            </dt>
                            <dd class="mt-2 font-semibold">{{ activeDestination.mejorEpoca }}</dd>
                        </div>
                    </dl>

                    <h3 class="mt-8 text-xl font-bold">Un plan para empezar</h3>
                    <ul class="mt-4 grid gap-3">
                        <li
                            v-for="plan in activeDestination.planes"
                            :key="plan"
                            class="flex gap-3 text-sm leading-6 text-spain-ink/75"
                        >
                            <Icon name="mdi:map-marker-outline" class="mt-0.5 h-5 w-5 shrink-0 text-spain-red"/>
                            {{ plan }}
                        </li>
                    </ul>

                    <nuxt-link
                        :to="`/post/destinos/${activeDestination.id}`"
                        class="mt-8 inline-flex items-center gap-2 rounded-full bg-spain-red px-6 py-3 font-semibold text-white transition-colors hover:bg-spain-wine"
                        @click="closeDestination"
                    >
                        Ver guía completa
                        <Icon name="mdi:arrow-right" class="h-5 w-5"/>
                    </nuxt-link>

                    <p class="mt-8 border-t border-spain-sand pt-4 text-xs text-spain-ink/65">
                        Foto de
                        <a
                            :href="activeDestination.creditoAutorUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="underline transition-colors hover:text-spain-red"
                        >
                            {{ activeDestination.autor }}
                        </a>
                        en
                        <a
                            :href="activeDestination.creditoUnsplashUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="underline transition-colors hover:text-spain-red"
                        >
                            Unsplash
                        </a>
                    </p>
                </div>
            </div>
        </dialog>
    </section>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from "vue";
import { destinations } from "~/data/destinations";
import type { Destination, TravelBudget, TravelSeason, TravelStyle } from "~/types/destination";

// Obtén el baseURL desde la configuración del entorno (Nuxt 3)
const { app: { baseURL } } = useRuntimeConfig();
const destinationDialog = ref<HTMLDialogElement | null>(null);
const activeDestination = ref<Destination | null>(null);

const openDestination = async (destination: Destination) => {
    activeDestination.value = destination;
    await nextTick();
    destinationDialog.value?.showModal();
};

const closeDestination = () => {
    destinationDialog.value?.close();
};

const handleDialogClick = (event: MouseEvent) => {
    if (event.target === destinationDialog.value) {
        closeDestination();
    }
};

type FilterValue = "all" | "short" | "medium" | "long" | TravelSeason | TravelBudget | TravelStyle;
type FilterKey = "duration" | "season" | "budget" | "style";

const duration = ref<FilterValue>("all");
const season = ref<FilterValue>("all");
const budget = ref<FilterValue>("all");
const style = ref<FilterValue>("all");
const filterModels: Record<FilterKey, typeof duration> = { duration, season, budget, style };
const filters: readonly { key: FilterKey; label: string; options: readonly { value: FilterValue; label: string }[] }[] = [
    { key: "duration", label: "Duración", options: [
        { value: "all", label: "Cualquier duración" },
        { value: "short", label: "Hasta 3 días" },
        { value: "medium", label: "4 días" },
        { value: "long", label: "5 días o más" },
    ] },
    { key: "season", label: "Época", options: [
        { value: "all", label: "Cualquier época" },
        { value: "primavera", label: "Primavera" },
        { value: "verano", label: "Verano" },
        { value: "otono", label: "Otoño" },
        { value: "invierno", label: "Invierno" },
    ] },
    { key: "budget", label: "Nivel de gasto", options: [
        { value: "all", label: "Cualquier nivel" },
        { value: "contenido", label: "Contenido" },
        { value: "medio", label: "Medio" },
        { value: "alto", label: "Alto" },
    ] },
    { key: "style", label: "Estilo", options: [
        { value: "all", label: "Cualquier estilo" },
        { value: "cultura", label: "Cultura" },
        { value: "gastronomia", label: "Gastronomía" },
        { value: "urbano", label: "Urbano" },
        { value: "costa", label: "Costa" },
    ] },
] as const;

const destinos = computed(() => destinations.filter((destination) => {
    const durationMatches = duration.value === "all"
        || (duration.value === "short" && destination.idealDays <= 3)
        || (duration.value === "medium" && destination.idealDays === 4)
        || (duration.value === "long" && destination.idealDays >= 5);
    const seasonMatches = season.value === "all" || destination.seasons.includes(season.value as TravelSeason);
    const budgetMatches = budget.value === "all" || destination.budget === budget.value;
    const styleMatches = style.value === "all" || destination.styles.includes(style.value as TravelStyle);

    return durationMatches && seasonMatches && budgetMatches && styleMatches;
}));

const hasActiveFilters = computed(() => Object.values(filterModels).some((filter) => filter.value !== "all"));
const resetFilters = () => Object.values(filterModels).forEach((filter) => {
    filter.value = "all";
});

// Mostrar el botón de volver arriba
const mostrarBotonSubir = ref(false);

// Función para volver al inicio de la página
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Escuchar el evento de scroll
const manejarScroll = () => {
    mostrarBotonSubir.value = window.scrollY > 200;
};

// Agregar y eliminar el evento de scroll
onMounted(() => {
    window.addEventListener("scroll", manejarScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", manejarScroll);
});
</script>

<style scoped>
.destination-dialog::backdrop {
    background: rgb(37 26 22 / 72%);
    backdrop-filter: blur(5px);
}
</style>

<template>
    <section class="bg-spain-paper px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div class="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
            <p class="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-spain-red">{{ $t('hero.kicker') }}</p>
            <h1 class="section-title mt-3 text-[2.75rem] font-bold leading-none sm:text-5xl">{{ $t('destinations.title') }}</h1>
            <p class="mt-6 text-base leading-7 text-spain-ink/70 sm:text-lg">
                {{ $t('destinations.intro') }}
            </p>
        </div>

        <div class="mx-auto mb-8 max-w-[90rem] border-y border-spain-sand py-5">
            <div class="no-scrollbar flex snap-x gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto] lg:items-end">
                <label v-for="filter in filters" :key="filter.key" class="grid min-w-[10.5rem] snap-start gap-2 md:min-w-0">
                    <span class="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-spain-red">{{ filter.label }}</span>
                    <select
                        v-model="filterModels[filter.key].value"
                        class="h-11 w-full rounded-lg border border-spain-sand bg-spain-surface px-3 text-sm text-spain-ink"
                    >
                        <option v-for="option in filter.options" :key="option.value" :value="option.value">
                            {{ option.label }}
                        </option>
                    </select>
                </label>
                <button
                    type="button"
                    class="h-11 shrink-0 self-end rounded-full border border-spain-red px-5 text-sm font-semibold text-spain-red transition-colors hover:bg-spain-red hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                    :disabled="!hasActiveFilters"
                    @click="resetFilters"
                >
                    {{ $t('destinations.clear') }}
                </button>
            </div>
            <p class="mt-4 font-mono text-xs text-spain-ink/55" aria-live="polite">
                {{ destinos.length }} {{ destinos.length === 1 ? $t('destinations.foundOne') : $t('destinations.foundMany') }}
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
                :aria-label="$t('destinations.quickGuide', {name: destino.nombre})"
                aria-haspopup="dialog"
                class="destination-card group relative min-h-[18rem] overflow-hidden rounded-3xl border border-spain-sand/70 bg-spain-ink text-left shadow-lg transition-transform duration-300 active:scale-[0.99] md:min-h-0"
                @click="openDestination(destino)"
            >
                <OptimizedImage
                    :src="`${baseURL}${destino.imagen}`"
                    :alt="destino.alt"
                    :style="{objectPosition: destino.posicionImagen}"
                    width="960"
                    height="720"
                    loading="lazy"
                    decoding="async"
                    class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-spain-ink via-spain-ink/25 to-transparent"/>

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
                        {{ $t('destinations.open') }}
                        <Icon name="mdi:arrow-top-right" class="h-5 w-5"/>
                    </span>
                </div>
            </button>
        </div>

        <div v-else class="mx-auto max-w-[90rem] border border-dashed border-spain-sand px-6 py-16 text-center">
            <Icon name="mdi:map-search-outline" class="mx-auto h-10 w-10 text-spain-red"/>
            <h2 class="mt-4 text-3xl font-bold text-spain-wine">{{ $t('destinations.emptyTitle') }}</h2>
            <p class="mt-3 text-spain-ink/65">{{ $t('destinations.emptyCopy') }}</p>
            <button type="button" class="mt-6 rounded-full bg-spain-red px-6 py-3 font-semibold text-white hover:bg-spain-wine" @click="resetFilters">
                {{ $t('destinations.all') }}
            </button>
        </div>

        <button
            v-if="mostrarBotonSubir"
            :aria-label="$t('common.backTop')"
            class="fixed bottom-20 right-6 z-40 rounded-full bg-spain-red p-4 text-white shadow-lg transition hover:bg-spain-yellow hover:text-spain-ink"
            @click="scrollToTop"
        >
            <Icon name="mdi:arrow-up" class="h-6 w-6" />
        </button>

        <dialog
            ref="destinationDialog"
            class="destination-dialog m-auto max-h-[calc(100dvh-1rem)] w-[min(72rem,calc(100%-1rem))] overflow-auto rounded-3xl border-0 bg-spain-paper p-0 text-spain-ink shadow-2xl sm:max-h-[calc(100dvh-2rem)] sm:w-[min(72rem,calc(100%-2rem))]"
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
                    :aria-label="$t('destinations.close')"
                    class="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-spain-wine text-white shadow-lg transition hover:bg-spain-red"
                    @click="closeDestination"
                >
                    <Icon name="mdi:close" class="h-6 w-6"/>
                </button>

                <div class="relative min-h-72 overflow-hidden lg:min-h-full">
                    <OptimizedImage
                        :src="`${baseURL}${activeDestination.imagen}`"
                        :alt="activeDestination.alt"
                        :style="{objectPosition: activeDestination.posicionImagen}"
                        width="960"
                        height="960"
                        class="absolute inset-0 h-full w-full object-cover"
                    />
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
                        <div class="rounded-2xl border border-spain-sand bg-spain-surface p-4">
                            <dt class="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-spain-red">
                                {{ $t('destinations.idealStay') }}
                            </dt>
                            <dd class="mt-2 font-semibold">{{ activeDestination.estancia }}</dd>
                        </div>
                        <div class="rounded-2xl border border-spain-sand bg-spain-surface p-4">
                            <dt class="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-spain-red">
                                {{ $t('destinations.bestTime') }}
                            </dt>
                            <dd class="mt-2 font-semibold">{{ activeDestination.mejorEpoca }}</dd>
                        </div>
                    </dl>

                    <h3 class="mt-8 text-xl font-bold">{{ $t('destinations.starterPlan') }}</h3>
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
                        :to="localePath(`/post/destinos/${activeDestination.id}`)"
                        class="mt-8 inline-flex items-center gap-2 rounded-full bg-spain-red px-6 py-3 font-semibold text-white transition-colors hover:bg-spain-wine"
                        @click="closeDestination"
                    >
                        {{ $t('destinations.fullGuide') }}
                        <Icon name="mdi:arrow-right" class="h-5 w-5"/>
                    </nuxt-link>

                    <p class="mt-8 border-t border-spain-sand pt-4 text-xs text-spain-ink/65">
                        {{ $t('common.photoBy') }}
                        <a
                            :href="activeDestination.creditoAutorUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="underline transition-colors hover:text-spain-red"
                        >
                            {{ activeDestination.autor }}
                        </a>
                        {{ $t('common.on') }}
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
import type { Destination, TravelBudget, TravelSeason, TravelStyle } from "~/types/destination";
import { toSiteUrl } from "~/utils/site";

// Obtén el baseURL desde la configuración del entorno (Nuxt 3)
const { app: { baseURL } } = useRuntimeConfig();
const localePath = useLocalePath();
const {locale, t} = useI18n();
const {destinations} = useTravelContent();
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
const filters = computed<readonly { key: FilterKey; label: string; options: readonly { value: FilterValue; label: string }[] }[]>(() => [
    { key: "duration", label: t("filters.duration"), options: [
        { value: "all", label: t("filters.anyDuration") },
        { value: "short", label: t("filters.short") },
        { value: "medium", label: t("filters.medium") },
        { value: "long", label: t("filters.long") },
    ] },
    { key: "season", label: t("filters.season"), options: [
        { value: "all", label: t("filters.anySeason") },
        { value: "primavera", label: t("filters.spring") },
        { value: "verano", label: t("filters.summer") },
        { value: "otono", label: t("filters.autumn") },
        { value: "invierno", label: t("filters.winter") },
    ] },
    { key: "budget", label: t("filters.budget"), options: [
        { value: "all", label: t("filters.anyBudget") },
        { value: "contenido", label: t("filters.low") },
        { value: "medio", label: t("filters.mid") },
        { value: "alto", label: t("filters.high") },
    ] },
    { key: "style", label: t("filters.style"), options: [
        { value: "all", label: t("filters.anyStyle") },
        { value: "cultura", label: t("filters.culture") },
        { value: "gastronomia", label: t("filters.food") },
        { value: "urbano", label: t("filters.urban") },
        { value: "costa", label: t("filters.coast") },
    ] },
]);

const destinos = computed(() => destinations.value.filter((destination) => {
    const durationMatches = duration.value === "all"
        || (duration.value === "short" && destination.idealDays <= 3)
        || (duration.value === "medium" && destination.idealDays === 4)
        || (duration.value === "long" && destination.idealDays >= 5);
    const seasonMatches = season.value === "all" || destination.seasons.includes(season.value as TravelSeason);
    const budgetMatches = budget.value === "all" || destination.budget === budget.value;
    const styleMatches = style.value === "all" || destination.styles.includes(style.value as TravelStyle);

    return durationMatches && seasonMatches && budgetMatches && styleMatches;
}));

useSeoMeta({
    title: computed(() => locale.value === "en" ? "Destinations and city guides · Travel Journal" : "Destinos y guías de ciudad · Blog de Viajes"),
    description: computed(() => locale.value === "en" ? "Compare six destinations by duration, season, budget and style before building an itinerary." : "Compara seis destinos por duración, época, nivel de gasto y estilo antes de construir tu itinerario."),
    ogTitle: computed(() => locale.value === "en" ? "Six destinations, six travel rhythms" : "Seis destinos, seis ritmos de viaje"),
    ogDescription: computed(() => locale.value === "en" ? "Filter cities and start a route you can adapt, save and share." : "Filtra ciudades y empieza una ruta que puedes adaptar, guardar y compartir."),
    ogImage: toSiteUrl("assets/images/londres.webp"),
    ogType: "website",
    twitterCard: "summary_large_image",
});

useJsonLd({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Destinos",
    url: toSiteUrl("post/destinos"),
    mainEntity: destinations.value.map((destination) => ({
        "@type": "Place",
        name: destination.nombre,
        url: toSiteUrl(`post/destinos/${destination.id}`),
    })),
});

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
/* Hallmark · pre-emit critique: P5 H4 E4 S5 R4 V5 · genre: editorial travel notebook · macrostructure: bento destination mural · design-system: design.md · designed-as-app */

.destination-dialog::backdrop {
    background: rgb(37 26 22 / 72%);
    backdrop-filter: blur(5px);
}

.destination-card:nth-child(3n + 1) {
    min-height: 25rem;
}

.no-scrollbar {
    scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
}

@media (min-width: 48rem) {
    .destination-card:nth-child(3n + 1) {
        min-height: 0;
    }
}
</style>

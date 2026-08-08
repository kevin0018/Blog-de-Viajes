<template>
    <section class="relative overflow-hidden rounded-[2rem] bg-spain-ink px-5 py-8 text-white sm:px-8 lg:px-10 lg:py-10">
        <div class="absolute right-0 top-0 h-44 w-44 translate-x-1/3 -translate-y-1/3 rounded-full border border-spain-yellow/30"/>
        <div class="relative grid gap-10 lg:grid-cols-[minmax(15rem,0.68fr)_minmax(0,1.32fr)]">
            <header>
                <p class="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-spain-yellow">
                    Cuaderno de ruta
                </p>
                <h2 class="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                    Diseña tu escapada a {{ destination.nombre }}
                </h2>
                <p class="mt-5 max-w-md leading-7 text-white/70">
                    Elige el ritmo, ordena las paradas y vuelve cuando quieras. El plan se guarda únicamente en este dispositivo.
                </p>

                <fieldset class="mt-8">
                    <legend class="font-mono text-xs font-semibold uppercase tracking-wider text-white/60">
                        Duración
                    </legend>
                    <div class="mt-3 flex flex-wrap gap-2">
                        <button
                            v-for="duration in durations"
                            :key="duration"
                            type="button"
                            :aria-pressed="days === duration"
                            class="rounded-full border px-4 py-2 font-semibold transition-colors"
                            :class="days === duration
                                ? 'border-spain-yellow bg-spain-yellow text-spain-ink'
                                : 'border-white/25 text-white hover:border-white/60'"
                            @click="setDays(duration)"
                        >
                            {{ duration }} {{ duration === 1 ? "día" : "días" }}
                        </button>
                    </div>
                </fieldset>

                <div class="mt-8 flex flex-wrap gap-3">
                    <button
                        type="button"
                        class="inline-flex items-center gap-2 rounded-full bg-spain-red px-5 py-3 font-semibold transition-colors hover:bg-white hover:text-spain-ink"
                        @click="shareItinerary"
                    >
                        <Icon name="mdi:link-variant" class="h-5 w-5"/>
                        Copiar enlace
                    </button>
                    <button
                        type="button"
                        class="rounded-full border border-white/25 px-5 py-3 font-semibold text-white transition-colors hover:border-white/60"
                        @click="resetItinerary"
                    >
                        Restablecer
                    </button>
                </div>
                <p aria-live="polite" class="mt-3 min-h-6 text-sm text-spain-yellow">
                    <template v-if="shareStatus === 'copied'">Enlace copiado. Ya puedes compartir esta ruta.</template>
                    <template v-else-if="shareStatus === 'error'">No se pudo copiar. Copia la URL desde el navegador.</template>
                </p>
            </header>

            <div>
                <div class="flex items-end justify-between gap-4 border-b border-white/15 pb-4">
                    <div>
                        <p class="font-mono text-xs uppercase tracking-wider text-white/50">Tu recorrido</p>
                        <p class="mt-1 text-lg font-semibold">{{ selectedStops.length }} paradas · {{ days }} días</p>
                    </div>
                    <span class="font-mono text-xs text-white/50">{{ destination.id.toUpperCase() }} / 01</span>
                </div>

                <ol v-if="selectedStops.length" class="mt-5 grid gap-3">
                    <li
                        v-for="(stop, index) in selectedStops"
                        :key="stop.id"
                        class="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl bg-white p-4 text-spain-ink sm:p-5"
                    >
                        <span class="flex h-10 w-10 items-center justify-center rounded-full bg-spain-yellow font-mono text-sm font-bold">
                            {{ index + 1 }}
                        </span>
                        <div class="min-w-0">
                            <h3 class="text-xl font-bold">{{ stop.title }}</h3>
                            <p class="mt-1 text-sm leading-5 text-spain-ink/65">{{ stop.description }}</p>
                        </div>
                        <div class="flex flex-col gap-1 sm:flex-row">
                            <button
                                type="button"
                                :disabled="index === 0"
                                :aria-label="`Subir ${stop.title}`"
                                class="rounded-full p-2 text-spain-wine transition-colors hover:bg-spain-yellow/25 disabled:cursor-not-allowed disabled:opacity-25"
                                @click="moveStop(index, -1)"
                            >
                                <Icon name="mdi:arrow-up" class="h-5 w-5"/>
                            </button>
                            <button
                                type="button"
                                :disabled="index === selectedStops.length - 1"
                                :aria-label="`Bajar ${stop.title}`"
                                class="rounded-full p-2 text-spain-wine transition-colors hover:bg-spain-yellow/25 disabled:cursor-not-allowed disabled:opacity-25"
                                @click="moveStop(index, 1)"
                            >
                                <Icon name="mdi:arrow-down" class="h-5 w-5"/>
                            </button>
                            <button
                                type="button"
                                :aria-label="`Eliminar ${stop.title}`"
                                class="rounded-full p-2 text-spain-red transition-colors hover:bg-spain-red/10"
                                @click="removeStop(stop.id)"
                            >
                                <Icon name="mdi:close" class="h-5 w-5"/>
                            </button>
                        </div>
                    </li>
                </ol>

                <div v-else class="mt-5 rounded-2xl border border-dashed border-white/30 p-8 text-center">
                    <Icon name="mdi:map-marker-off-outline" class="mx-auto h-8 w-8 text-spain-yellow"/>
                    <p class="mt-3 font-semibold">Tu cuaderno está vacío</p>
                    <p class="mt-1 text-sm text-white/60">Añade una sugerencia para volver a construir la ruta.</p>
                </div>

                <div v-if="suggestedStops.length" class="mt-8">
                    <h3 class="font-mono text-xs font-semibold uppercase tracking-wider text-spain-yellow">
                        Ideas para añadir
                    </h3>
                    <div class="mt-3 flex flex-wrap gap-2">
                        <button
                            v-for="stop in suggestedStops"
                            :key="stop.id"
                            type="button"
                            class="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold transition-colors hover:border-spain-yellow hover:text-spain-yellow"
                            @click="addStop(stop.id)"
                        >
                            <Icon name="mdi:plus" class="h-4 w-4"/>
                            {{ stop.title }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Destination } from "~/types/destination";
import type { TripDuration } from "~/types/itinerary";

const props = defineProps<{ destination: Destination }>();
const durations: readonly TripDuration[] = [1, 3, 5];

const {
    days,
    selectedStops,
    suggestedStops,
    shareStatus,
    setDays,
    addStop,
    removeStop,
    moveStop,
    resetItinerary,
    shareItinerary,
} = useItinerary(props.destination.id, props.destination.stops);
</script>

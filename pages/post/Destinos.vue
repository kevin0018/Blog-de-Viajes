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

        <div
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

<script setup>
import { nextTick, onMounted, onUnmounted, ref } from "vue";

// Obtén el baseURL desde la configuración del entorno (Nuxt 3)
const { app: { baseURL } } = useRuntimeConfig();
const destinationDialog = ref(null);
const activeDestination = ref(null);

const openDestination = async (destination) => {
    activeDestination.value = destination;
    await nextTick();
    destinationDialog.value?.showModal();
};

const closeDestination = () => {
    destinationDialog.value?.close();
};

const handleDialogClick = (event) => {
    if (event.target === destinationDialog.value) {
        closeDestination();
    }
};

// Destinos de viaje
const destinos = ref([
    {
        id: "paris",
        nombre: "París",
        pais: "Francia",
        imagen: "assets/images/paris.jpg",
        alt: "Torre Eiffel sobre el paisaje de París",
        posicionImagen: "center 46%",
        descripcion: "Paseos junto al Sena, pequeñas galerías y cafés con vistas a la ciudad.",
        autor: "Anthony DELANOIX",
        destacado: true,
        layout: "md:row-span-2 lg:col-span-2 lg:row-span-4",
        estancia: "3–4 días",
        mejorEpoca: "Primavera u otoño",
        planes: [
            "Cruzar el Sena a pie y enlazar Île de la Cité con el Barrio Latino.",
            "Reservar una mañana para Montmartre antes de que se llenen sus calles.",
            "Cerrar el día en Trocadéro cuando empiecen a encenderse las luces.",
        ],
        creditoAutorUrl: "https://unsplash.com/es/@anthonydelanoix?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/eiffel-tower-during-daytime-Q0-fOL2nqZc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    {
        id: "roma",
        nombre: "Roma",
        pais: "Italia",
        imagen: "assets/images/roma.jpg",
        alt: "El Coliseo de Roma al atardecer",
        posicionImagen: "center",
        descripcion: "Historia a cielo abierto, plazas vivas y sobremesas que siempre se alargan.",
        autor: "David Köhler",
        destacado: false,
        layout: "lg:col-span-2 lg:row-span-2",
        estancia: "3 días",
        mejorEpoca: "Abril, mayo u octubre",
        planes: [
            "Empezar temprano entre el Coliseo, el Foro y el monte Palatino.",
            "Caminar sin prisa desde Piazza Navona hasta el Panteón.",
            "Cruzar al Trastevere para terminar el día con una cena larga.",
        ],
        creditoAutorUrl: "https://unsplash.com/es/@davidkhlr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/colosseum-arena-photography-VFRTXGw1VjU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    {
        id: "tokio",
        nombre: "Tokio",
        pais: "Japón",
        imagen: "assets/images/tokio.jpg",
        alt: "Rascacielos y letreros luminosos de Tokio por la noche",
        posicionImagen: "center 42%",
        descripcion: "Tradición y neón conviven en una ciudad que nunca se recorre de una sola manera.",
        autor: "Erik Eastman",
        destacado: true,
        layout: "md:row-span-2 lg:col-span-2 lg:row-span-4",
        estancia: "5–6 días",
        mejorEpoca: "Primavera u otoño",
        planes: [
            "Contrastar los templos de Asakusa con el neón de Shinjuku.",
            "Recorrer Yanaka y sus pequeñas tiendas a primera hora.",
            "Subir a un mirador al atardecer para entender la escala de la ciudad.",
        ],
        creditoAutorUrl: "https://unsplash.com/es/@erikeae?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/foto-de-personas-cruzando-la-carretera-4HG5hlhmZg8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    {
        id: "londres",
        nombre: "Londres",
        pais: "Reino Unido",
        imagen: "assets/images/londres.jpg",
        alt: "El Big Ben y el Parlamento de Londres junto al Támesis",
        posicionImagen: "center 62%",
        descripcion: "Mercados, museos y barrios con carácter para recorrer sin mirar el reloj.",
        autor: "Luke Stackpoole",
        destacado: true,
        layout: "md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-4",
        estancia: "4 días",
        mejorEpoca: "Mayo, junio o septiembre",
        planes: [
            "Seguir el Támesis desde Westminster hasta Borough Market.",
            "Elegir un gran museo y dejar espacio para descubrir un barrio cercano.",
            "Reservar una mañana para los puestos y fachadas de Notting Hill.",
        ],
        creditoAutorUrl: "https://unsplash.com/es/@withluke?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/torre-del-big-ben-mOEqOtmuPG8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    {
        id: "nueva-york",
        nombre: "Nueva York",
        pais: "Estados Unidos",
        imagen: "assets/images/nueva-york.jpg",
        alt: "Empire State Building y el perfil de Nueva York al anochecer",
        posicionImagen: "center 48%",
        descripcion: "Rascacielos, barrios inagotables y una energía que cambia a cada esquina.",
        autor: "Timo Wagner",
        destacado: true,
        layout: "md:row-span-2 lg:col-span-2 lg:row-span-4",
        estancia: "5 días",
        mejorEpoca: "Mayo, junio u octubre",
        planes: [
            "Cruzar Brooklyn Bridge temprano y desayunar al otro lado.",
            "Dedicar una tarde a Central Park y a uno de sus grandes museos.",
            "Ver caer la noche desde un mirador con vistas a Manhattan.",
        ],
        creditoAutorUrl: "https://unsplash.com/es/@timovaknar?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/empire-state-building-nueva-york-por-la-noche-fT6-YkB0nfg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    {
        id: "barcelona",
        nombre: "Barcelona",
        pais: "España",
        imagen: "assets/images/barcelona.jpg",
        alt: "Vista aérea de las calles y edificios de Barcelona",
        posicionImagen: "center",
        descripcion: "Arquitectura, mar y calles con vida propia entre el Eixample y la costa.",
        autor: "Logan Armstrong",
        destacado: false,
        layout: "lg:col-span-2 lg:row-span-2",
        estancia: "3 días",
        mejorEpoca: "Mayo, junio o septiembre",
        planes: [
            "Caminar por el Eixample siguiendo las fachadas modernistas.",
            "Perderse por el Born y continuar hasta el paseo marítimo.",
            "Subir a Montjuïc al final de la tarde para ver cambiar la luz.",
        ],
        creditoAutorUrl: "https://unsplash.com/es/@loganstrongarms?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/vista-aerea-de-los-edificios-de-la-ciudad-durante-el-dia-hVhfqhDYciU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
]);

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

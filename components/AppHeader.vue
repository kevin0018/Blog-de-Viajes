<template>
    <header
        ref="headerElement"
        class="relative overflow-hidden border-b-4 border-spain-yellow shadow-lg transition-[height] duration-500"
        :class="fullScreen
            ? 'h-screen min-h-[64rem] lg:min-h-[46rem]'
            : home
                ? 'h-[88svh] min-h-[42rem] lg:min-h-[46rem]'
            : slim
                ? 'h-20'
            : compact
                ? 'h-[28vh] min-h-56 lg:h-[32vh]'
                : 'h-[50vh] min-h-80'"
    >
        <picture class="absolute inset-0">
            <source
                type="image/avif"
                :srcset="`${baseURL}assets/images/header-bg-640.avif 640w, ${baseURL}assets/images/header-bg-960.avif 960w, ${baseURL}assets/images/header-bg-1440.avif 1440w, ${baseURL}assets/images/header-bg-1920.avif 1920w`"
                sizes="100vw"
            >
            <source
                type="image/webp"
                :srcset="`${baseURL}assets/images/header-bg-640.webp 640w, ${baseURL}assets/images/header-bg-960.webp 960w, ${baseURL}assets/images/header-bg-1440.webp 1440w, ${baseURL}assets/images/header-bg-1920.webp 1920w`"
                sizes="100vw"
            >
            <img
                :src="`${baseURL}assets/images/header-bg-1920.webp`"
                alt=""
                width="1920"
                height="1144"
                fetchpriority="high"
                decoding="async"
                class="h-full w-full object-cover object-center"
            >
        </picture>
        <div
            class="absolute inset-0"
            :class="home
                ? 'bg-[linear-gradient(90deg,rgba(37,26,22,0.82)_0%,rgba(37,26,22,0.58)_48%,rgba(37,26,22,0.2)_100%)]'
                : 'bg-spain-ink/55'"
        />

        <!-- Contenido del header -->
        <div class="pointer-events-none relative z-30 flex h-full flex-col items-center">
            <!-- Menú superior para escritorio y móviles -->
            <nav
                class="pointer-events-auto absolute top-0 left-0 w-full flex justify-between items-center px-8 lg:px-16 py-4 text-white lg:text-xl font-medium">
                <!-- Menú de la izquierda -->
                <div class="hidden lg:flex space-x-8 items-center">
                    <nuxt-link to="/post/blog" class="hover:text-spain-yellow">Blog</nuxt-link>
                    <nuxt-link to="/post/about" class="hover:text-spain-yellow">About</nuxt-link>
                </div>

                <!-- Logo centrado -->
                <a
                    :href="baseURL"
                    aria-label="Ir a la página de inicio"
                    class="absolute left-1/2 top-4 -translate-x-1/2 rounded-full opacity-95 transition-opacity duration-300 hover:opacity-75 lg:top-1/2 lg:-translate-y-1/2"
                >
                    <img
                        :src="`${baseURL}assets/images/logo-viajes.svg`"
                        alt="Blog de Viajes"
                        width="56"
                        height="56"
                        fetchpriority="high"
                        decoding="sync"
                        class="h-14 w-14 drop-shadow-sm"
                    >
                </a>

                <!-- Menú de la derecha -->
                <div class="hidden lg:flex space-x-8 items-center">
                    <nuxt-link to="/post/destinos" class="hover:text-spain-yellow">Destinos</nuxt-link>
                    <nuxt-link to="/post/contacto" class="hover:text-spain-yellow">Contacto</nuxt-link>
                </div>

                <!-- Botón hamburguesa para móviles -->
                <button
                    ref="menuButton"
                    aria-label="Abrir o cerrar la navegación"
                    :aria-expanded="isMenuOpen"
                    aria-controls="mobile-navigation"
                    class="lg:hidden flex items-center justify-center h-10 w-10 text-white  absolute top-4 right-4"
                    @click="toggleMenu"
                >
                    <Icon
                        :name="isMenuOpen ? 'mdi:close' : 'mdi:menu'"
                        class="h-6 w-6 transition-transform duration-300"
                    />
                </button>
            </nav>

            <!-- Menú desplegable para móviles -->
            <transition name="slide-down">
                <div
                    v-if="isMenuOpen"
                    id="mobile-navigation"
                    class="pointer-events-auto absolute bg-spain-surface text-spain-ink shadow-md w-full z-50 top-16 left-0 lg:hidden"
                >
                    <ul class="flex flex-col items-center space-y-4 py-4 text-sm font-medium">
                        <li>
                            <nuxt-link to="/post/blog" class="hover:text-spain-red">Blog</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/post/about" class="hover:text-spain-red">About</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/post/destinos" class="hover:text-spain-red">Destinos</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/post/contacto" class="hover:text-spain-red">Contacto</nuxt-link>
                        </li>
                    </ul>
                </div>
            </transition>

            <section
                v-if="home"
                class="home-intro flex h-full w-full items-center px-6 pb-20 pt-28 sm:px-10 lg:px-16 lg:pb-24 lg:pt-32"
                aria-labelledby="home-hero-title"
            >
                <div class="mx-auto grid w-full max-w-[90rem] items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(26rem,1.08fr)]">
                    <div class="relative z-10 max-w-3xl text-white">
                        <p class="hero-kicker font-mono text-xs font-semibold uppercase tracking-[0.22em] text-spain-yellow">
                            Cuaderno de rutas · seis ciudades
                        </p>
                        <h1 id="home-hero-title" class="mt-5 text-5xl font-bold leading-[0.92] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                            <span class="hero-line block">Traza el viaje</span>
                            <span class="hero-line hero-line-delayed block text-spain-yellow">antes de salir.</span>
                        </h1>
                        <p class="hero-copy mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                            Explora cada ciudad, elige tus paradas y guarda una ruta propia para llevarla contigo.
                        </p>
                        <div class="hero-actions pointer-events-auto mt-9 flex flex-wrap gap-3">
                            <nuxt-link
                                to="/post/destinos"
                                class="inline-flex items-center gap-2 rounded-full bg-spain-yellow px-6 py-3 font-semibold text-spain-ink transition-colors hover:bg-spain-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-spain-yellow"
                            >
                                Empezar una ruta
                                <Icon name="mdi:arrow-right" class="h-5 w-5"/>
                            </nuxt-link>
                            <nuxt-link
                                to="/post/blog"
                                class="inline-flex items-center rounded-full border border-white/35 px-6 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                            >
                                Leer el cuaderno
                            </nuxt-link>
                        </div>
                    </div>

                    <div class="route-sketch relative hidden min-h-[24rem] lg:block" aria-hidden="true">
                        <svg class="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 680 420" fill="none">
                            <path
                                class="route-path"
                                pathLength="1"
                                d="M34 332C128 252 154 366 247 279C322 208 289 111 401 104C503 98 519 207 642 60"
                                stroke="currentColor"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-dasharray="8 11"
                            />
                            <circle class="route-point route-point-one" cx="34" cy="332" r="7"/>
                            <circle class="route-point route-point-two" cx="247" cy="279" r="7"/>
                            <circle class="route-point route-point-three" cx="401" cy="104" r="7"/>
                            <circle class="route-point route-point-four" cx="642" cy="60" r="10"/>
                        </svg>
                        <span class="route-label route-label-origin absolute bottom-[12%] left-0">Punto de partida</span>
                        <span class="route-label route-label-destination absolute right-0 top-0">Próxima parada</span>
                        <span class="route-distance absolute bottom-[36%] right-[16%] font-mono text-xs uppercase tracking-[0.18em] text-white/60">
                            La ruta la decides tú
                        </span>
                    </div>
                </div>

                <a
                    href="#destinos-home"
                    class="scroll-cue pointer-events-auto absolute bottom-12 left-6 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-white sm:flex lg:left-16"
                >
                    <span class="flex h-9 w-6 justify-center rounded-full border border-white/35 pt-2">
                        <span class="scroll-dot h-1.5 w-1.5 rounded-full bg-spain-yellow"/>
                    </span>
                    Descubrir
                </a>
            </section>
        </div>

        <!-- Créditos del autor -->
        <div
            v-if="!slim"
            class="absolute bottom-2 left-1/2 z-30 -translate-x-1/2 rounded-md bg-spain-ink/75 px-4 py-2 text-xs text-white">
            Foto de
            <a
                href="https://unsplash.com/es/@v2osk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank"
                class="underline hover:text-spain-yellow"
            >
                v2osk
            </a>
            en
            <a
                href="https://unsplash.com/es/fotos/foggy-mountain-summit-1Z2niiBPg5A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank"
                class="underline hover:text-spain-yellow"
            >
                Unsplash
            </a>
        </div>
    </header>

    <transition name="sticky-nav">
        <header
            v-if="showStickyHeader"
            class="fixed inset-x-0 top-0 z-[60] border-b border-spain-yellow/70 bg-spain-wine/95 text-white shadow-lg backdrop-blur-md"
        >
            <nav class="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
                <nuxt-link
                    to="/"
                    aria-label="Ir a la página de inicio"
                    class="flex items-center gap-3 transition-opacity hover:opacity-75"
                >
                    <img
                        :src="`${baseURL}assets/images/logo-viajes.svg`"
                        alt=""
                        width="40"
                        height="40"
                        class="h-10 w-10"
                    >
                    <span class="hidden font-display text-xl font-bold sm:block">Blog de Viajes</span>
                </nuxt-link>

                <div class="hidden items-center gap-8 font-medium lg:flex">
                    <nuxt-link
                        v-for="link in navLinks"
                        :key="link.to"
                        :to="link.to"
                        class="transition-colors hover:text-spain-yellow"
                    >
                        {{ link.label }}
                    </nuxt-link>
                </div>

                <button
                    aria-label="Abrir o cerrar la navegación fija"
                    :aria-expanded="isStickyMenuOpen"
                    aria-controls="sticky-mobile-navigation"
                    class="flex h-10 w-10 items-center justify-center lg:hidden"
                    @click="isStickyMenuOpen = !isStickyMenuOpen"
                >
                    <Icon
                        :name="isStickyMenuOpen ? 'mdi:close' : 'mdi:menu'"
                        class="h-6 w-6"
                    />
                </button>
            </nav>

            <transition name="slide-down">
                <div
                    v-if="isStickyMenuOpen"
                    id="sticky-mobile-navigation"
                    class="absolute left-0 top-full w-full border-t border-spain-yellow/30 bg-spain-wine text-white shadow-lg lg:hidden"
                >
                    <ul class="flex flex-col items-center gap-5 py-6 text-sm font-medium">
                        <li v-for="link in navLinks" :key="link.to">
                            <nuxt-link
                                :to="link.to"
                                class="transition-colors hover:text-spain-yellow"
                                @click="isStickyMenuOpen = false"
                            >
                                {{ link.label }}
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </transition>
        </header>
    </transition>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";

defineProps({
    compact: {
        type: Boolean,
        default: false,
    },
    fullScreen: {
        type: Boolean,
        default: false,
    },
    home: {
        type: Boolean,
        default: false,
    },
    slim: {
        type: Boolean,
        default: false,
    },
});

// Obtén el baseURL desde la configuración del entorno
const { app: { baseURL } } = useRuntimeConfig();
const route = useRoute();

const isMenuOpen = ref(false);
const isStickyMenuOpen = ref(false);
const showStickyHeader = ref(false);
const headerElement = ref(null);

const navLinks = [
    {label: "Blog", to: "/post/blog"},
    {label: "Sobre mí", to: "/post/about"},
    {label: "Destinos", to: "/post/destinos"},
    {label: "Contacto", to: "/post/contacto"},
];

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const updateStickyHeader = () => {
    const headerHeight = headerElement.value?.offsetHeight ?? 0;
    const shouldShow = window.scrollY > Math.max(headerHeight - 64, 160);

    showStickyHeader.value = shouldShow;

    if (shouldShow) {
        isMenuOpen.value = false;
    } else {
        isStickyMenuOpen.value = false;
    }
};

onMounted(() => {
    updateStickyHeader();
    window.addEventListener("scroll", updateStickyHeader, {passive: true});
    window.addEventListener("resize", updateStickyHeader);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", updateStickyHeader);
    window.removeEventListener("resize", updateStickyHeader);
});

watch(() => route.path, async () => {
    isMenuOpen.value = false;
    isStickyMenuOpen.value = false;
    await nextTick();
    updateStickyHeader();
});
</script>

<style scoped>
/* Frontend design · signature: an itinerary drawn as the home page opens. */

.hero-kicker,
.hero-line,
.hero-copy,
.hero-actions,
.scroll-cue {
    animation: hero-content-in 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.hero-kicker { animation-delay: 0.18s; }
.hero-line { animation-delay: 0.3s; }
.hero-line-delayed { animation-delay: 0.4s; }
.hero-copy { animation-delay: 0.54s; }
.hero-actions { animation-delay: 0.66s; }
.scroll-cue { animation-delay: 1.2s; }

.route-sketch {
    color: rgb(241 191 0 / 78%);
}

.route-path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: draw-route 1.8s 0.55s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

.route-point,
.route-label,
.route-distance {
    opacity: 0;
    animation: route-point-in 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.route-point {
    fill: var(--color-spain-yellow);
    stroke: rgb(255 249 232 / 75%);
    stroke-width: 4;
    transform-box: fill-box;
    transform-origin: center;
}

.route-point-one { animation-delay: 0.58s; }
.route-point-two { animation-delay: 1.05s; }
.route-point-three { animation-delay: 1.45s; }
.route-point-four { animation-delay: 2s; }
.route-label-origin { animation-delay: 0.72s; }
.route-label-destination { animation-delay: 2.08s; }
.route-distance { animation-delay: 1.75s; }

.route-label {
    border: 1px solid rgb(255 255 255 / 22%);
    border-radius: 999px;
    background: rgb(37 26 22 / 52%);
    padding: 0.55rem 0.8rem;
    color: rgb(255 255 255 / 78%);
    font-family: var(--font-mono);
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    backdrop-filter: blur(8px);
}

.scroll-dot {
    animation: scroll-pulse 1.6s 1.5s ease-in-out infinite;
}

@keyframes hero-content-in {
    from {
        opacity: 0;
        transform: translateY(1.25rem);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes draw-route {
    to { stroke-dashoffset: 0; }
}

@keyframes route-point-in {
    from {
        opacity: 0;
        transform: scale(0.35);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes scroll-pulse {
    0%, 100% { transform: translateY(0); opacity: 1; }
    50% { transform: translateY(0.55rem); opacity: 0.35; }
}

/* Animación para el menú desplegable */
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.3s ease;
}

.slide-down-enter-from {
    transform: translateY(-10%);
    opacity: 0;
}

.slide-down-enter-to {
    transform: translateY(0);
    opacity: 1;
}

.slide-down-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.slide-down-leave-to {
    transform: translateY(-10%);
    opacity: 0;
}

.sticky-nav-enter-active,
.sticky-nav-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.sticky-nav-enter-from,
.sticky-nav-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
    .hero-kicker,
    .hero-line,
    .hero-copy,
    .hero-actions,
    .route-path,
    .route-point,
    .route-label,
    .route-distance,
    .scroll-cue,
    .scroll-dot {
        animation: none;
        opacity: 1;
        transform: none;
        stroke-dashoffset: 0;
    }
}
</style>

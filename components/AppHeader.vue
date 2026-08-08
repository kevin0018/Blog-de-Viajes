<template>
    <header
        ref="headerElement"
        class="relative overflow-hidden border-b-4 border-spain-yellow shadow-lg transition-[height] duration-500"
        :class="fullScreen
            ? 'h-screen min-h-[64rem] lg:min-h-[46rem]'
            : slim
                ? 'h-20'
            : compact
                ? 'h-[28vh] min-h-56 lg:h-[32vh]'
                : 'h-[50vh] min-h-80'"
    >
        <picture class="absolute inset-0">
            <source
                media="(max-width: 767px)"
                :srcset="`${baseURL}assets/images/header-bg-960.webp`"
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
        <div class="absolute inset-0 bg-spain-ink/55"/>

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
                    class="pointer-events-auto absolute bg-white text-spain-ink shadow-md w-full z-50 top-16 left-0 lg:hidden"
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
</style>

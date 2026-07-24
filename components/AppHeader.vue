<template>
    <header class="relative h-[50vh] min-h-80 overflow-hidden border-b-4 border-spain-yellow shadow-lg">
        <picture class="absolute inset-0">
            <source
                media="(max-width: 767px)"
                :srcset="`${baseURL}assets/images/header-bg-960.jpg`"
            >
            <img
                :src="`${baseURL}assets/images/header-bg-1920.jpg`"
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
        <div class="relative z-10 flex flex-col items-center h-full">
            <!-- Menú superior para escritorio y móviles -->
            <nav
                class="absolute top-0 left-0 w-full flex justify-between items-center px-8 lg:px-16 py-4 text-white lg:text-xl font-medium">
                <!-- Menú de la izquierda -->
                <div class="hidden lg:flex space-x-8 items-center">
                    <nuxt-link to="/post/blog" class="hover:text-spain-yellow">Blog</nuxt-link>
                    <nuxt-link to="/post/about" class="hover:text-spain-yellow">About</nuxt-link>
                </div>

                <!-- Logo centrado -->
                <a
                    :href="baseURL"
                    class="absolute left-1/2 transform -translate-x-1/2 top-4 lg:top-1/2 lg:-translate-y-1/2">
                    <img
                        :src="`${baseURL}assets/images/logo_blog.png`"
                        alt="Blog de Viajes"
                        width="60"
                        height="60"
                        fetchpriority="high"
                        decoding="sync"
                        class="h-16 w-auto"
                    >
                </a>

                <!-- Menú de la derecha -->
                <div class="hidden lg:flex space-x-8 items-center">
                    <nuxt-link to="/post/destinos" class="hover:text-spain-yellow">Destinos</nuxt-link>
                    <nuxt-link to="/post/contacto" class="hover:text-spain-yellow">Contacto</nuxt-link>
                    <!-- Redes sociales -->
                    <a href="#" class="flex items-center hover:text-spain-yellow">
                        <Icon name="mdi:facebook" class="h-6 w-6"/>
                    </a>
                    <a href="#" class="flex items-center hover:text-spain-yellow">
                        <Icon name="mdi:instagram" class="h-6 w-6"/>
                    </a>
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
                    class="absolute bg-white text-spain-ink shadow-md w-full z-50 top-16 left-0 lg:hidden"
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

                    <!-- Redes sociales -->
                    <div class="flex justify-center space-x-4 py-4 border-t border-spain-sand">
                        <a href="#" class="text-spain-ink hover:text-spain-red">
                            <Icon name="mdi:facebook" class="h-6 w-6"/>
                        </a>
                        <a href="#" class="text-spain-ink hover:text-spain-red">
                            <Icon name="mdi:instagram" class="h-6 w-6"/>
                        </a>
                    </div>
                </div>
            </transition>
        </div>

        <!-- Créditos del autor -->
        <div
            class="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs bg-spain-ink/75 px-4 py-2 rounded-md">
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
</template>

<script setup>
import { ref } from "vue";

// Obtén el baseURL desde la configuración del entorno
const { app: { baseURL } } = useRuntimeConfig();

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
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
</style>
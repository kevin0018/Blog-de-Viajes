<template>
    <div>
        <!-- Contenido principal -->
        <main class="my-8">
            <!-- Carrusel -->
            <section class="py-8 px-4">
                <h2 class="text-center text-2xl font-bold mb-6">Destinos</h2>
                <div class="relative">
                    <!-- Botones de navegación -->
                    <button
                        @click="scrollLeft"
                        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
                    >
                        <Icon name="mdi:chevron-left" class="w-6 h-6"/>
                    </button>
                    <button
                        @click="scrollRight"
                        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
                    >
                        <Icon name="mdi:chevron-right" class="w-6 h-6"/>
                    </button>

                    <!-- Contenedor del carrusel -->
                    <div
                        ref="carousel"
                        class="flex space-x-6 overflow-x-hidden snap-x snap-mandatory max-w-screen-lg mx-auto"
                    >
                        <!-- Tarjetas de destinos -->
                        <div
                            v-for="(destino, index) in destinos"
                            :key="index"
                            class="snap-center flex-shrink-0 w-72 bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-300"
                        >
                            <img
                                :src="`${baseURL}${destino.imagen}`"
                                :alt="destino.nombre"
                                class="w-full h-48 object-cover"
                            />
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-center">{{ destino.nombre }}</h3>
                                <!-- Créditos -->
                                <p class="text-sm text-gray-500 text-center mt-2">
                                    Foto de
                                    <a
                                        :href="destino.creditoAutorUrl"
                                        target="_blank"
                                        class="underline hover:text-blue-500"
                                    >
                                        {{ destino.autor }}
                                    </a>
                                    en
                                    <a
                                        :href="destino.creditoUnsplashUrl"
                                        target="_blank"
                                        class="underline hover:text-blue-500"
                                    >
                                        Unsplash
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Botón para ver todos los destinos -->
                <div class="mt-8 flex justify-center">
                    <nuxt-link
                        to="/post/destinos"
                        class="bg-gray-800 text-white py-2 px-8 rounded-full hover:bg-gray-600 transition"
                    >
                        Todos los destinos
                    </nuxt-link>
                </div>
            </section>

            <section>
                <div
                    class="bg-gray-100 py-16 px-4 relative bg-cover bg-center bg-no-repeat"
                    :style="{ backgroundImage: `url(${baseURL}assets/images/about.jpg)` }"
                >
                    <!-- Overlay para mejorar la legibilidad -->
                    <div class="absolute inset-0 bg-black bg-opacity-30"></div>

                    <!-- Contenido de la sección -->
                    <div class="relative z-10">
                        <h2 class="text-center text-2xl font-bold text-white mb-6">Sobre mí</h2>
                        <p class="text-center text-gray-200 max-w-2xl mx-auto">
                            Soy una persona apasionada por los viajes, la fotografía y la escritura.
                            A través de este blog, quiero compartir mis experiencias, consejos y recomendaciones
                            sobre los destinos que he visitado. Espero que encuentres inspiración y
                            útiles mis relatos para tus próximas aventuras.
                        </p>
                    </div>
                </div>

                <!-- Botón para más información -->
                <div class="mt-8 flex justify-center">
                    <nuxt-link
                        to="/post/about"
                        class="bg-gray-800 text-white py-2 px-8 rounded-full hover:bg-gray-600 transition"
                    >
                        ¿Quieres saber más?
                    </nuxt-link>
                </div>

                <!-- Créditos de la imagen -->
                <div class="mt-4 text-center text-sm text-gray-500">
                    Foto de
                    <a
                        href="https://unsplash.com/es/@urban_vintage?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                        class="underline hover:text-gray-700"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Urban Vintage
                    </a>
                    en
                    <a
                        href="https://unsplash.com/es/fotos/fotografia-de-paisaje-de-montana-golpeada-por-los-rayos-del-sol-78A265wPiO4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                        class="underline hover:text-gray-700"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Unsplash
                    </a>
                </div>
            </section>

            <!-- Botón flotante para subir -->
            <button
                v-if="mostrarBotonSubir"
                @click="scrollToTop"
                class="fixed bottom-20 right-6 bg-teal-500 text-white p-4 rounded-full shadow-lg hover:bg-teal-400 transition"
            >
                <Icon name="mdi:arrow-up" class="h-6 w-6"/>
            </button>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// Obtén el baseURL desde la configuración del entorno
const { app: { baseURL } } = useRuntimeConfig();

// Datos del carrusel
const destinos = ref([
    {
        nombre: "Londres",
        imagen: "assets/images/londres.jpg",
        autor: "Luke Stackpoole",
        creditoAutorUrl: "https://unsplash.com/es/@withluke?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/torre-del-big-ben-mOEqOtmuPG8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    {
        nombre: "Roma",
        imagen: "assets/images/roma.jpg",
        autor: "David Köhler",
        creditoAutorUrl: "https://unsplash.com/es/@davidkhlr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/colosseum-arena-photography-VFRTXGw1VjU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    {
        nombre: "París",
        imagen: "assets/images/paris.jpg",
        autor: "Anthony DELANOIX",
        creditoAutorUrl: "https://unsplash.com/es/@anthonydelanoix?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/eiffel-tower-during-daytime-Q0-fOL2nqZc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    {
        nombre: "Nueva York",
        imagen: "assets/images/nueva-york.jpg",
        autor: "Timo Wagner",
        creditoAutorUrl: "https://unsplash.com/es/@timovaknar?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/empire-state-building-nueva-york-por-la-noche-fT6-YkB0nfg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
]);

// Referencia al carrusel
const carousel = ref(null);

// Función para desplazar hacia la izquierda
const scrollLeft = () => {
    carousel.value.scrollBy({ left: -300, behavior: "smooth" });
};

// Función para desplazar hacia la derecha
const scrollRight = () => {
    carousel.value.scrollBy({ left: 300, behavior: "smooth" });
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
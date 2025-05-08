<template>
    <section class="py-12 px-4 bg-gray-100">
        <h1 class="text-center text-3xl font-bold mb-8">Destinos</h1>
        <p class="text-center text-gray-700 max-w-4xl mx-auto mb-12">
            Explora los destinos más increíbles del mundo. Aquí encontrarás inspiración, consejos y experiencias únicas
            sobre
            lugares fascinantes que hemos visitado. ¡Prepárate para tu próxima aventura!
        </p>

        <!-- Contenedor de tarjetas -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div
                v-for="(destino, index) in destinos"
                :key="index"
                class="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
            >
                <!-- Imagen del destino -->
                <img
                    :src="`${baseURL}${destino.imagen}`"
                    :alt="destino.nombre"
                    class="w-full h-48 object-cover"
                />
                <!-- Contenido del destino -->
                <div class="p-6">
                    <h2 class="text-xl font-bold text-gray-800">{{ destino.nombre }}</h2>
                    <p class="text-sm text-gray-500">
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

        <!-- Botón flotante para subir -->
        <button
            v-if="mostrarBotonSubir"
            @click="scrollToTop"
            class="fixed bottom-20 right-6 bg-teal-500 text-white p-4 rounded-full shadow-lg hover:bg-teal-400 transition"
        >
            <Icon name="mdi:arrow-up" class="h-6 w-6" />
        </button>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Obtén el baseURL desde la configuración del entorno (Nuxt 3)
const { app: { baseURL } } = useRuntimeConfig();

// Destinos de viaje
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
    {
        nombre: "Tokio",
        imagen: "assets/images/tokio.jpg",
        autor: "Erik Eastman",
        creditoAutorUrl: "https://unsplash.com/es/@erikeae?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditoUnsplashUrl: "https://unsplash.com/es/fotos/foto-de-personas-cruzando-la-carretera-4HG5hlhmZg8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    {
        nombre: "Barcelona",
        imagen: "assets/images/barcelona.jpg",
        autor: "Logan Armstrong",
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
<template>
  <section class="py-12 px-4 bg-gray-100">
    <h1 class="text-center text-3xl font-bold mb-8">Blog</h1>
    <p class="text-center text-gray-700 max-w-4xl mx-auto mb-12">
      Encuentra artículos interesantes, consejos de viaje y experiencias únicas en nuestro blog. ¡Prepárate para aprender y explorar!
    </p>

    <!-- Contenedor de tarjetas de blog -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
      >
        <!-- Imagen de la publicación -->
        <img
          :src="`${baseURL}${post.imagen}`"
          :alt="post.titulo"
          class="w-full h-48 object-cover"
        />
        <!-- Contenido de la publicación -->
        <div class="p-6">
          <h2 class="text-xl font-bold text-gray-800">{{ post.titulo }}</h2>
          <p class="text-sm text-gray-700 mt-2">
            {{ post.resumen }}
          </p>
          <nuxt-link
            :to="post.enlace"
            class="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Leer más
          </nuxt-link>
        </div>
        <!-- Créditos de la imagen -->
        <div class="p-4 bg-gray-50 text-center text-sm text-gray-500">
          Foto de
          <a
            :href="post.creditoAutorUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="underline hover:text-blue-500"
          >
            {{ post.autor }}
          </a>
          en
          <a
            :href="post.creditoUnsplashUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="underline hover:text-blue-500"
          >
            Unsplash
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const { app: { baseURL } } = useRuntimeConfig();

const posts = ref([
  {
    titulo: "10 Consejos para Viajar con Presupuesto Limitado",
    resumen: "Descubre cómo ahorrar en tus viajes sin sacrificar la experiencia. Estos consejos te ayudarán a disfrutar más por menos.",
    imagen: "assets/images/presupuesto.jpg",
    enlace: "",
    autor: "Kelly Sikkema",
    creditoAutorUrl: "https://unsplash.com/es/@kellysikkema?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    creditoUnsplashUrl: "https://unsplash.com/es/fotos/telefono-inteligente-android-negro-3-Tc_5LROrM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    titulo: "Los Mejores Destinos para el 2025",
    resumen: "Explora los destinos más recomendados para este año. Desde playas paradisíacas hasta ciudades vibrantes.",
    imagen: "assets/images/destinos.jpg",
    enlace: "",
    autor: "Hennie Stander",
    creditoAutorUrl: "https://unsplash.com/es/@henniestander?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    creditoUnsplashUrl: "https://unsplash.com/es/fotos/foto-en-escala-de-grises-del-letrero-de-la-calle-MKvKLElBLwY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    titulo: "Cómo Empacar Ligero para Cualquier Viaje",
    resumen: "Aprende a empacar solo lo esencial y maximiza el espacio de tu maleta. Ideal para viajeros frecuentes.",
    imagen: "assets/images/empacar.jpg",
    enlace: "",
    autor: "Raquel Brepohl",
    creditoAutorUrl: "https://unsplash.com/es/@rabrepohl?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    creditoUnsplashUrl: "https://unsplash.com/es/fotos/una-pila-de-equipaje-sentada-al-lado-de-un-edificio-Wrer-YhaN8Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
]);
</script>
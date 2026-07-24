<template>
  <section class="py-12 px-4 bg-spain-paper">
    <h1 class="section-title text-center text-3xl font-bold mb-8">Blog</h1>
    <p class="text-center text-spain-ink max-w-4xl mx-auto mb-12">
      Encuentra artículos interesantes, consejos de viaje y experiencias únicas en nuestro blog. ¡Prepárate para aprender y explorar!
    </p>

    <!-- Contenedor de tarjetas de blog -->
    <div class="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="flex self-stretch flex-col overflow-hidden rounded-lg border border-spain-sand bg-white shadow-md"
      >
        <!-- Imagen de la publicación -->
        <img
          :src="`${baseURL}${post.imagen}`"
          :alt="post.titulo"
          class="w-full h-48 object-cover"
        >
        <!-- Contenido de la publicación -->
        <div class="flex flex-1 flex-col p-6">
          <h2 class="text-xl font-bold text-spain-ink">{{ post.titulo }}</h2>
          <p class="mt-2 text-sm text-spain-ink">
            {{ post.resumen }}
          </p>
          <div class="mt-auto pt-4">
            <nuxt-link
              :to="post.enlace"
              class="inline-block rounded-md bg-spain-red px-4 py-2 text-white transition hover:bg-spain-wine"
            >
              Leer más
            </nuxt-link>
          </div>
        </div>
        <!-- Créditos de la imagen -->
        <div class="p-4 bg-spain-yellow/10 text-center text-sm text-spain-ink/65">
          Foto de
          <a
            :href="post.creditoAutorUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="underline hover:text-spain-red"
          >
            {{ post.autor }}
          </a>
          en
          <a
            :href="post.creditoUnsplashUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="underline hover:text-spain-red"
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

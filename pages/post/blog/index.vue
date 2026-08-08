<template>
  <section class="py-12 px-4 bg-spain-paper">
    <h1 class="section-title text-center text-3xl font-bold mb-8">Blog</h1>
    <p class="text-center text-spain-ink max-w-4xl mx-auto mb-12">
      Encuentra artículos interesantes, consejos de viaje y experiencias únicas en nuestro blog. ¡Prepárate para aprender y explorar!
    </p>

    <!-- Contenedor de tarjetas de blog -->
    <div class="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="post in posts"
        :key="post.slug"
        class="relative flex self-stretch flex-col overflow-hidden rounded-lg border border-spain-sand bg-white shadow-md"
      >
        <!-- Imagen de la publicación -->
        <img
          :src="`${baseURL}${post.imagen}`"
          :alt="post.alt"
          width="640"
          height="384"
          loading="lazy"
          decoding="async"
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
              :to="`/post/blog/${post.slug}`"
              :aria-label="`Leer ${post.titulo}`"
              class="inline-block rounded-md bg-spain-red px-4 py-2 text-white transition-colors after:absolute after:inset-0 after:content-[''] hover:bg-spain-wine"
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
            class="relative z-10 underline hover:text-spain-red"
          >
            {{ post.autor }}
          </a>
          en
          <a
            :href="post.creditoUnsplashUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="relative z-10 underline hover:text-spain-red"
          >
            Unsplash
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { articles } from "~/data/articles";

const { app: { baseURL } } = useRuntimeConfig();

const posts = articles;
</script>

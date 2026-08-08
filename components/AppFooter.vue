<template>
  <footer class="bg-spain-wine text-white py-8">
    <div class="container mx-auto px-4">
      <!-- Sección principal del footer -->
      <div class="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0">
        <!-- Información del blog -->
        <div class="text-center lg:text-left">
          <p class="text-sm lg:text-base">
            Mountain icon by
            <a
              href="https://icons8.com"
              target="_blank"
              rel="noopener noreferrer"
              class="underline hover:text-spain-yellow"
            >Icons8</a>
          </p>
          <p class="text-sm lg:text-base">&copy; {{ currentYear }} Blog de Viajes — Kevin Hernández</p>
        </div>

        <!-- Navegación -->
        <nav class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-center lg:text-left">
          <nuxt-link to="/" class="text-sm lg:text-base hover:text-spain-yellow">Inicio</nuxt-link>
          <nuxt-link to="/post/about" class="text-sm lg:text-base hover:text-spain-yellow">About</nuxt-link>
          <nuxt-link to="/post/destinos" class="text-sm lg:text-base hover:text-spain-yellow">Destinos</nuxt-link>
          <nuxt-link to="/post/contacto" class="text-sm lg:text-base hover:text-spain-yellow">Contacto</nuxt-link>
        </nav>

        <!-- Proyecto -->
        <div class="flex justify-center">
          <a
            href="https://github.com/kevin0018/Blog-de-Viajes"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm transition-colors hover:text-spain-yellow lg:text-base"
            aria-label="Ver el código fuente en GitHub"
          >
            <Icon name="mdi:github" class="h-6 w-6" />
            Código fuente
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
footer {
  border-top: 4px solid var(--color-spain-yellow);
}
</style>

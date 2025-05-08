<template>
  <footer class="bg-gray-800 text-white py-8">
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
              class="underline hover:text-gray-400"
            >Icons8</a>
          </p>
          <p class="text-sm lg:text-base">&copy; 2025 Blog de Viajes - Todos los derechos reservados</p>
        </div>

        <!-- Navegación -->
        <nav class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-center lg:text-left">
          <nuxt-link to="/" class="text-sm lg:text-base hover:text-gray-400">Inicio</nuxt-link>
          <nuxt-link to="/post/about" class="text-sm lg:text-base hover:text-gray-400">About</nuxt-link>
          <nuxt-link to="/post/destinos" class="text-sm lg:text-base hover:text-gray-400">Destinos</nuxt-link>
          <nuxt-link to="/post/contacto" class="text-sm lg:text-base hover:text-gray-400">Contacto</nuxt-link>
        </nav>

        <!-- Redes sociales -->
        <div class="flex space-x-6 justify-center">
          <a
            href="#"
            target="_blank"
            class="hover:text-gray-400"
            aria-label="Facebook"
          >
            <Icon name="mdi:facebook" class="h-10 w-10 lg:h-6 lg:w-6" />
          </a>
          <a
            href="#"
            target="_blank"
            class="hover:text-gray-400"
            aria-label="Instagram"
          >
            <Icon name="mdi:instagram" class="h-10 w-10 lg:h-6 lg:w-6" />
          </a>
          <a
            href="#"
            target="_blank"
            class="hover:text-gray-400"
            aria-label="Twitter"
          >
            <Icon name="mdi:twitter" class="h-10 w-10 lg:h-6 lg:w-6" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
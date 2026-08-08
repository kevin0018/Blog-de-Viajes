<template>
  <footer class="bg-spain-wine text-white py-8">
    <div class="container mx-auto px-4">
      <!-- Sección principal del footer -->
      <div class="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0">
        <!-- Información del blog -->
        <div class="text-center lg:text-left">
          <p class="text-sm lg:text-base">
            {{ $t('footer.iconCredit') }}
            <a
              href="https://icons8.com"
              target="_blank"
              rel="noopener noreferrer"
              class="underline hover:text-spain-yellow"
            >Icons8</a>
          </p>
          <p class="text-sm lg:text-base">&copy; {{ currentYear }} {{ $t('footer.copyright') }}</p>
        </div>

        <!-- Navegación -->
        <nav class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-center lg:text-left">
          <nuxt-link :to="localePath('/')" class="text-sm lg:text-base hover:text-spain-yellow">{{ $t('nav.home') }}</nuxt-link>
          <nuxt-link :to="localePath('/about')" class="text-sm lg:text-base hover:text-spain-yellow">{{ $t('nav.about') }}</nuxt-link>
          <nuxt-link :to="localePath('/destinations')" class="text-sm lg:text-base hover:text-spain-yellow">{{ $t('nav.destinations') }}</nuxt-link>
          <nuxt-link :to="localePath('/contact')" class="text-sm lg:text-base hover:text-spain-yellow">{{ $t('nav.contact') }}</nuxt-link>
        </nav>

        <!-- Proyecto -->
        <div class="flex justify-center">
          <a
            href="https://github.com/kevin0018/Blog-de-Viajes"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm transition-colors hover:text-spain-yellow lg:text-base"
            :aria-label="$t('footer.github')"
          >
            <Icon name="mdi:github" class="h-6 w-6" />
            {{ $t('nav.source') }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
const localePath = useLocalePath();
</script>

<style scoped>
footer {
  border-top: 4px solid var(--color-spain-yellow);
}
</style>

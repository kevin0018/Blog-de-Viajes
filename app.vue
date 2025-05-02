<template>
    <div class="app-wrapper">
        <AppHeader />
        <main>
            <NuxtPage />
        </main>
        <AppFooter />
    </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
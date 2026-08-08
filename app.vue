<template>
    <div class="app-wrapper">
        <AppHeader
            :compact="compactHeader"
            :full-screen="contactPage"
            :home="homePage"
            :slim="detailPage"
        />
        <main>
            <NuxtPage />
        </main>
        <AppFooter />
    </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

const route = useRoute();
useCanonical();
const homePage = computed(() => route.path === "/");
const contactPage = computed(() => route.path === "/post/contacto");
const detailPage = computed(() => (
    route.path.startsWith("/post/blog/") || route.path.startsWith("/post/destinos/")
));
const compactHeader = computed(() => route.path !== "/" && !contactPage.value);
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

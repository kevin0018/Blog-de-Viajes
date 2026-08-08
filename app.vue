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
const localeRoutePath = computed(() => route.path.replace(/^\/en(?=\/|$)/, "") || "/");
const head = useLocaleHead({seo: true});
useHead(() => ({
    htmlAttrs: head.value.htmlAttrs,
    link: head.value.link,
    meta: head.value.meta,
}));
const homePage = computed(() => localeRoutePath.value === "/");
const contactPage = computed(() => localeRoutePath.value === "/contact");
const detailPage = computed(() => (
    localeRoutePath.value.startsWith("/blog/") || localeRoutePath.value.startsWith("/destinations/")
));
const compactHeader = computed(() => localeRoutePath.value !== "/" && !contactPage.value);
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

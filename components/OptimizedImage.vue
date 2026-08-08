<template>
    <picture class="contents">
        <source :srcset="avifSource" type="image/avif">
        <img :src="src" :alt="alt" v-bind="$attrs">
    </picture>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false });

const props = defineProps<{
    src: string;
    alt: string;
}>();

const avifSource = computed(() => props.src.replace(/\.webp(?=($|[?#]))/, ".avif"));
</script>

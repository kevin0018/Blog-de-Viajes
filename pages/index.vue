<template>
    <!-- Sección principal -->
    <section class="main-header">
        <h1>Blog de viajes</h1>
    </section>

    <!-- Destino destacado -->
    <section class="featured-destination">
        <h2>Destino destacado: Barcelona</h2>
        <div class="destination-grid">
            <div v-for="province in provinces" :key="province.slug" class="card">
                <nuxt-link :to="'/destino/' + province.slug" class="card-link">
                    <img :src="province.image" :alt="province.title" class="card-image"/>
                    <div class="card-overlay">
                        <h3 class="card-title">{{ province.title }}</h3>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </section>

    <!-- Últimas publicaciones -->
    <section class="latest-posts">
        <h2>Últimos POST DE VIAJE</h2>
        <ul>
            <li v-for="post in posts" :key="post.slug">
                <nuxt-link :to="'/post/' + post.slug">{{ post.title }}</nuxt-link>
            </li>
        </ul>
    </section>
</template>

<script setup>
import {useHead} from 'nuxt/app';
import "@/assets/css/index.css";

useHead({
    title: 'Blog de Viajes',
    link: [
        {rel: 'icon', type: 'image/png', href: 'assets/images/logo_blog.png'}
    ],
    meta: [
        {name: 'description', content: 'Un blog sobre viajes y aventuras por el mundo.'},
        {name: 'keywords', content: 'viajes, aventuras, turismo, blog'}
    ]
});

const provinces = [
    { title: "Qué visitar en Barcelona", slug: "barcelona", image: "assets/images/barcelona.jpg" },
    { title: "Qué visitar en Sevilla", slug: "sevilla", image: "assets/images/sevilla.jpg" },
    { title: "Qué visitar en Madrid", slug: "madrid", image: "assets/images/madrid.jpg" }
];

const posts = [
    { title: "Descubre la magia de París", slug: "paris" },
    { title: "Aventuras en la Gran Muralla China", slug: "gran-muralla" },
    { title: "Explorando la selva amazónica", slug: "selva-amazonica" }
];
</script>
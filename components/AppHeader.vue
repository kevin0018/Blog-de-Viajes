<template>
    <header class="header">
        <div class="logo_nav">
            <!-- Logo -->
            <a>
                <img src="/assets/images/logo_blog.png" alt="Logo del blog" class="logo_blog"/>
            </a>
            <!-- Navegación -->
            <nav class="nav">
                <ul>
                    <li>
                        <nuxt-link to="/">Blog</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/about">About</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/destinos">Destinos</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/contacto">Contacto</nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
        <!-- Redes sociales -->
        <ul class="social-icons">
            <li>
                <Icon name="mdi:facebook"/>
            </li>
            <li>
                <Icon name="mdi:instagram"/>
            </li>
            <li>
                <Icon name="mdi:twitter"/>
            </li>
            <li>
                <Icon name="mdi:youtube"/>
            </li>
        </ul>
    </header>
</template>

<script setup>
import "@/assets/css/header.css";
</script>
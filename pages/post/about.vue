<template>
    <section class="py-12 px-4 bg-spain-paper">
        <h1 class="section-title text-center text-3xl font-bold mb-8">Sobre mí</h1>
        <div class="max-w-4xl mx-auto text-spain-ink text-center">
            <p class="mb-6">
                Soy Kevin, desarrollador y autor de este proyecto. Creé Blog de Viajes para reunir dos cosas que
                disfruto: descubrir lugares nuevos y construir experiencias web cuidadas.
            </p>
            <p class="mb-6">
                Aquí convierto ideas de viaje en pequeñas guías prácticas mientras experimento con Nuxt, Vue,
                accesibilidad y diseño responsive. Cada destino es también una oportunidad para mejorar el producto.
            </p>
            <p>
                El proyecto continúa creciendo: el siguiente paso es transformar estas guías en escapadas que puedas
                preparar, guardar y compartir.
            </p>
        </div>
        <div class="mt-8 flex justify-center">
            <nuxt-link
                to="/post/contacto"
                class="bg-spain-red text-white py-2 px-6 rounded-md transition-colors hover:bg-spain-wine"
            >
                Contactar
            </nuxt-link>
        </div>
        <div class="mt-12">
            <img
                :src="`${baseURL}assets/images/about_us.jpg`"
                alt="Sobre nosotros"
                class="mx-auto rounded-lg shadow-lg max-w-md h-auto"
            >
            <!-- Créditos de la imagen -->
            <div class="mt-4 text-center text-sm text-spain-ink/65">
                Foto de
                <a
                    href="https://unsplash.com/es/@derstudi?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    class="underline hover:text-spain-red"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Timon Studler
                </a>
                en
                <a
                    href="https://unsplash.com/es/fotos/seis-siluetas-de-personas-saltando-durante-la-salida-del-sol-BIk2ANMmNz4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    class="underline hover:text-spain-red"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Unsplash
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
const { app: { baseURL } } = useRuntimeConfig();
</script>

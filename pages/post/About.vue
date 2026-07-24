<template>
    <section class="py-12 px-4 bg-spain-paper">
        <h1 class="section-title text-center text-3xl font-bold mb-8">Sobre Nosotros</h1>
        <div class="max-w-4xl mx-auto text-spain-ink text-center">
            <p class="mb-6">
                Somos un equipo apasionado por los viajes, la fotografía y la escritura. Nos encanta explorar nuevos
                lugares, experimentar diferentes culturas y compartir nuestras aventuras con el mundo.
            </p>
            <p class="mb-6">
                Nuestro objetivo es inspirarte a descubrir el mundo con nuestras experiencias, consejos y recursos
                prácticos. Creemos que viajar es una forma de enriquecer la vida y crear recuerdos inolvidables.
            </p>
            <p>
                Gracias por ser parte de nuestra comunidad de viajeros. ¡Esperamos que encuentres inspiración en nuestro
                blog y te unas a nosotros en esta gran aventura!
            </p>
        </div>
        <div class="mt-8 flex justify-center">
            <nuxt-link
                to="/post/contacto"
                class="bg-spain-red text-white py-2 px-6 rounded-md hover:bg-spain-wine transition-all"
            >
                Contáctanos
            </nuxt-link>
        </div>
        <div class="mt-12">
            <img
                src="/assets/images/about_us.jpg"
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
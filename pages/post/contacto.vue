<template>
    <section class="contact-stage relative z-20 flex items-start px-4 pb-20 pt-28 sm:px-6 lg:items-center lg:px-12">
        <div class="mx-auto grid min-w-0 w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div class="min-w-0 text-white">
                <p class="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-spain-yellow">
                    Cuéntanos tu próxima ruta
                </p>
                <h1 class="max-w-xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                    Hablemos de viajes
                </h1>
                <p class="mt-5 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
                    ¿Tienes una duda, una recomendación o un destino pendiente?
                    Escríbenos y seguimos la conversación.
                </p>
            </div>

            <aside class="w-full min-w-0 rounded-2xl border border-spain-yellow/50 bg-spain-paper/95 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
                <h2 class="text-2xl font-bold text-spain-wine sm:text-3xl">Contacto y colaboración</h2>
                <p class="mt-3 text-sm leading-6 text-spain-ink/70 sm:text-base">
                    Este blog es un proyecto abierto. Puedes revisar el código, proponer un destino o dejar una idea
                    directamente en GitHub; así la conversación queda vinculada a una mejora real del proyecto.
                </p>

                <div class="mt-8 grid gap-4">
                    <a
                        href="https://github.com/kevin0018"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center gap-2 rounded-md bg-spain-red px-6 py-3 font-semibold text-white transition-colors hover:bg-spain-wine"
                    >
                        <Icon name="mdi:github" class="h-5 w-5"/>
                        Ver perfil de Kevin
                    </a>
                    <a
                        href="https://github.com/kevin0018/Blog-de-Viajes/issues/new"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center gap-2 rounded-md border border-spain-red px-6 py-3 font-semibold text-spain-red transition-colors hover:bg-spain-yellow/20"
                    >
                        <Icon name="mdi:map-marker-plus-outline" class="h-5 w-5"/>
                        Proponer un destino
                    </a>
                </div>
            </aside>
        </div>
    </section>
</template>

<style scoped>
.contact-stage {
    min-height: max(100vh, 64rem);
    margin-top: calc(-1 * max(100vh, 64rem));
}

@media (min-width: 64rem) {
    .contact-stage {
        min-height: max(100vh, 46rem);
        margin-top: calc(-1 * max(100vh, 46rem));
    }
}
</style>

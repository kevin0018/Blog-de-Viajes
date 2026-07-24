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

            <form
                class="w-full min-w-0 rounded-2xl border border-spain-yellow/50 bg-spain-paper/95 p-6 shadow-2xl backdrop-blur-sm sm:p-8"
                @submit.prevent
            >
                <h2 class="text-2xl font-bold text-spain-wine sm:text-3xl">Contacta con nosotros</h2>
                <p class="mt-2 text-sm leading-6 text-spain-ink/70">
                    Déjanos tu mensaje y te responderemos lo antes posible.
                </p>

                <div class="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                        <label for="name" class="mb-2 block text-sm font-bold text-spain-ink">Nombre</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autocomplete="name"
                            required
                            placeholder="Tu nombre"
                            class="w-full rounded-md border border-spain-sand bg-white px-4 py-3 text-spain-ink focus:border-spain-red focus:ring-2 focus:ring-spain-red/30"
                        >
                    </div>

                    <div>
                        <label for="email" class="mb-2 block text-sm font-bold text-spain-ink">Correo electrónico</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required
                            placeholder="tu@email.com"
                            class="w-full rounded-md border border-spain-sand bg-white px-4 py-3 text-spain-ink focus:border-spain-red focus:ring-2 focus:ring-spain-red/30"
                        >
                    </div>
                </div>

                <div class="mt-5">
                    <label for="message" class="mb-2 block text-sm font-bold text-spain-ink">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        placeholder="¿En qué podemos ayudarte?"
                        class="w-full resize-y rounded-md border border-spain-sand bg-white px-4 py-3 text-spain-ink focus:border-spain-red focus:ring-2 focus:ring-spain-red/30"
                    />
                </div>

                <button
                    type="submit"
                    class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-spain-red px-6 py-3 font-semibold text-white transition hover:bg-spain-wine"
                >
                    Enviar mensaje
                    <Icon name="mdi:send-outline" class="h-5 w-5"/>
                </button>
            </form>
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

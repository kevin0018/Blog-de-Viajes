<template>
  <section class="py-12 px-4 bg-spain-paper">
    <h2 class="section-title text-center text-2xl font-bold mb-6">Contáctame</h2>
    <form class="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <!-- Nombre -->
      <div class="mb-4">
        <label for="name" class="block text-sm font-bold text-spain-ink mb-2">Nombre</label>
        <input
          id="name"
          type="text"
          placeholder="Tu nombre"
          class="w-full px-4 py-2 border border-spain-sand rounded-md focus:ring-2 focus:ring-spain-red "
        >
      </div>

      <!-- Correo Electrónico -->
      <div class="mb-4">
        <label for="email" class="block text-sm font-bold text-spain-ink mb-2">Correo Electrónico</label>
        <input
          id="email"
          type="email"
          placeholder="Tu correo electrónico"
          class="w-full px-4 py-2 border border-spain-sand rounded-md focus:ring-2 focus:ring-spain-red "
        >
      </div>

      <!-- Mensaje -->
      <div class="mb-6">
        <label for="message" class="block text-sm font-bold text-spain-ink mb-2">Mensaje</label>
        <textarea
          id="message"
          rows="4"
          placeholder="Escribe tu mensaje"
          class="w-full px-4 py-2 border border-spain-sand rounded-md focus:ring-2 focus:ring-spain-red "
        />
      </div>

      <!-- Botón de Enviar -->
      <div class="text-center">
        <button
          type="submit"
          class="bg-spain-red text-white py-2 px-6 rounded-md hover:bg-spain-wine transition-all"
        >
          Enviar
        </button>
      </div>
    </form>
  </section>
</template>
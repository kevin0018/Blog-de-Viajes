<template>
  <section class="py-12 px-4 bg-gray-100">
    <h2 class="text-center text-2xl font-bold mb-6">Contáctame</h2>
    <form class="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <!-- Nombre -->
      <div class="mb-4">
        <label for="name" class="block text-sm font-bold text-gray-700 mb-2">Nombre</label>
        <input
          type="text"
          id="name"
          placeholder="Tu nombre"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <!-- Correo Electrónico -->
      <div class="mb-4">
        <label for="email" class="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          placeholder="Tu correo electrónico"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <!-- Mensaje -->
      <div class="mb-6">
        <label for="message" class="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
        <textarea
          id="message"
          rows="4"
          placeholder="Escribe tu mensaje"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        ></textarea>
      </div>

      <!-- Botón de Enviar -->
      <div class="text-center">
        <button
          type="submit"
          class="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-green-500 transition-all"
        >
          Enviar
        </button>
      </div>
    </form>
  </section>
</template>
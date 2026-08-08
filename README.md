# Blog de Viajes

Una experiencia editorial construida con Nuxt 3 para descubrir ciudades y
convertir inspiración en una escapada concreta. El proyecto combina contenido
tipado, rutas estáticas y una herramienta de planificación que funciona sin
cuentas ni backend.

[Ver demo](https://kevin0018.github.io/Blog-de-Viajes/) ·
[Código fuente](https://github.com/kevin0018/Blog-de-Viajes)

## Recorrido recomendado

1. Abre **Destinos** y filtra las ciudades por duración, época, nivel de gasto
   o estilo de viaje.
2. Entra en una guía y construye una ruta de 1, 3 o 5 días.
3. Añade, elimina y reordena paradas; el viaje se recuperará al volver desde el
   mismo navegador.
4. Copia el enlace para compartir exactamente la duración y el orden elegidos.
5. Visita **Blog** para leer los tres artículos completos y comprobar la
   navegación dinámica.

## Qué demuestra

- **Producto:** filtros combinables, estados vacíos recuperables y un
  planificador persistente y compartible.
- **Arquitectura:** fuentes de datos tipadas para artículos y destinos, rutas
  dinámicas y lógica reutilizable en composables y utilidades puras.
- **Frontend:** Vue 3, Nuxt 3, TypeScript estricto y Tailwind CSS 4.
- **Diseño:** identidad editorial de cuaderno de ruta, bento reservado para el
  mural de destinos y estructuras específicas para lectura y planificación.
- **Accesibilidad:** controles nativos, foco visible, nombres accesibles,
  estados anunciados y reducción de movimiento.
- **Entrega:** generación estática para GitHub Pages, canonical, Open Graph,
  JSON-LD, sitemap y assets AVIF responsivos con fallback WebP reproducible.

## Arquitectura

```text
data/           contenido tipado y única fuente de verdad
pages/          archivo y detalles dinámicos de artículos y destinos
components/     navegación, pie y planificador interactivo
composables/    persistencia, URL compartible, canonical y JSON-LD
utils/          lógica pura del itinerario y configuración del sitio
server/routes/  sitemap generado a partir del contenido real
tests/          pruebas unitarias, de componente y end-to-end
```

El itinerario usa un esquema de almacenamiento versionado. Al abrir un enlace
compartido, sus parámetros tienen prioridad sobre el estado local; cualquier
edición posterior sincroniza de nuevo la URL y `localStorage`.

## Calidad automatizada

```bash
pnpm lint          # ESLint
pnpm typecheck     # vue-tsc mediante Nuxt
pnpm test          # Vitest: utilidades y componentes
pnpm test:e2e      # Playwright: recorrido del planificador
pnpm generate      # salida estática completa
```

El workflow de GitHub Actions ejecuta las cinco puertas antes de desplegar. La
suite actual contiene seis pruebas de Vitest y cinco comprobaciones end-to-end
en Chromium. No se publican métricas de rendimiento hasta disponer de una
medición reproducible sobre la URL desplegada.

## Desarrollo local

Requisitos: Node.js 22 y pnpm 11.

```bash
git clone https://github.com/kevin0018/Blog-de-Viajes.git
cd Blog-de-Viajes
pnpm install
pnpm dev
```

La aplicación usa el mismo `baseURL` que GitHub Pages, por lo que se abre en:

```text
http://localhost:3000/Blog-de-Viajes/
```

Para regenerar las imágenes optimizadas desde los JPG fuente:

```bash
pnpm images:optimize
```

## Decisiones y límites

- La persistencia es local y deliberadamente no requiere registro; no sincroniza
  viajes entre dispositivos salvo mediante el enlace compartido.
- Las guías son puntos de partida editoriales, no sustituyen información oficial
  sobre visados, seguridad, precios o accesibilidad de cada destino.
- El despliegue es completamente estático. Meteorología en tiempo real o mapas
  con datos externos requerirían revisar alojamiento, caché y manejo de errores.
- Las fotografías proceden de Unsplash y conservan sus créditos en la interfaz.

## Despliegue

Cada push a `main` puede publicar mediante el workflow oficial de GitHub Pages.
También existe un despliegue manual de compatibilidad con la rama `gh-pages`:

```bash
pnpm generate
pnpm deploy
```

## Autor y licencia

Creado por [Kevin Hernández](https://github.com/kevin0018). Distribuido bajo
licencia MIT.

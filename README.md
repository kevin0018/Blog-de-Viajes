# Blog de Viajes

Este es un proyecto de blog de viajes desarrollado con [Nuxt 3](https://nuxt.com/), desplegado en [GitHub Pages](https://pages.github.com/).

## 🚀 Demo

Accede a la versión en línea aquí:  
[https://kevin0018.github.io/Blog-de-Viajes/](https://kevin0018.github.io/Blog-de-Viajes/)

## 🛠️ Herramientas utilizadas

- [Nuxt 3](https://nuxt.com/) — Framework para aplicaciones web con Vue.js
- [Vue 3](https://vuejs.org/) — Librería JavaScript progresiva
- [GitHub Pages](https://pages.github.com/) — Hosting estático gratuito para proyectos
- [gh-pages](https://github.com/tschaub/gh-pages) — Herramienta para desplegar en GitHub Pages
- [Node.js](https://nodejs.org/) — Entorno de ejecución JavaScript
- [pnpm](https://pnpm.io/) — Gestor de paquetes y lockfile reproducible
- [PowerShell en Windows 11](https://learn.microsoft.com/en-us/powershell/) — Consola utilizada para comandos
- [PyCharm](https://www.jetbrains.com/pycharm/) — IDE principal de desarrollo

## 📦 Instalación y desarrollo local

1. Clona el repositorio:
   ```powershell
   git clone https://github.com/kevin0018/Blog-de-Viajes.git
   cd Blog-de-Viajes
   ```

2. Instala las dependencias:
   ```powershell
   pnpm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```powershell
   pnpm dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Generar versión estática

```powershell
pnpm generate
```
El contenido estático se genera en la carpeta `.output/public/`.

## 🚢 Despliegue en GitHub Pages

Cada push a `main` ejecuta GitHub Actions para validar el proyecto, generar el sitio
estático y desplegarlo mediante el flujo oficial de GitHub Pages.

El despliegue también puede lanzarse manualmente desde la pestaña **Actions** de
GitHub. Como alternativa, puedes seguir publicando en la rama `gh-pages` con:

```powershell
pnpm generate
pnpm deploy
```

Esto subirá el contenido de `.output/public/` a la rama `gh-pages`.

## ⚙️ Configuración importante

- En `nuxt.config.ts` asegúrate de tener el `baseURL` correcto:
  ```js
  export default defineNuxtConfig({
    app: {
      baseURL: '/Blog-de-Viajes/'
    }
  })
  ```
- El favicon y los assets deben ser referenciados con rutas relativas o con el baseURL delante.

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

---

¡Feliz viaje y feliz coding! ✈️🌎
---

**Autor**: [Kevin Hernández](https://github.com/kevin0018)  
Fecha de inicio: Mayo 2025

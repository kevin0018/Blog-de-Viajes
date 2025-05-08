# Blog de Viajes

Este es un proyecto de blog de viajes desarrollado con [Nuxt 3](https://nuxt.com/), desplegado en [GitHub Pages](https://pages.github.com/).

## 🚀 Demo

Accede a la versión en línea aquí:  
[https://kevin0018.github.io/Blog-de-Viajes/](https://kevin0018.github.io/Blog-de-Viajes/)

## 🛠️ Herramientas utilizadas

- [Nuxt 3](https://nuxt.com/) — Framework para aplicaciones web con Vue.js
- [Vue 3](https://vuejs.org/) — Librería JavaScript progresiva
- [GitHub Pages](https://pages.github.com/) — Hosting estático gratuito para proyectos
- [gh-pages](https://www.npmjs.com/package/gh-pages) — Herramienta para desplegar en GitHub Pages
- [Node.js](https://nodejs.org/) — Entorno de ejecución JavaScript
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
   npm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```powershell
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Generar versión estática

```powershell
npm run generate
```
El contenido estático se genera en la carpeta `dist/`.

## 🚢 Despliegue en GitHub Pages

1. Asegúrate de que el archivo `.nojekyll` existe en `dist/` (si usas Nuxt 3, ponlo en `static/.nojekyll`).
2. Despliega con:
   ```powershell
   npm run deploy
   ```

Esto subirá el contenido de `dist/` a la rama `gh-pages`.

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
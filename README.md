# Copa Ciudad - Torneo de Fútbol

Sitio web estático para promocionar y gestionar la información del torneo de fútbol amateur **Copa Ciudad 2024**. Incluye secciones para equipos, calendario, sedes, registro y noticias. Está construido con HTML5, CSS y JavaScript puro, listo para desplegarse en cualquier proveedor de hosting estático.

## Estructura del proyecto

```
.
├── index.html     # Página principal
├── styles.css     # Estilos principales
└── script.js      # Interacciones y lógica de la página
```

## Uso local

Puedes abrir directamente `index.html` en tu navegador favorito o utilizar un servidor estático para desarrollo.

```bash
npx serve .
```

## Despliegue en la nube

Este proyecto es 100% estático, por lo que puedes publicarlo fácilmente en servicios como Netlify, Vercel, GitHub Pages, Cloudflare Pages o Amazon S3.

1. Crea un nuevo sitio en tu proveedor preferido.
2. Sube los archivos `index.html`, `styles.css` y `script.js` o conecta tu repositorio de Git.
3. Configura la carpeta raíz (`/`) como directorio de publicación.
4. Publica y comparte la URL con los participantes.

Para formularios, el atributo `netlify` incluido en el formulario permite habilitar capturas de envíos automáticamente en Netlify sin configuración adicional.

## Personalización

- Actualiza la fecha del torneo en `script.js` (`countdownDate`) para ajustar la cuenta regresiva.
- Modifica equipos, partidos y sedes directamente en `index.html`.
- Ajusta los colores y tipografías en `styles.css` para adecuarlos a la imagen de tu organización.

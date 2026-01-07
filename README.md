# DiAlgo Website (Astro)

Web pública de DiAlgo construida con Astro, preparada para GitHub Pages y para futura localización.

## Requisitos
- Node.js 20+
- npm 10+

## Desarrollo local
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Despliegue en GitHub Pages
Este proyecto está configurado con `adapter-static` por defecto en Astro. Para publicar en el repo
`https://github.com/DiAlgoApp/dialgoapp.github.io`:

1. Copia la carpeta `website/` al repositorio de Pages o mueve el contenido al root.
2. Ejecuta `npm install` y `npm run build`.
3. Publica el contenido de `dist/`.

Si usas GitHub Actions, puedes aplicar el workflow de ejemplo del documento de especificación
(o moverlo a `.github/workflows/deploy.yml` en el repo de Pages).

## Estructura
- `src/data/`: contenido y textos por idioma.
- `src/components/`: componentes de UI.
- `src/pages/`: rutas en castellano y estructura para inglés.
- `public/`: assets estáticos.

El locale `en` está preparado pero sin contenido (intencionalmente en blanco).

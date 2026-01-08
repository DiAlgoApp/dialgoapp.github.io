# DiAlgo Website (Astro)

Web publica de DiAlgo construida con Astro, preparada para GitHub Pages y con estructura i18n
desde el inicio.

Nota: la version desplegada en `https://github.com/DiAlgoApp/dialgoapp.github.io` incluye las
ultimas mejoras de referencias ES/UE e internacionales. Si trabajas desde `website/`, sincroniza
desde ese repo antes de ampliar.

## Estado actual
- Landing completa en castellano con todas las secciones: Home, Como funciona, Cuidadores,
  Personas mayores, Ciencia, Seguridad, Recursos, Descargas, Contacto, Blog, Docs y Legal.
- Selector de idioma visible (ES/EN). El locale `en` existe pero esta vacio a proposito.
- Sistema de diseno propio (tipografia, colores, cards, badges, animaciones y layout responsive).
- SEO base: Open Graph, JSON-LD, `robots.txt`, `sitemap.xml` y assets de Open Graph.
- Formularios y CTAs listos; el formulario de contacto esta marcado como beta.

## Bibliografia y enlaces
En `Ciencia`, `Recursos` y `Seguridad` hay secciones visibles con enlaces reales:

- `Ciencia`:
  - Referencias ES/UE (SEGG, BOE, Comision Europea, Eurostat, AGE Platform).
  - Bibliografia internacional en ingles (OMS, ISG, Journal of Gerontechnology, revisiones
    sistematicas open access).
- `Recursos`: programas publicos en Espana (Madrid, Aragon, Castilla y Leon) y Seguridad Social.
- `Seguridad`: RGPD, LOPDGDD, AEPD, ENS, RD 1112/2018 y European Accessibility Act.

Los enlaces se verificaron con `curl -L` (HTTP 200) en el momento de la ultima actualizacion.

## i18n
- Contenido por idioma en `src/data/site.ts` (`es` completo, `en` vacio).
- Las paginas usan un gate `isSpanish` para que EN quede en blanco hasta traducir.
- Para activar EN: completar `site.ts` y retirar el gate en `src/components/pages/*.astro`.

## Componentes relevantes
- Componente de referencias externas (`ReferenceGrid.astro` en el repo de Pages).
- `SectionHeading.astro`: cabeceras de seccion coherentes.
- `BaseLayout.astro`: SEO, JSON-LD, links alternativos de idioma.

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
El despliegue se hace desde el repo `https://github.com/DiAlgoApp/dialgoapp.github.io` con
GitHub Actions (workflow oficial `upload-pages-artifact` + `deploy-pages`).

Pasos recomendados:
1. Copiar el contenido de `website/` al repo de Pages.
2. Confirmar en GitHub: Settings -> Pages -> Source = GitHub Actions.
3. Hacer push a `main` y esperar el workflow.

Comando util para sincronizar:
```bash
rsync -a --exclude '.git' /path/DiAlgo/website/ /path/dialgoapp.github.io/
```

## Estructura
- `src/data/`: textos y contenido por idioma.
- `src/components/`: componentes UI reutilizables.
- `src/components/pages/`: composicion de paginas.
- `src/pages/`: rutas ES y wrappers EN.
- `public/`: assets estaticos (favicon, og-image, robots).

El locale `en` esta preparado pero sin contenido (intencionalmente en blanco).

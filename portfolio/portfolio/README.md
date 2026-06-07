# Dally Ramírez — Portfolio

Portfolio personal construido con React + Vite. Deploy automático en GitHub Pages via GitHub Actions.

🔗 **Live:** https://dallycita.github.io/portfolio/

## Stack

- React 18
- Vite 5
- CSS Modules
- GitHub Actions (CI/CD)

## Desarrollo local

```bash
npm install
npm run dev
```

## Deploy

El deploy es automático. Cada push a `main` dispara el workflow de GitHub Actions que hace build y publica en la rama `gh-pages`.

Para configurarlo la primera vez:
1. Sube el repo a GitHub con el nombre exacto `portfolio`
2. Ve a **Settings → Pages → Source** y selecciona la rama `gh-pages`
3. Haz un push a `main` y el workflow se encarga del resto
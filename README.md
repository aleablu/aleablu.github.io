# Alessandro Abluton — personal website

A responsive, build-free website for GitHub Pages. Plain HTML, CSS, and a small progressive-enhancement script. All résumé content is present in HTML and works without JavaScript.

## Preview

Run `python3 -m http.server 8000 --bind 127.0.0.1` in this directory and visit http://localhost:8000.

## Publish to aleablu.github.io

1. Create or use the GitHub repository `aleablu/aleablu.github.io`. Review existing content before replacing it.
2. Upload this project's files, including `.github/workflows/pages.yml`, to its `main` branch.
3. In the repository's **Settings → Pages → Build and deployment**, select **GitHub Actions**.
4. Push to `main` or manually run **Deploy to GitHub Pages** in Actions.
5. The workflow reports the deployed URL. For this repository it is https://aleablu.github.io/.

The workflow publishes only `index.html`, `styles.css`, `script.js`, `.nojekyll`, and `assets/`. Notes and source CVs are not published. Relative asset paths also support a repository site such as `aleablu.github.io/personal-website/`.

## Edit

- `index.html`: biography, work, education, publications, awards, projects, and contact links.
- `assets/alessandro-abluton.jpg`: supplied profile photo.
- `styles.css`: theme, layout, responsive breakpoints, and print styles.
- `script.js`: print button, current-section navigation, and footer year.
- `CONTENT_SOURCES.md`: provenance and editorial decisions.

Use **Print / save résumé** in the contact section to open the browser's print dialog and save a current PDF. No outdated CV download is included. Fonts load from Google Fonts, with local system fallbacks. There are no analytics, cookies, backend, or build dependencies.

Current role: CTO at Inferendo since February 2026. PhD completed December 2025.

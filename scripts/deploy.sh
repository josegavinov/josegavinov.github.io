#!/usr/bin/env bash
# Publica el sitio en la rama `gh-pages` sin usar GitHub Actions.
# Úsalo si Actions no está disponible: `npm run deploy`
set -euo pipefail

REPO=$(git config --get remote.origin.url)
RAMA=gh-pages

echo "▶ Compilando..."
npm run build

echo "▶ Publicando dist/ en $RAMA..."
cd dist
touch .nojekyll
git init -q
git checkout -qb "$RAMA"
git add -A
git -c user.name="$(git -C .. config user.name || echo josegavinov)" \
    -c user.email="$(git -C .. config user.email || echo noreply@github.com)" \
    commit -q -m "deploy: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git push -f -q "$REPO" "$RAMA:$RAMA"
cd ..
rm -rf dist/.git

echo "✓ Publicado. Activa una vez: Settings → Pages → Source: Deploy from a branch → $RAMA / (root)"

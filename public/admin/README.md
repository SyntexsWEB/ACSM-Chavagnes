# Configuration Decap CMS

## Fichiers de configuration

Ce dossier contient deux fichiers de configuration pour le CMS:

### `config.dev.yml`
Configuration pour le **développement local**
- Backend: `proxy` (via decap-server sur le port 8082)
- Permet de modifier les vrais fichiers locaux
- Utilisé automatiquement avec `npm run dev`

### `config.prod.yml`
Configuration pour la **production (Netlify)**
- Backend: `git-gateway` (authentification via Netlify Identity)
- Utilisé automatiquement avec `npm run build`

### `config.yml`
⚠️ **Fichier généré automatiquement** - Ne pas modifier directement!

Ce fichier est créé automatiquement à partir de `config.dev.yml` ou `config.prod.yml` selon la commande utilisée:
- `npm run dev` → copie `config.dev.yml`
- `npm run build` → copie `config.prod.yml`

Le fichier `config.yml` est ignoré par Git (voir `.gitignore`).

## Utilisation

### En développement local

**Option 1: Développement sans CMS (recommandé pour le frontend)**
```bash
npm run dev
```

**Option 2: Développement avec CMS (pour modifier le contenu)**
```bash
npm run dev:cms
```
Cette commande lance:
- Le serveur Astro sur http://localhost:4321
- Le serveur decap-server sur http://localhost:8082
- Le CMS sera accessible sur http://localhost:4321/admin/

⚠️ **Important**: Pour utiliser le CMS en local, vous DEVEZ utiliser `npm run dev:cms` et non `npm run dev` seul, sinon le backend proxy ne fonctionnera pas.

### En production (Netlify)
```bash
npm run build
```
Le build utilisera automatiquement la configuration de production avec `git-gateway`.

## Modifier la configuration

- Pour modifier la config de **développement**: Éditez `config.dev.yml`
- Pour modifier la config de **production**: Éditez `config.prod.yml`

**Ne jamais modifier** `config.yml` directement car il sera écrasé automatiquement!

# ACSM Chavagnes - Site Web

Site web du club de motocross ACSM Chavagnes les Eaux, situé à Terranjou.

## 🚀 Technologies utilisées

- **[Astro](https://astro.build)** - Framework web moderne et ultra-rapide
- **[Decap CMS](https://decapcms.org/)** - CMS headless pour gérer le contenu facilement
- **TypeScript** - Pour un code plus robuste
- **MDX** - Pour le contenu dynamique en Markdown

## 📁 Structure du projet

```
/
├── public/
│   ├── images/          # Images du site
│   └── admin/           # Interface Decap CMS
├── src/
│   ├── components/      # Composants réutilisables
│   ├── content/         # Contenu en Markdown
│   │   ├── actualites/  # Articles d'actualités
│   │   └── pages/       # Pages du site
│   ├── layouts/         # Layouts de pages
│   ├── pages/           # Pages du site
│   ├── styles/          # Styles globaux
│   └── data/            # Données du site
├── astro.config.mjs     # Configuration Astro
└── package.json
```

## 🛠️ Installation et développement

### Prérequis

- Node.js 18.20.8 ou supérieur
- npm ou pnpm

### Installation

```bash
npm install
```

### Démarrer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:4321`

### Build pour la production

```bash
npm run build
```

### Prévisualiser le build de production

```bash
npm run preview
```

## 📝 Gestion du contenu avec Decap CMS

### Accès à l'administration

Une fois le site déployé sur Netlify, accédez à l'interface d'administration :
`https://votre-site.netlify.app/admin`

### Configurer l'authentification Netlify Identity

1. Allez dans les paramètres Netlify de votre site
2. Activez Netlify Identity
3. Configurez l'inscription (invite only recommandé)
4. Activez Git Gateway dans les paramètres Identity

### Gérer les actualités

1. Connectez-vous à `/admin`
2. Cliquez sur "Actualités"
3. Créez, modifiez ou supprimez des articles
4. Publiez vos modifications

Les actualités sont écrites en Markdown et stockées dans `src/content/actualites/`

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans `src/styles/global.css` :

```css
--color-primary: #ff6b00;    /* Orange motocross */
--color-secondary: #00d4ff;  /* Bleu électrique */
--color-accent: #ffed00;     /* Jaune flash */
```

### Images

Placez vos images dans `public/images/` et référencez-les avec `/images/nom-image.jpg`

## 📱 Pages du site

- **Accueil** (`/`) - Page d'accueil avec horaires et actualités
- **Présentation** (`/presentation`) - Présentation du terrain et du club
- **Contact** (`/contact`) - Formulaire de contact
- **Règlement** (`/reglement`) - Règlement du terrain
- **FAQ** (`/faq`) - Questions fréquentes
- **Actualités** (`/actualites`) - Liste des actualités
- **Admin** (`/admin`) - Interface Decap CMS

## 🚀 Déploiement sur Netlify

### Via GitHub

1. Poussez votre code sur GitHub
2. Connectez votre repository à Netlify
3. Configuration de build :
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Déployez !

### Configuration Netlify

Le fichier `netlify.toml` contient la configuration optimale pour Astro.

### Variables d'environnement

Aucune variable d'environnement n'est nécessaire pour le moment.

## 🔧 Configuration

### Modifier l'URL du site

Dans `astro.config.mjs`, changez l'URL du site :

```js
export default defineConfig({
  site: 'https://votre-domaine.fr',
  // ...
});
```

### Modifier les informations du site

Éditez `src/data/site-info.json` ou utilisez l'interface Decap CMS.

## 📊 SEO

Le site est optimisé pour le SEO :
- Sitemap automatique
- Meta descriptions sur toutes les pages
- Images optimisées
- Temps de chargement ultra-rapide grâce à Astro

## 🤝 Contribution

Pour toute suggestion ou amélioration, n'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

Ce projet est sous licence MIT.

## 📞 Contact

ACSM Chavagnes les Eaux
Terranjou, France
Email: contact@acsm-chavagnes.fr

---

Développé avec ❤️ pour le motocross

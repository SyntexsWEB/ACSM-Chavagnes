# Prochaines étapes

## ⚠️ Mise à jour de Node.js requise

Votre version actuelle de Node.js (v18.20.1) n'est pas compatible avec Astro 5.
Vous devez mettre à jour Node.js vers une version >= 18.20.8

### Installation de Node.js

1. Téléchargez la dernière version LTS depuis : https://nodejs.org/
2. Installez la nouvelle version
3. Vérifiez l'installation : `node --version`

## 📸 Images à ajouter

Pour un rendu optimal, ajoutez vos propres images dans les dossiers suivants :

### Images principales
- `public/images/hero-motocross.jpg` - Image de fond pour la page d'accueil (1920x1080px recommandé)
- `public/images/terrain-vue.jpg` - Vue du terrain pour la page présentation

### Images pour les actualités
- `public/images/actualites/saison-2025.jpg`
- `public/images/actualites/competition.jpg`
- `public/images/actualites/portes-ouvertes.jpg`

### Favicon
- `public/favicon.svg` - Logo du club en SVG

## 🚀 Démarrage du projet

Une fois Node.js mis à jour :

```bash
# Démarrer le serveur de développement
npm run dev

# Ouvrir http://localhost:4321 dans votre navigateur
```

## 🎨 Personnalisation

### 1. Couleurs
Modifiez les couleurs dans `src/styles/global.css` :
```css
--color-primary: #ff6b00;    /* Orange principal */
--color-secondary: #00d4ff;  /* Bleu secondaire */
--color-accent: #ffed00;     /* Jaune accent */
```

### 2. Informations du club
Éditez `src/data/site-info.json` pour modifier :
- Nom du club
- Email de contact
- Téléphone
- Adresse
- Horaires
- Tarifs

### 3. Ajouter des actualités
Créez des fichiers `.md` dans `src/content/actualites/` avec ce format :

```markdown
---
titre: "Titre de l'actualité"
date: 2025-01-15
description: "Description courte"
image: "/images/actualites/mon-image.jpg"
auteur: "ACSM Chavagnes"
publie: true
---

Contenu de l'actualité en Markdown...
```

## 🌐 Déploiement sur Netlify

### Prérequis
1. Créer un compte sur https://netlify.com (gratuit)
2. Créer un repository Git (GitHub, GitLab, etc.)

### Étapes
1. Initialisez git :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Poussez sur GitHub/GitLab :
   ```bash
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

3. Sur Netlify :
   - Cliquez sur "Add new site" > "Import an existing project"
   - Connectez votre repository
   - Configuration automatique détectée !
   - Cliquez sur "Deploy"

4. Configurez Netlify Identity (pour Decap CMS) :
   - Dans les paramètres du site > Identity
   - Activez "Enable Identity"
   - Settings > Registration preferences > Invite only
   - Services > Git Gateway > Enable Git Gateway

5. Invitez-vous comme utilisateur :
   - Identity tab > Invite users
   - Entrez votre email
   - Cliquez sur le lien reçu par email
   - Créez votre mot de passe

6. Accédez à l'admin :
   - `https://votre-site.netlify.app/admin`
   - Connectez-vous avec votre email/mot de passe

## ✅ Checklist avant le déploiement

- [ ] Mettre à jour Node.js (>= 18.20.8)
- [ ] Tester le build local : `npm run build`
- [ ] Ajouter vos propres images
- [ ] Modifier les informations dans `src/data/site-info.json`
- [ ] Personnaliser les couleurs si nécessaire
- [ ] Vérifier le formulaire de contact
- [ ] Créer au moins 1-2 actualités
- [ ] Mettre à jour l'URL du site dans `astro.config.mjs`
- [ ] Initialiser git et créer un repository
- [ ] Déployer sur Netlify
- [ ] Configurer Netlify Identity
- [ ] Tester l'accès à `/admin`

## 📝 Contenu à compléter

### Page Présentation
- Ajouter des photos du terrain
- Compléter la section partenaires avec les vrais logos
- Ajouter plus de détails sur l'historique du club

### Page Contact
- Vérifier que le formulaire fonctionne sur Netlify
- Ajouter une carte Google Maps (optionnel)
- Ajouter les réseaux sociaux dans le footer

### Actualités
- Créer des actualités régulières
- Ajouter des photos de courses
- Publier les résultats de compétitions

## 🔧 Fonctionnalités futures possibles

- Galerie photos
- Calendrier interactif
- Inscription en ligne
- Espace membre
- Résultats en direct
- Newsletter
- Intégration réseaux sociaux

## 📞 Besoin d'aide ?

Si vous rencontrez des problèmes :
1. Consultez la documentation Astro : https://docs.astro.build
2. Documentation Decap CMS : https://decapcms.org/docs
3. Documentation Netlify : https://docs.netlify.com

Bon courage avec votre site ! 🏍️

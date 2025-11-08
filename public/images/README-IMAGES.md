# Images générées pour ACSM Chavagnes

Toutes les images ci-dessous sont des **placeholders SVG** créés pour le développement.
**Remplacez-les par vos vraies photos** pour un rendu optimal !

## 📸 Images principales

### 1. Hero (page d'accueil)
- **Fichier** : `hero-motocross.jpg`
- **Dimensions** : 1920x1080px
- **Description** : Image de fond pour la section hero de la page d'accueil
- **Contenu SVG** : Scène de motocross stylisée avec pilote, terrain et drapeaux à damier
- **À remplacer par** : Photo réelle d'un pilote en action sur votre terrain

### 2. Terrain (page présentation)
- **Fichier** : `terrain-vue.jpg`
- **Dimensions** : 1920x1080px
- **Description** : Vue d'ensemble du terrain pour la page présentation
- **Contenu SVG** : Vue panoramique du circuit avec piste, bosses et installations
- **À remplacer par** : Photo aérienne ou panoramique de votre terrain

## 🗞️ Images d'actualités

### 3. Saison 2025
- **Fichier** : `actualites/saison-2025.jpg`
- **Dimensions** : 800x500px
- **Description** : Annonce de la nouvelle saison
- **Contenu SVG** : Design graphique "2025" avec étoiles et effet lumineux
- **À remplacer par** : Photo de l'ouverture de saison, pilotes rassemblés, etc.

### 4. Compétition/Résultats
- **Fichier** : `actualites/competition.jpg`
- **Dimensions** : 800x500px
- **Description** : Résultats de compétition
- **Contenu SVG** : Podium 1-2-3 avec médailles or/argent/bronze
- **À remplacer par** : Photo du podium réel, pilotes sur la piste, etc.

### 5. Portes ouvertes
- **Fichier** : `actualites/portes-ouvertes.jpg`
- **Dimensions** : 800x500px
- **Description** : Événement portes ouvertes
- **Contenu SVG** : Portes ouvertes avec ballons et calendrier
- **À remplacer par** : Photo de l'événement, public présent, démonstrations, etc.

## 🎨 Favicon

### 6. Favicon du site
- **Fichier** : `favicon.svg`
- **Dimensions** : 64x64px
- **Description** : Icône du site (onglet navigateur)
- **Contenu SVG** : Logo minimaliste de motocross
- **À remplacer par** : Logo officiel de l'ACSM Chavagnes

## 📐 Dimensions recommandées pour vos vraies photos

### Images principales (hero/terrain)
- **Format** : JPEG ou WebP
- **Dimensions** : 1920x1080px (16:9)
- **Poids** : < 500 KB (optimisé pour le web)
- **Qualité** : 80-85%

### Images d'actualités
- **Format** : JPEG ou WebP
- **Dimensions** : 800x500px ou 1200x750px (16:10)
- **Poids** : < 200 KB
- **Qualité** : 75-80%

### Favicon
- **Format** : SVG (recommandé) ou PNG
- **Dimensions** : 64x64px ou SVG vectoriel
- **Transparence** : Oui si possible

## 🛠️ Outils recommandés pour optimiser vos images

1. **TinyPNG** (https://tinypng.com/)
   - Compression JPEG/PNG sans perte de qualité visible

2. **Squoosh** (https://squoosh.app/)
   - Outil Google pour convertir et optimiser les images
   - Support WebP

3. **SVGOMG** (https://jakearchibald.github.io/svgomg/)
   - Optimisation de fichiers SVG

## 💡 Conseils photo

### Pour le hero
- Photo dynamique avec pilote en action
- Bonne profondeur de champ
- Éviter les photos trop sombres
- Capturer l'énergie et le mouvement

### Pour le terrain
- Vue d'ensemble montrant les installations
- Photo prise un jour ensoleillé si possible
- Montrer la piste et les obstacles
- Inclure l'environnement naturel

### Pour les actualités
- Photos de qualité avec bonne luminosité
- Visages des pilotes reconnaissables
- Action et émotion
- Éviter les photos floues

## 📝 Comment remplacer les images

1. **Optimisez vos photos** avec les outils ci-dessus
2. **Renommez-les** avec les mêmes noms que les placeholders
3. **Remplacez les fichiers** dans le dossier `public/images/`
4. **Testez** avec `npm run dev` pour vérifier le résultat

## ⚠️ Important

- Les images SVG actuelles sont **temporaires** et ont été créées uniquement pour le développement
- Elles permettent de visualiser la mise en page sans avoir les vraies photos
- Le site fonctionnera mais sera bien plus attractif avec de vraies photos !

## 📊 Structure actuelle

```
public/images/
├── hero-motocross.jpg           (SVG placeholder - 1920x1080)
├── terrain-vue.jpg              (SVG placeholder - 1920x1080)
└── actualites/
    ├── saison-2025.jpg          (SVG placeholder - 800x500)
    ├── competition.jpg          (SVG placeholder - 800x500)
    └── portes-ouvertes.jpg      (SVG placeholder - 800x500)

public/
└── favicon.svg                  (SVG logo - 64x64)
```

---

**Note** : Tous les fichiers `.jpg` sont en fait des fichiers SVG. C'est volontaire pour que les références dans le code fonctionnent. Quand vous remplacerez par de vraies photos JPEG, tout fonctionnera automatiquement !

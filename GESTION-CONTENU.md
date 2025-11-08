# 📝 Guide de gestion du contenu

## 🎯 Stratégie de contenu

Le site ACSM Chavagnes utilise **deux approches** pour gérer le contenu :

### 1️⃣ Contenu en Markdown (Éditable via CMS) ✅ RECOMMANDÉ

**Avantages :**
- ✅ Éditable facilement via l'interface `/admin` (Decap CMS)
- ✅ Pas besoin de toucher au code
- ✅ Historique des modifications avec Git
- ✅ Possibilité de prévisualiser avant publication
- ✅ Collaboratif (plusieurs personnes peuvent éditer)
- ✅ Séparation contenu / présentation

**Utilisé pour :**
- ✅ **Actualités** (`src/content/actualites/`)
- ✅ **Pages principales** (`src/content/pages/`) :
  - Présentation
  - Règlement
  - FAQ
- ✅ **Paramètres du site** (`src/data/site-info.json`)

### 2️⃣ Contenu dans le code Astro

**Avantages :**
- ✅ Plus de contrôle sur la mise en page
- ✅ Intégration de composants dynamiques
- ✅ Pas besoin d'accès au CMS

**Utilisé pour :**
- Page d'accueil (structure complexe avec plusieurs sections)
- Page de contact (formulaire intégré)
- Composants réutilisables

---

## 📂 Structure du contenu éditable

```
src/content/
├── actualites/              # Actualités du club
│   ├── ouverture-saison-2025.md
│   ├── resultats-competition-janvier.md
│   └── journee-portes-ouvertes.md
│
└── pages/                   # Pages principales
    ├── presentation.md      # Présentation du terrain
    ├── reglement.md         # Règlement complet
    └── faq.md              # Questions fréquentes

src/data/
└── site-info.json          # Infos générales (horaires, tarifs, etc.)
```

---

## 🖊️ Comment éditer le contenu

### Via le CMS (Interface graphique) - RECOMMANDÉ

1. **Accédez à l'admin**
   - Localement : `http://localhost:4321/admin`
   - En ligne : `https://votre-site.netlify.app/admin`

2. **Connectez-vous**
   - Avec votre compte Netlify Identity

3. **Éditez le contenu**
   - **Actualités** : Cliquez sur "Actualités" → Créer/Modifier
   - **Pages** : Cliquez sur "Pages" → Sélectionnez la page à modifier
   - **Paramètres** : Cliquez sur "Paramètres" → "Informations du site"

4. **Publiez**
   - Cliquez sur "Publish" (crée un commit Git automatiquement)
   - Le site se redéploie automatiquement sur Netlify

### Via les fichiers Markdown (Pour développeurs)

1. Éditez directement les fichiers `.md` dans `src/content/`
2. Le contenu est en Markdown avec frontmatter YAML
3. Commitez et poussez les changements
4. Le site se redéploie automatiquement

---

## 📄 Format des fichiers Markdown

### Actualités

```markdown
---
titre: "Titre de l'actualité"
date: 2025-01-15
description: "Description courte pour les cartes et SEO"
image: "/images/actualites/mon-image.jpg"
auteur: "ACSM Chavagnes"
publie: true
---

## Titre de section

Contenu de l'actualité en **Markdown**.

- Liste à puces
- Autre élément

### Sous-titre

Plus de contenu...
```

### Pages

```markdown
---
titre: "Titre de la page"
description: "Description pour le SEO"
---

## Section principale

Contenu de la page en **Markdown**.

### Sous-section

- Point 1
- Point 2
```

---

## 🎨 Guide Markdown

### Titres
```markdown
## Titre niveau 2
### Titre niveau 3
#### Titre niveau 4
```

### Texte
```markdown
**Texte en gras**
*Texte en italique*
```

### Listes
```markdown
- Élément 1
- Élément 2
  - Sous-élément

1. Premier
2. Deuxième
```

### Liens
```markdown
[Texte du lien](https://exemple.com)
[Lien interne](/contact)
```

### Images
```markdown
![Texte alternatif](/images/mon-image.jpg)
```

### Citations
```markdown
> Ceci est une citation
```

---

## 📊 Ce qui EST éditable via le CMS

### ✅ Actualités
- Créer de nouvelles actualités
- Modifier le titre, date, description
- Ajouter/changer les images
- Modifier le contenu complet
- Publier/Dépublier

### ✅ Pages
- **Présentation** : Texte de présentation du terrain
- **Règlement** : Toutes les sections du règlement
- **FAQ** : Questions et réponses

### ✅ Paramètres du site
- Nom du club
- Email de contact
- Téléphone
- Adresse
- Horaires d'ouverture
- Tarifs
- Réseaux sociaux

---

## ❌ Ce qui N'est PAS éditable via le CMS

Ces éléments nécessitent de modifier le code :

- Structure et mise en page des pages
- Composants (Hero, Cards, etc.)
- Styles et couleurs
- Navigation et menu
- Formulaire de contact
- Structure de la page d'accueil

**Note :** Si vous souhaitez rendre ces éléments éditables, il faudrait :
1. Créer des fichiers Markdown pour chaque section
2. Ajouter des champs dans la config du CMS
3. Modifier les pages Astro pour lire ces contenus

---

## 🔄 Workflow recommandé

### Pour les actualités

1. **Rédigez dans un brouillon** (Word, Google Docs, etc.)
2. **Connectez-vous au CMS** (`/admin`)
3. **Créez une nouvelle actualité**
   - Titre accrocheur
   - Date de publication
   - Description courte (pour les réseaux sociaux)
   - Ajoutez une image attrayante
4. **Rédigez le contenu** en Markdown
5. **Prévisualisez** (si disponible dans le CMS)
6. **Publiez** ou **Sauvegardez en brouillon** (`publie: false`)
7. **Partagez** sur les réseaux sociaux

### Pour modifier une page

1. **Connectez-vous au CMS** (`/admin`)
2. **Allez dans "Pages"**
3. **Sélectionnez la page** (Présentation, Règlement, FAQ)
4. **Modifiez le contenu**
5. **Publiez** les changements

### Pour modifier les informations du site

1. **Connectez-vous au CMS** (`/admin`)
2. **Allez dans "Paramètres"**
3. **Cliquez sur "Informations du site"**
4. **Modifiez** les horaires, tarifs, contact, etc.
5. **Sauvegardez**

---

## 💡 Bonnes pratiques

### Pour les actualités

✅ **À faire :**
- Publier régulièrement (1-2 fois par mois minimum)
- Utiliser des images de qualité
- Écrire des titres courts et percutants
- Ajouter une description courte attractive
- Utiliser des sous-titres (##, ###) pour structurer
- Relire avant de publier

❌ **À éviter :**
- Trop de texte sans images
- Titres trop longs
- Fautes d'orthographe
- Images floues ou de mauvaise qualité
- Publier en mode brouillon par erreur

### Pour les pages

✅ **À faire :**
- Garder le contenu à jour
- Structurer avec des titres clairs
- Utiliser des listes à puces
- Être concis et précis
- Vérifier les liens

❌ **À éviter :**
- Pavés de texte sans structure
- Informations obsolètes
- Trop de jargon technique

---

## 🚀 Exemples d'actualités à créer

### Idées de contenu régulier

1. **Ouvertures exceptionnelles**
   - Week-ends spéciaux
   - Modifications d'horaires

2. **Résultats de compétitions**
   - Podiums
   - Performances des membres

3. **Événements**
   - Portes ouvertes
   - Journées découverte
   - Stages de pilotage

4. **Travaux et améliorations**
   - Nouveaux obstacles
   - Entretien du terrain
   - Nouvelles installations

5. **Partenariats**
   - Nouveaux sponsors
   - Collaborations

6. **Sécurité et règlement**
   - Rappels importants
   - Nouvelles règles

7. **Photos et vidéos**
   - Galeries d'événements
   - Meilleurs moments

---

## 🎯 Conclusion

**Recommandation principale :** Utilisez le CMS Decap pour éditer le contenu.

**Avantages :**
- Pas besoin de connaissances techniques
- Interface intuitive
- Historique et sauvegarde automatique
- Collaboration facile
- Déploiement automatique

**Pour aller plus loin :**
- Formez plusieurs personnes du club à utiliser le CMS
- Établissez un calendrier éditorial
- Planifiez les actualités à l'avance
- Demandez des retours aux membres

---

📧 **Questions ?** N'hésitez pas à consulter la documentation de Decap CMS : https://decapcms.org/docs

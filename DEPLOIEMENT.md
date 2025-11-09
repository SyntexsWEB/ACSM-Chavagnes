# 🚀 Guide de déploiement Netlify - ACSM Chavagnes

Ce guide explique comment déployer le site ACSM Chavagnes sur Netlify avec le CMS Decap fonctionnel.

## 📋 Prérequis

- Compte GitHub avec le dépôt : https://github.com/SyntexsWEB/ACSM-Chavagnes.git
- Compte Netlify (gratuit) : https://www.netlify.com/

---

## 🎯 Étape 1 : Pousser les modifications sur GitHub

Avant de déployer, assure-toi que toutes les modifications sont poussées sur GitHub :

```bash
git add .
git commit -m "Configuration pour déploiement Netlify avec CMS"
git push origin main
```

---

## 🌐 Étape 2 : Créer un site sur Netlify

### 2.1 Se connecter à Netlify
1. Va sur https://app.netlify.com/
2. Connecte-toi avec ton compte GitHub

### 2.2 Importer le dépôt
1. Clique sur **"Add new site"** → **"Import an existing project"**
2. Sélectionne **"Deploy with GitHub"**
3. Autorise Netlify à accéder à tes dépôts GitHub
4. Cherche et sélectionne le dépôt : **`SyntexsWEB/ACSM-Chavagnes`**

### 2.3 Configurer le build
Les paramètres devraient être détectés automatiquement grâce au fichier `netlify.toml` :

- **Branch to deploy** : `main`
- **Build command** : `npm run build`
- **Publish directory** : `dist`
- **Node version** : `18`

Si ce n'est pas le cas, entre ces valeurs manuellement.

### 2.4 Lancer le déploiement
1. Clique sur **"Deploy site"**
2. Attends que le build se termine (2-3 minutes)
3. Une fois terminé, ton site sera accessible via une URL comme : `https://random-name-123456.netlify.app`

---

## 🔐 Étape 3 : Activer l'authentification pour le CMS

### 3.1 Activer Netlify Identity
1. Dans ton site Netlify, va dans **"Site settings"** → **"Identity"**
2. Clique sur **"Enable Identity"**

### 3.2 Configurer Git Gateway
1. Toujours dans **"Identity"**, clique sur **"Services"**
2. Trouve **"Git Gateway"** et clique sur **"Enable Git Gateway"**
3. Cela permettra au CMS de modifier les fichiers sur GitHub

### 3.3 Configurer les paramètres d'inscription
1. Va dans **"Identity"** → **"Settings and usage"**
2. Dans **"Registration preferences"** :
   - Sélectionne **"Invite only"** (pour contrôler qui peut s'inscrire)
3. Dans **"External providers"** (optionnel) :
   - Tu peux activer Google, GitHub, etc. pour la connexion

---

## 👤 Étape 4 : Créer un utilisateur admin

### 4.1 Inviter un utilisateur
1. Va dans **"Identity"** → **"Invite users"**
2. Entre ton email (ou celui de l'admin du site)
3. Clique sur **"Send"**

### 4.2 Accepter l'invitation
1. Vérifie ta boîte email
2. Clique sur le lien d'invitation
3. Crée ton mot de passe
4. Tu seras redirigé vers le site

---

## 📝 Étape 5 : Accéder au CMS

Une fois connecté, tu peux accéder au CMS admin :

1. Va sur : `https://ton-site.netlify.app/admin`
2. Connecte-toi avec tes identifiants Netlify Identity
3. Tu peux maintenant :
   - ✅ Modifier le contenu du site
   - ✅ Gérer les actualités
   - ✅ Changer les images
   - ✅ Modifier les horaires, tarifs, etc.

---

## 🎨 Étape 6 : Personnaliser le domaine (optionnel)

### 6.1 Changer le nom du site
1. Va dans **"Site settings"** → **"Domain management"**
2. Clique sur **"Options"** → **"Edit site name"**
3. Change `random-name-123456` en quelque chose comme `acsm-chavagnes`
4. Ton site sera accessible sur : `https://acsm-chavagnes.netlify.app`

### 6.2 Ajouter un domaine personnalisé
Si tu as un nom de domaine (ex: `acsm-chavagnes.fr`) :

1. Va dans **"Domain management"** → **"Add domain alias"**
2. Entre ton nom de domaine
3. Suis les instructions pour configurer les DNS
4. Netlify générera automatiquement un certificat SSL

---

## 🔄 Déploiement continu

À partir de maintenant, **chaque fois que tu pousses sur GitHub**, Netlify déclenchera automatiquement :

1. ✅ Un nouveau build
2. ✅ Un déploiement automatique
3. ✅ Une mise à jour du site en ligne

Tu peux voir l'historique des déploiements dans **"Deploys"**.

---

## 🧪 Environnement de recette (staging)

Pour créer un environnement de test séparé :

### Option 1 : Branche de staging
1. Crée une branche `staging` dans GitHub
2. Dans Netlify, va dans **"Site settings"** → **"Build & deploy"** → **"Deploy contexts"**
3. Active **"Deploy branch deploys"** pour la branche `staging`
4. Netlify créera une URL séparée pour cette branche : `https://staging--acsm-chavagnes.netlify.app`

### Option 2 : Site séparé
1. Crée un nouveau site Netlify
2. Connecte le même dépôt GitHub
3. Déploie sur la branche `staging` ou `develop`
4. Nomme-le `acsm-chavagnes-staging`

---

## 🐛 Résolution de problèmes

### Le build échoue
1. Vérifie les logs de build dans **"Deploys"**
2. Assure-toi que `npm run build` fonctionne en local
3. Vérifie que toutes les dépendances sont dans `package.json`

### Le CMS ne fonctionne pas
1. Vérifie que **Git Gateway** est activé
2. Vérifie que tu es bien connecté avec Netlify Identity
3. Va sur `/admin` (pas `/admin/`)
4. Vérifie les logs du navigateur (F12 → Console)

### Les images ne s'affichent pas
1. Vérifie que les images sont dans `public/images/`
2. Vérifie les chemins dans `config.yml` :
   - `media_folder: "public/images"`
   - `public_folder: "/images"`

### Erreur 404 sur les pages
1. Vérifie que le fichier `netlify.toml` contient les redirects
2. Le routing d'Astro devrait fonctionner avec la config actuelle

---

## 📊 Monitoring et analytics

### Activer les analytics Netlify
1. Va dans **"Analytics"**
2. Active **Netlify Analytics** (payant, ~9$/mois)

### Intégrer Google Analytics (gratuit)
Ajoute dans `src/layouts/Layout.astro` avant `</head>` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔒 Sécurité

### Recommandations
- ✅ Active HTTPS (automatique avec Netlify)
- ✅ Utilise "Invite only" pour l'Identity
- ✅ Change les mots de passe régulièrement
- ✅ Vérifie les accès utilisateurs dans "Identity"
- ✅ Active 2FA sur ton compte Netlify

### Backup automatique
Le contenu est automatiquement sauvegardé dans GitHub à chaque modification via le CMS.

---

## 📞 Support

- **Documentation Netlify** : https://docs.netlify.com/
- **Documentation Decap CMS** : https://decapcms.org/docs/
- **Documentation Astro** : https://docs.astro.build/

---

## ✅ Checklist de déploiement

- [ ] Code poussé sur GitHub (branche `main`)
- [ ] Site créé sur Netlify
- [ ] Build réussi
- [ ] Netlify Identity activé
- [ ] Git Gateway activé
- [ ] Utilisateur admin créé et invité
- [ ] Connexion au CMS testée (`/admin`)
- [ ] Modification de contenu testée
- [ ] Domaine personnalisé configuré (optionnel)
- [ ] Analytics configurés (optionnel)

---

**🎉 Félicitations ! Ton site est maintenant en ligne avec un CMS fonctionnel !**

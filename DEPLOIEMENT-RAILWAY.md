# 🚂 Guide de déploiement Railway - ACSM Chavagnes (Alternative)

Ce guide explique comment déployer le site ACSM Chavagnes sur Railway. **Note : Pour un site Astro statique avec CMS, Netlify est recommandé**, mais Railway peut être utilisé si tu veux héberger ton propre serveur.

## ⚠️ Important

Railway ne supporte pas nativement le Git Gateway de Decap CMS. Tu devras utiliser une solution alternative comme :
- OAuth avec GitHub/GitLab
- Backend personnalisé
- Ou utiliser Netlify uniquement pour le CMS et Railway pour le hosting

**Recommandation : Utilise Netlify pour ce projet (voir DEPLOIEMENT.md)**

---

## 📋 Prérequis

- Compte GitHub avec le dépôt
- Compte Railway : https://railway.app/
- Compte GitHub OAuth App (pour le CMS)

---

## 🎯 Étape 1 : Préparer le projet pour Railway

Railway nécessite quelques modifications pour fonctionner avec un site statique Astro.

### 1.1 Créer un serveur Node simple

Crée un fichier `server.js` à la racine :

```javascript
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques du dossier dist
app.use(express.static(join(__dirname, 'dist')));

// Fallback pour le routing côté client
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 1.2 Modifier package.json

Ajoute dans `package.json` :

```json
{
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "build": "astro build"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

### 1.3 Installer express

```bash
npm install express
```

---

## 🌐 Étape 2 : Déployer sur Railway

### 2.1 Se connecter à Railway
1. Va sur https://railway.app/
2. Connecte-toi avec ton compte GitHub

### 2.2 Créer un nouveau projet
1. Clique sur **"New Project"**
2. Sélectionne **"Deploy from GitHub repo"**
3. Autorise Railway à accéder à tes dépôts
4. Sélectionne le dépôt : **`SyntexsWEB/ACSM-Chavagnes`**

### 2.3 Configurer les variables d'environnement
1. Va dans **"Variables"**
2. Ajoute :
   - `NODE_VERSION`: `18`
   - `PORT`: `3000`

### 2.4 Configurer les commandes de build
Railway devrait détecter automatiquement :
- **Build Command**: `npm run build`
- **Start Command**: `npm start`

Si ce n'est pas le cas :
1. Va dans **"Settings"**
2. Dans **"Deploy"**, configure :
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`

### 2.5 Déployer
1. Clique sur **"Deploy"**
2. Attends que le build se termine
3. Ton site sera accessible via une URL comme : `https://acsm-chavagnes.up.railway.app`

---

## 🔐 Étape 3 : Configurer le CMS (OAuth GitHub)

### 3.1 Créer une OAuth App GitHub
1. Va sur GitHub : **Settings** → **Developer settings** → **OAuth Apps** → **New OAuth App**
2. Remplis :
   - **Application name**: `ACSM Chavagnes CMS`
   - **Homepage URL**: `https://ton-site.up.railway.app`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`

   ⚠️ **Note** : Même sur Railway, tu devras utiliser le callback de Netlify ou créer ton propre backend OAuth

3. Note le **Client ID** et génère un **Client Secret**

### 3.2 Modifier config.yml

Dans `public/admin/config.yml` :

```yaml
backend:
  name: github
  repo: SyntexsWEB/ACSM-Chavagnes
  branch: main
  base_url: https://api.netlify.com  # Service OAuth externe
  auth_endpoint: auth

media_folder: "public/images"
public_folder: "/images"
```

⚠️ **Problème** : Cette approche nécessite toujours Netlify pour l'authentification.

---

## 🔄 Alternative : Backend OAuth personnalisé

Pour avoir un CMS 100% sur Railway, tu dois créer ton propre serveur OAuth. C'est complexe et non recommandé pour ce projet.

**Solution recommandée** :
- **Héberge le site sur Railway** (si tu veux absolument)
- **Utilise Netlify Identity + Git Gateway** pour le CMS uniquement
- Configure le CMS pour pointer vers le repo GitHub

Ou mieux encore : **Utilise entièrement Netlify** (gratuit, optimisé, avec CDN global).

---

## 🎨 Étape 4 : Domaine personnalisé

### 4.1 Dans Railway
1. Va dans **"Settings"** → **"Domains"**
2. Clique sur **"Generate Domain"** pour avoir un domaine Railway
3. Ou configure un domaine personnalisé :
   - Ajoute un CNAME DNS pointant vers Railway
   - Entre ton domaine dans Railway

---

## 🔄 Déploiement continu

Railway déclenchera automatiquement un nouveau déploiement à chaque push sur `main`.

---

## 💰 Coûts

Railway offre :
- **5$ de crédit gratuit/mois**
- Après ça, facturation à l'usage (~5-10$/mois pour ce type de site)

Netlify offre :
- **100 GB de bande passante/mois gratuit**
- **300 minutes de build/mois gratuit**
- **Meilleur pour ce projet**

---

## 🐛 Problèmes courants

### Le serveur ne démarre pas
- Vérifie que `express` est dans `dependencies` (pas `devDependencies`)
- Vérifie que `"type": "module"` est dans `package.json`

### Les routes ne fonctionnent pas
- Assure-toi que le fallback `app.get('*')` est bien configuré

### Le CMS ne fonctionne pas
- C'est normal, il faut configurer OAuth manuellement
- **Recommandation** : Utilise Netlify à la place

---

## 📊 Comparaison Netlify vs Railway

| Feature | Netlify | Railway |
|---------|---------|---------|
| Sites statiques | ✅ Optimisé | ⚠️ Nécessite serveur |
| CMS Decap | ✅ Natif (Git Gateway) | ❌ OAuth complexe |
| CDN global | ✅ Inclus | ❌ Pas de CDN |
| SSL/HTTPS | ✅ Automatique | ✅ Automatique |
| Prix | ✅ Gratuit pour ce projet | ⚠️ ~5-10$/mois |
| Déploiement continu | ✅ | ✅ |
| Preview deploys | ✅ | ⚠️ Limité |

**Verdict : Utilise Netlify pour ce projet !**

---

## ✅ Conclusion

Railway est excellent pour :
- ✅ Applications Node.js/Python/Go
- ✅ Bases de données
- ✅ APIs
- ✅ Services backend

Mais pour un site Astro statique avec CMS :
- ✅ **Netlify est le meilleur choix**
- ✅ Gratuit
- ✅ CMS intégré
- ✅ CDN global
- ✅ Déploiement automatique

---

**📝 Recommandation finale : Suis le guide [DEPLOIEMENT.md](./DEPLOIEMENT.md) pour déployer sur Netlify !**

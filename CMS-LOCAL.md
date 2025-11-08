# 🖥️ Utilisation du CMS Decap en local

## ✅ Configuration terminée !

Le backend local de Decap CMS a été configuré avec succès.

---

## 🚀 Comment accéder au CMS en local

### 1. Démarrer le serveur de développement

Le serveur Astro est déjà en cours d'exécution sur :
**http://localhost:4323**

### 2. Accéder à l'interface admin

Ouvrez votre navigateur et allez sur :
**http://localhost:4323/admin**

---

## ⚙️ Mode de fonctionnement actuel

### Backend configuré : `test-repo`

Actuellement, le CMS utilise le backend `test-repo`, qui est un backend de **test intégré** à Decap CMS.

**Ce que vous pouvez faire :**
- ✅ Naviguer dans l'interface admin
- ✅ Voir toutes vos collections (Actualités, Pages, Paramètres)
- ✅ Prévisualiser les contenus existants
- ✅ **Éditer les contenus** (stockés en mémoire temporaire)
- ⚠️ **Les modifications ne seront PAS sauvegardées** en fichiers locaux

**Pourquoi ce mode ?**
- Permet de tester l'interface sans risque
- Idéal pour découvrir le CMS
- Aucun risque de modifier vos fichiers

---

## 🔄 Pour sauvegarder vraiment les modifications en local

Si vous souhaitez que vos modifications soient **vraiment sauvegardées** dans vos fichiers Markdown locaux, deux options :

### Option A : Éditer directement les fichiers Markdown (RECOMMANDÉ)

**Avantages :**
- Simple et direct
- Aucune configuration supplémentaire
- Vous gardez le contrôle total

**Comment faire :**
1. Ouvrez les fichiers dans `src/content/actualites/` ou `src/content/pages/`
2. Éditez le contenu Markdown
3. Sauvegardez
4. Le serveur Astro rechargera automatiquement la page

**Exemple :**
```bash
# Éditer une actualité
code src/content/actualites/ouverture-saison-2025.md

# Éditer la page de présentation
code src/content/pages/presentation.md
```

---

### Option B : Utiliser le proxy backend (avancé)

Pour utiliser le vrai backend qui sauvegarde dans les fichiers, il faut :

1. **Installer et démarrer le serveur proxy Decap**

   Le package `decap-server` est déjà installé, mais il y a un problème de port.

   **Problème rencontré :**
   - Le port 8081 est bloqué sur Windows (permissions)
   - Essayez de lancer en mode administrateur

2. **Commande pour lancer le proxy :**
   ```bash
   npx decap-server
   ```

   Cela démarre un serveur proxy sur http://localhost:8081

3. **Modifier la config pour utiliser le proxy :**

   Dans `public/admin/config.yml`, remplacer :
   ```yaml
   backend:
     name: test-repo
   ```

   Par :
   ```yaml
   backend:
     name: proxy
     proxy_url: http://localhost:8081/api/v1
     branch: main
   ```

4. **Relancer le serveur Astro**
   ```bash
   npm run dev
   ```

5. **Accéder à l'admin**
   - http://localhost:4323/admin
   - Les modifications seront sauvegardées dans vos fichiers locaux

---

## 🌐 En production (après déploiement Netlify)

Une fois déployé sur Netlify, vous utiliserez :

```yaml
backend:
  name: git-gateway
  branch: main
```

**Fonctionnement :**
1. Vous vous connectez avec Netlify Identity
2. Vous éditez le contenu via `/admin`
3. Les modifications créent un commit Git automatique
4. Le site se redéploie automatiquement

---

## 📊 Comparaison des modes

| Mode | Où ? | Sauvegarde ? | Utilisation |
|------|------|--------------|-------------|
| **test-repo** | Local | ❌ Non (mémoire) | Découvrir l'interface |
| **proxy** | Local | ✅ Oui (fichiers) | Développement local |
| **git-gateway** | Production | ✅ Oui (Git) | Production Netlify |

---

## 💡 Recommandation

Pour le développement local, je vous recommande d'**éditer directement les fichiers Markdown** :

**Pourquoi ?**
- Plus simple et plus rapide
- Pas de configuration complexe
- Hot-reload automatique d'Astro
- Contrôle total avec votre éditeur de code

**Le CMS Decap sera surtout utile en production** pour :
- Les non-développeurs
- Éditer sans accès au code
- Interface graphique conviviale
- Workflow Git automatisé

---

## 🎯 Prochaines étapes

1. **Testez l'interface admin** : http://localhost:4323/admin
2. **Explorez les collections** (Actualités, Pages, Paramètres)
3. **Éditez quelques contenus en Markdown** directement
4. **Déployez sur Netlify** pour tester le vrai backend Git Gateway

---

## 📝 Notes techniques

**Fichiers modifiés :**
- ✅ `public/admin/config.yml` - Configuration Decap CMS
- ✅ `package.json` - Ajout de `decap-server`
- ✅ Scripts npm ajoutés :
  - `npm run cms:proxy` - Lance le serveur proxy
  - `npm run dev:cms` - Lance Astro + proxy en même temps

**État actuel :**
- ✅ Serveur Astro : http://localhost:4323
- ✅ Interface admin : http://localhost:4323/admin
- ⚠️ Serveur proxy : problème de port 8081 (à résoudre)

---

## ❓ Questions fréquentes

### Pourquoi le backend proxy ne fonctionne pas ?

Le port 8081 est bloqué par Windows. Solutions :
1. Lancer en mode administrateur
2. Utiliser un autre port (modification nécessaire)
3. Utiliser le mode `test-repo` pour découvrir
4. Éditer directement les fichiers Markdown

### Est-ce que je peux utiliser le CMS sans Git ?

En local avec le mode `test-repo`, oui, mais les modifications ne seront pas sauvegardées.

### Comment je sauvegarde mes modifications en local ?

Deux options :
1. Mode proxy (nécessite serveur proxy fonctionnel)
2. Éditer directement les fichiers Markdown (RECOMMANDÉ)

---

🏍️ **Bon test avec le CMS !**

*Généré le 8 janvier 2025*

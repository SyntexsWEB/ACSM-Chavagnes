# 🚀 Démarrer le CMS en local avec vos vrais fichiers

## ⚠️ Problème actuel

Le backend `test-repo` affiche une interface vide car il ne lit pas vos fichiers locaux.

## ✅ Solution : Utiliser le proxy local

### Option 1 : Méthode simple (2 terminaux)

**Terminal 1 - Serveur proxy :**
```bash
npx decap-server
```

**Terminal 2 - Serveur Astro :**
```bash
npm run dev
```

### Option 2 : Méthode tout-en-un (1 terminal)

```bash
npm run dev:cms
```

---

## 🔧 Configuration à modifier

Une fois le proxy lancé, modifiez `src/pages/admin.astro` :

### Remplacez la ligne 28 :
```javascript
backend: {
  name: 'test-repo'
},
```

### Par :
```javascript
backend: {
  name: 'proxy',
  proxy_url: 'http://localhost:8081/api/v1'
},
```

---

## 🎯 Ensuite

1. **Rechargez** http://localhost:4321/admin
2. Vous verrez vos **3 actualités** réelles
3. Vous pourrez **éditer et sauvegarder** dans vos fichiers locaux

---

## ⚡ Problème de port 8081 ?

Si le port 8081 est bloqué :

1. **Lancez PowerShell en mode administrateur**
2. Exécutez : `npx decap-server`
3. Ou utilisez un autre port (nécessite modification de la config)

---

## 📝 Alternative : Édition directe des fichiers

En attendant de résoudre le proxy, vous pouvez :

1. Ouvrir directement les fichiers Markdown
2. Les éditer dans VS Code
3. Le serveur Astro rechargera automatiquement

**Exemple :**
```bash
code src/content/actualites/ouverture-saison-2025.md
```

---

## 🌐 En production (après déploiement Netlify)

Le CMS fonctionnera parfaitement sans serveur proxy grâce à :
- Netlify Identity (authentification)
- Git Gateway (backend)

Tout sera automatique !

---

🏍️ **Pour l'instant, le mode `test-repo` permet de tester l'interface, mais ne montre pas vos contenus réels.**

# 🖥️ AS400 React App - React + TypeScript + Vite + TanStack Query

Un projet React moderne reproduisant l'expérience AS/400, avec navigation clavier (F3, F12, etc.), datatables paginées, et intégration API via JSONPlaceholder. Architecture modulaire, composants réutilisables, pagination dynamique, animations simples sans framer-motion.

---

## 📦 Stack Technique

- ⚛️ **React 19**
- ⚡ **Vite 6**
- ⛑️ **TypeScript 5**
- 🎨 **Tailwind CSS 4**
- 📦 **TanStack Query 5**
- 📡 **Axios**
- 🧩 **vite-plugin-pages**
- ✅ **ESLint + Type-aware config**

---

## 🚀 Démarrer le projet

```bash
# Installer les dépendances
npm install

# Lancer l'application en dev
npm run dev

# Build de production
npm run build

# Lancer le serveur de preview
npm run preview

🗂️ Architecture
src/
├── components/        → Composants réutilisables (tableaux, modals, navigation)
├── hooks/             → Hooks customisés (usePagination, useClients, ...)
├── pages/             → Pages accessibles via routing automatique (vite-plugin-pages)
│   ├── home/          → Menu principal façon AS/400
│   ├── clients/       → Gestion des clients (API, modals, actions)
│   └── jsonplaceholder/ → Pages dynamiques (posts, todos, ...)
├── types/             → Types globaux (Client, Snake, etc.)
└── assets/            → Images statiques (ex: as400.jpg)

🎛️ Navigation Clavier AS/400

| Touche | Action                          |
| ------ | ------------------------------- |
| `F3`   | Quitter l'application / revenir |
| `F12`  | Retour page précédente          |
| `+`    | Page suivante (pagination)      |
| `-`    | Page précédente (pagination)    |

🔍 API utilisée
JSONPlaceholder
Requête via Axios
Cache via TanStack Query
Simulation PUT/DELETE

🔧 Lint TypeScript + ESLint
// .eslintrc.ts recommandé
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})

📄 Licence
MIT — libre de réutiliser, modifier et distribuer.

#react #vite #typescript #tanstack-query #as400 #keyboard-nav #tailwindcss #jsonplaceholder #axios #eslint #vite-plugin-pages
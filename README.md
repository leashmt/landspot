# Landspot - Plateforme de partage d'adresse

Landspot est une application web qui permet aux utilisateurs d'enregistrer des spots en fonction de catégories avec des notes. L'application permet aussi de faire des recherches pour trouver le sport parfait. Elle est construite avec Next.js, React et MongoDB.

## Fonctionnalités

- Publication de spots
- Notation
- Filtrage

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/leashmt/landspot
   ```
2. Accédez au répertoire du projet

```bash
 cd landspot
```

3. Installez les dépendance npm

```bash
 npm install
```

4. Créez un fichier .env.local à la racine du projet et définissez-y la variable d'environnement DB_URL avec l'URL de votre base de données MongoDB

```js
DB_URL = "URL_de_votre_base_de_données_MongoDB"
```

5. Lancez l'application en mode développement :

```bash
 npm run dev
```

6. Accédez à l'application dans votre navigateur à l'adresse http://localhost:3000.

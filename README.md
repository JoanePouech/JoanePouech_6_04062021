# JoanePouech_6_04062021

## Instructions d'installation

1. Cloner le dossier GitHub localement

2. Dans le dossier frontend, depuis un terminal:
    - Lancer la commande "npm install" pour installer les dépendances (s'il y a un problème avec l'installation de [node-sass](https://www.npmjs.com/package/node-sass): prendre la version correspondante à NodeJS. Pour Node 14.0 par exemple, installer node-sass en version 4.14+.)
    - Lancer la commande "ng serve" pour lancer l'application Angular
    - Ouvrir une page du navigateur à l'adresse "localhost:4200" pour accéder à l'application

3. Paramétrer les identifiants MongoDB & la clé d'authentification:
    - Dupliquer le fichier ".env-prod" et nommer ce nouveau fichier ".env"
    - Dans le fichier .env, compléter les identifiants MongoDB (Lien MongoDB: Cluster -> Connect -> Connect your application)
        * DB_USER = le nom d'utilisateur de la base de données
        * DB_PASS = le mot de passe de connexion
        * DB_HOST = l'url de la base de données
        * DB_NAME = le nom de la base de données
    - Configurer la chaîne d'encodage (TOKEN)
    - Sauvegarder le fichier

4. Dans le dossier backend, depuis un terminal:
    - Lancer la commande "npm install" pour installer les dépendances
    - 2 possibilités pour lancer le serveur:
        * utilisation sans modification: taper la commande "node server.js"
        * utilisation avec modification: installer nodemon avec la commande "npm install -g nodemon" puis lancer le serveur avec "nodemon server"
    - Dans le terminal, les lignes "Listening on port 3000" puis "Connexion à MongoDB réussie" doivent s'afficher. Le serveur est alors fonctionnel.
# JoanePouech_6_04062021

## Instructions d'installation

1. Cloner le dossier GitHub localement

2. Dans le dossier frontend, depuis un terminal:
    - lancer la commande "npm install" pour installer les dépendances
    - lancer la commande "ng serve" pour lancer l'application Angular
    - ouvrir une page du navigateur à l'adresse "localhost:4200" pour accéder à l'application

3. Paramétrer les identifiants MongoDB & la clé d'authentification:
    - Dans le fichier .env-prod, compléter les identifiants MongoDB (Lien MongoDB: Cluster -> Connect -> Connect your application)
        * DB_USER = le nom d'utilisateur de la base de données
        * DB_PASS = le mot de passe de connexion
        * DB_HOST = l'url de la base de données
    - Configurer la chaîne d'encodage (TOKEN)
    - Sauvegarder le fichier
    - Modifier le nom du fichier en ".env"

4. Dans le dossier backend, depuis un terminal:
    - lancer la commande "npm install" pour installer les dépendances
    - lancer la commande "nodemon server" pour lancer le serveur
    - Dans le terminal, les lignes "Listening on port 3000" puis "Connexion à MongoDB réussie" doivent s'afficher. Le serveur est alors fonctionnel.
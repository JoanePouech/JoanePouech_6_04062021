const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const rateLimit = require('express-rate-limit');
const helmet = require ('helmet');
require('dotenv').config();
const sauceRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

//Configuration du limiteur de connexion
const limiter = rateLimit ({
    windowMs: 10*60*1000, // 10 minutes (en ms)
    max: 10 // tentatives de connexion
});

//Création de l'application Express
const app = express();

//Connexion à la base de données MongoDB
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
    {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie'))
    .catch(() => console.log('Connexion à MongoDB échouée'));

//Configuration des entêtes, format de données & sécurité
app.use(limiter);
app.use(helmet());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});
app.use(express.json());

//Configuration des routeurs
app.use('/images', express.static(path.join(__dirname,'images')));
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

//Export
module.exports = app;
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const sauceRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

//Création de l'application Express
const app = express();

//Connexion à la base de données MongoDB
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4uhqa.mongodb.net/${process.env.DB_HOST}?retryWrites=true&w=majority`,
    {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie'))
    .catch(() => console.log('Connexion à MongoDB échouée'));

//Configuration des entêtes & format de données
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});
app.use(express.json());

//Configuration des routeurs
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

//Export
module.exports = app;
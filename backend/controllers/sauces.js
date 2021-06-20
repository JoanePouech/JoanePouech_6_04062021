const Sauce = require('../models/Sauce');

//Requête GET générale
exports.getAllSauces = (req, res, next) => {
    res.json({message: 'Requête GET générale'});
};

//Requête GET ciblée
exports.getOneSauce = (req, res, next) => {
    res.json({message: 'Requête GET ciblée'});
};

//Requête POST sauce
exports.createSauce= (req, res, next) => {
    res.json({message: 'Requête POST sauce'});
};

//Requête PUT
exports.updateSauce = (req, res, next) => {
    res.json({message: 'Requête PUT'});
};

//Requête DELETE
exports.deleteSauce = (req, res, next) => {
    res.json({message: 'Requête DELETE'});
};

//Requête POST like
exports.likeSauce = (req, res, next) => {
    res.json({message: 'Requête POST like'});
};
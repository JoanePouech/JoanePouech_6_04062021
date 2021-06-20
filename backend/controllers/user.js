const User = require('../models/User');

//Requête POST SignUp
exports.signup = (req, res, next) => {
    res.json({message: 'Requête POST SignUp'})
};

//Requête POST Login
exports.login = (req, res, next) => {
    res.json({message: 'Requête POST SignUp'})
};
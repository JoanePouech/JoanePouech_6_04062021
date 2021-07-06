const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const maskData = require('maskdata');

//Configuration du masquage des emails
const maskDataOptions = {
    maskWith: "*", 
    unmaskedStartCharactersBeforeAt: 2,
    unmaskedEndCharactersAfterAt: 2,
    maskAtTheRate: false
}

//Requête POST SignUp
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User ({
                email: maskData.maskEmail2(req.body.email,maskDataOptions),
                password: hash
            });
            user.save()
                .then (() => res.status(201).json({message: "Utilisateur créé"}))
                .catch (error => res.status(400).json({error}));
        })
        .catch(error => res.status(500).json({error}));
};

//Requête POST Login
exports.login = (req, res, next) => {
    User.findOne({email: maskData.maskEmail2(req.body.email,maskDataOptions)})
        .then(user => {
            if (!user) {
                return res.status(401).json({error: "Utilisateur inexistant"})
            }
            bcrypt.compare(req.body.password, user.password)
                .then(validity => {
                    if (validity == false) {
                        return res.status(401).json({error:"Mot de passe incorrect"});
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            {userId: user._id},
                            `${process.env.TOKEN}`,
                            {expiresIn: '24h'}
                        )
                    });
                })
                .catch(error => res.status(500).json({error}));
        })
        .catch(error => res.status(500).json({error}));    
};
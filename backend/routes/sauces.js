const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauces');

router.get('/', sauceCtrl.getAllSauces);
router.get('/:id', sauceCtrl.getOneSauce);
router.post('/', sauceCtrl.createSauce);
router.put('/:id', sauceCtrl.updateSauce);
router.delete('/:id', sauceCtrl.deleteSauce);
router.post('/:id/like', sauceCtrl.likeSauce);

module.exports = router;
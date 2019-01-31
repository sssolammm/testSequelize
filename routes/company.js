var express = require('express');
var router = express.Router();
const companyController = require('../controllers').company;

/* GET users listing. */
router.get('/', companyController.findAll);

router.get('/:id', companyController.findByPk);

router.post('/', companyController.create);

module.exports = router;

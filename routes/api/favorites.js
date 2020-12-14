const express = require('express');
const router = express.Router();
const favortiesCtrl = require('../../controllers/users');

router.get('/dasgboard'), favortiesCtrl.create

module.exports = router;
const express = require('express');

const sellController = require('../controllers/sell')

const router = express.Router();

// /sell => GET
router.get('/', sellController.getItemData);
// /sell => POST
router.post('/', sellController.postItemData);

module.exports = router
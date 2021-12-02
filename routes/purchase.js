const express = require('express');

const purchaseController = require('../controllers/purchase')

const router = express.Router();

// /purchase => GET
router.get('/', purchaseController.getItemsData);

module.exports = router
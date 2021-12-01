const express = require('express');

const profileController = require('../controllers/profile')

const router = express.Router();

// /profile/ => GET
router.get('/profile', profileController.getProfileData);
// /profile/orders => GET
router.get('/orders', profileController.getProfileOrders);
// /profile/sales => GET
router.get('/sales', profileController.getProfileSales);

// /admin/add-product => POST
// router.post('/add-product', profileController.postAddProduct);

module.exports = router
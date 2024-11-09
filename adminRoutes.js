const express = require('express');
const router = express.Router();

router.get('/assigned-orders');
router.put('/orders/:orderId/reassign-courier');

module.exports = router;

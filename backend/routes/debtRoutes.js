const express = require('express');
const router = express.Router();
const debtController = require('../controllers/debtController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, debtController.createDebt);
router.get('/', authMiddleware, debtController.getDebts);
router.delete('/:id', authMiddleware, debtController.deleteDebt);

module.exports = router;

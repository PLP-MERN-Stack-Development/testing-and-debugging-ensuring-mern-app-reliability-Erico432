const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { create, list } = require('../controllers/todoController');

router.post('/', auth, create);
router.get('/', auth, list);

module.exports = router;

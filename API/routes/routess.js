const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.test);
router.post('/post_loginDataToServer',controller.post_loginDataToServer);
router.get('/get_userFromMobileNo',controller.get_userFromMobileNo);




module.exports = router;

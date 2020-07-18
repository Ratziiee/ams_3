const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.test);
router.post('/post_loginDataToServer',controller.post_loginDataToServer);
router.get('/get_userFromMobileNo',controller.get_userFromMobileNo);
router.post('/post_updatePassword',controller.post_updatePassword);
router.get('/get_Login',controller.get_Login);




module.exports = router;

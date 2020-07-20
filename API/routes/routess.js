const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.test);
router.post('/post_loginDataToServer',controller.post_loginDataToServer);
router.get('/get_userFromMobileNo',controller.get_userFromMobileNo);
router.post('/post_updatePassword',controller.post_updatePassword);
router.get('/get_Login',controller.get_Login);
router.post('/post_organizationMaster',controller.post_organizationMaster);
router.post('/post_updateAdmin',controller.post_updateAdmin);
router.get('/get_org_details',controller.get_org_details);




module.exports = router;

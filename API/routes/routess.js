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
router.post('/post_addDataForApproval',controller.post_addDataForApproval);
router.get('/get_org_requests',controller.get_org_requests);
router.post('/post_updateUser',controller.post_updateUser);
router.post('/post_UpdateDataForApproval',controller.post_UpdateDataForApproval);
router.get('/get_Approval_Status',controller.get_Approval_Status);
router.get('/get_Rejection_Request',controller.get_Rejection_Request);





module.exports = router;

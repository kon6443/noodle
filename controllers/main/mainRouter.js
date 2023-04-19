/**
 * mainRouter.js
 */

const container = require('../../container/container');
const express = require('express');
const router = express.Router();
const mainControllerInstance = container.get('MainController');

router.get('/', mainControllerInstance.handleGetMain);
router.get('/status', mainControllerInstance.handleGetRamyunStatus);
router.post('/ramyun', mainControllerInstance.handlePostRamyun);

module.exports = router;

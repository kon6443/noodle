/**
 * mainRouter.js
 */

const container = require('../../container/container');
const express = require('express');
const router = express.Router();

const filterInstance = container.get('Filter');
const mainControllerInstance = container.get('MainController');

router.get('/', mainControllerInstance.handleGetMain);
router.get('/status', filterInstance.assureRamyunObject, mainControllerInstance.handleGetRamyunStatus);
router.post('/ramyun', filterInstance.assureRamyunObject, mainControllerInstance.handlePostRamyun);

module.exports = router;

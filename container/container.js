/**
 * container.js
 */

const container = require('typedi').Container;

const ramyun = require('../models/main/ramyun');
const mainService = require('../models/main/mainService');
const mainController = require('../controllers/main/mainController');

container.set('Ramyun', new ramyun());
container.set('MainService', new mainService(container.get('Ramyun')));
container.set('MainController', new mainController(container.get('MainService')));

module.exports = container;

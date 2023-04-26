/**
 * container.js
 */

const container = require('typedi').Container;

const config = require('../config/config');
const ramyun = require('../models/main/ramyun');
const filter = require('../filter/filter');
const mainService = require('../models/main/mainService');
const mainController = require('../controllers/main/mainController');

container.set('Config', config);
container.set('Ramyun', ramyun);
container.set('Filter', new filter(container.get('Ramyun')));
container.set('MainService', new mainService(container.get('Ramyun')));
container.set('MainController', new mainController(container.get('MainService')));

module.exports = container;

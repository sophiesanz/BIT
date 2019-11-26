'use strict'
var app = require ('express');
var UserController = 
require('../controllers/user')
var api = app.Router();
api.get('/test_user', UserController.test_user);
api.post('/user', UserController.createUser);
api.put('/user/:id', UserController.updateUser);
api.delete('/user/:id', UserController.deleteUser);
module.exports = api; 
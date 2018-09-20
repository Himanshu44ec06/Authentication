const express  = require('express');
const  Controller  = require('../controller/serviceController');
const  app =  express.Router();


var  controller  = new Controller();

app.route('/').post(controller.AddService);
app.route('/').get();
app.route('/:serviceId').get();

module.exports  =  app;
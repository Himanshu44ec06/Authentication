const express  = require('express');
const  Controller  = require('../controller/serviceController');
const  app =  express.Router();


var  controller  = new Controller();

app.route('/').post(controller.AddService);
app.route('/').get(controller.GetService);
app.route('/:serviceId').get();

module.exports  =  app;
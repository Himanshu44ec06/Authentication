const mongoose = require('mongoose');

const  serviceSchema = mongoose.Schema({
        name  : {
            type: string,
            require :  true,
            trim : true,
            unique : true
        },

        status : {
            type  : boolean,
            default : true 
        }

});

const model  = mongoose.model('service',serviceSchema);
module.exports =model;
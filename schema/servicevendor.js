const mongoose = require('mongoose');

const serviceVendor = mongoose.Schema({

    serviceId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'service'
    },

    vendorId : {
        type  :  mongoose.Schema.Types.ObjectId,
        ref :'vendor'
    }
});

const model  = mongoose.model('service',serviceVendor);
module.exports =model;
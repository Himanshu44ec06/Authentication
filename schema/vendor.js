const mongoose = require('mongoose');

const  vendorSchema  =  mongoose.Schema({
    name : {
        type  : String,
        require : true,
        trim :  true,
        minlength : 3,
        unique :  true,
        validate : {
            
        }
    },
    icon  : {
        type  : String,
        require : true,
        
    },

    deviceLimit : {
        type  : int,
        require : true,
        trim :  true,
        validate : {
            
        }
    },

    status : {
        type  : number,
        trim :  true,
        
    },

    device : [{
        deviceId : {
            type  : String,
            require : true,
            trim :  true,
            minlength : 3,
            unique :  true,
            validate : {
                
            }
        },
        deviceName : {
            type  : String,
            require : true,
            trim :  true,
            minlength : 3,
            unique :  true,
        },
        enrollmentId : {
            type  : String,
            require : true,
            trim :  true,
            minlength : 3,
            unique :  true,
        },
        status : {
            type : boolean,
            
        }
    }]


});


var  model  = mongoose.model('vendor',vendorSchema);

module.exports = model;
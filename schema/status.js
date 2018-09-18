const  mongoose  = require('mongoose');

var  statusSchema  =  mongoose.Schema({

        objectType : {
            type :  int,
            require : true
        },
        message  : {
            type :  mongoose.Schema.Types.ObjectId,
            ref : 'message'
        },

        status  : {
            type : boolean
        },
        ObjectId  : {
            type : string,
            require : true
        }
        

});


var  model = mongoose.model('status',statusSchema);

module.exports =  model;
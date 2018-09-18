const mongoose =  require('mongoose');

const  messageSchema  = mongoose.Schema({
        
    messageCode : {
        type : string,
    },

    messageString :  {
        type :  string
    }

});


var  model =  mongoose.model('message',messageSchema);

module.exports =  model;
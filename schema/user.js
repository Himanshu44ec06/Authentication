const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
 // validator = require('validator'),
    //jwt =  require(jsonwebtoken);

const  userSchema  = mongoose.Schema({
    username  : {
        type  : String,
        require : true,
        trim :  true,
        minlength : 3,
        unique :  true,
       
    },

    password  : {
        type  : String,
        require : true,
        trim :  true,
        minlength : 3
        
    },
    fname  : {
        type  : String,
        trim :  true,
        minlength : 3,
       // validate : {}
        
    },
    lname : {
        type  : String,
        trim :  true,
        minlength : 3,
       // validate : {}
        
    },
    status : {
        type  : Number,
        trim :  true,
        
    },
    email : {
        type  : String,
        require : true,
        trim :  true,
        minlength : 3,
        unique : true,
       // validate : {}
    },
    passwordChange : {
        type :  Boolean,
         default  :  true,
    },
    crypt : {
        type  : String,
       // require : true,
        trim :  true,
        minlength : 3,        
    },
    userType : {
        type  : Number,
        require : true,
        minlength : 3,
    }


});
userSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

const User  = mongoose.model('user',userSchema);
module.exports = User;
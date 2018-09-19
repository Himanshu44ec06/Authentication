const mongoose = require('mongoose'),
  validator = require('validator'),
    jwt =  require(jsonwebtoken);

const  userSchema  = mongoose.Schema({
    username  : {
        type  : String,
        require : true,
        trim :  true,
        minlength : 3,
        unique :  true,
        validate : {
            
        }

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
        validate : {}
        
    },
    lname : {
        type  : String,
        trim :  true,
        minlength : 3,
        validate : {}
        
    },
    status : {
        type  : number,
        trim :  true,
        
    },
    email : {
        type  : String,
        require : true,
        trim :  true,
        minlength : 3,
        unique : true,
        validate : {}
    },
    passwordChange : {
        type :  boolean,
         default  :  true,
    },
    crypt : {
        type  : String,
       // require : true,
        trim :  true,
        minlength : 3,        
    },
    userType : {
        type  : int,
        require : true,
        minlength : 3,
    }


});


const User  = mongoose.model('user',userSchema);
module.exports = User;
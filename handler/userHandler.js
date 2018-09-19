const userModel =  require("../schema/user"),
  bcrypt  = require('bcrypt'),
 sharedEnums = require('../common/sharedenums');


const  UserHandler  =  (function(){

    let controller   = {};


    controller.AddVendor = (vendorUser) => {
        return  vendorUser.save();
    }

    controller.Authenticate = (userCred) =>{
        return new Promise((resolve,reject)=>{
                
                    if(!userCred.username)
                        reject('')

                    userModel.findOne({  username : userCred.username}).then((user)=>{
                        if(!user)
                            reject('');
                            
                        if(!bcrypt.compareSync(userCred.password, user.password))
                            reject('');
                            
                        if(user.status != sharedEnums.status.UserStatusDisable){

                            reject('');

                        }
                            
                        resolve(user);

                    });

        });

    }

    return controller;

})();


module.exports  =  UserHandler;
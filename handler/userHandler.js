const userModel =  require("../schema/user");
const  bcrypt  = require('bcrypt'); 


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
                            
                        if(user.status != 1)
                            reject('');
                        
                        resolve(user);

                    });

        });

    }

    return controller;

})();


module.exports  =  UserHandler;
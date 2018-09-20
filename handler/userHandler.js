const userModel =  require("../schema/user"),
  bcrypt  = require('bcrypt'),
 sharedEnums = require('../common/sharedenums');


class  UserHandler {
  constructor(){}

  AddVendor(vendorUser){
    vendorUser.userType = sharedEnums.userType.Vendor;
    return  vendorUser.save();
  };

  Authenticate(userCred){
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


}

module.exports  = UserHandler;



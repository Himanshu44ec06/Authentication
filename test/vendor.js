const  assert =  require('assert'),
UserModel  =  require('../schema/user'),
Utility  = require('../common/Math'),
UserHandler = require('../handler/userHandler');

describe("Vendor Test",()=>{

  it("Enter Vendor in User Table",(done)=>{
        let  userHanlder = new UserHandler();
        let user = new UserModel({
            username : 'himanshu',

        })
        userHanlder.AddVendor(user).then((response)=>{
            console.log(response);
            assert(true);
            done();
        }).catch((error)=>{
            console.log(error);
            assert(false);
            done();
        });
  });

});
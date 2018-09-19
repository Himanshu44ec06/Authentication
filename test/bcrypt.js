const assert  =  require('assert');
const  bcrypt  = require('bcrypt');

describe("Hashing",()=>{

    it("Hasing Password",()=>{
        let password = "Welcome1234";
        var salt = Math.floor(Math.random() * 10);

        let hash  = bcrypt.hashSync(password,salt);

        if(bcrypt.compareSync(password, hash)) {
            assert(true);
           } else {
            assert(false);
           }  

        
        
     });

});
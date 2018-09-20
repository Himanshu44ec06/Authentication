const assert = require("assert");
const  Math = require("../common/Math");

describe("Testing Common Module",()=>{
 

    it("Genrate Random String",()=>{
        
        let ramdomString1  = Math.RandomString();
        let  ramdomString2 = Math.RandomString();

        if(ramdomString1 === ramdomString2)
        assert.fail('Random String doesnot  generate  random  string');

      assert(true);

    });

    it("Generate Random Number",()=>{
            let lengthOfNumber  = 5;
            let randomNumber1  = Math.RandomNumber(lengthOfNumber);
            let randomNumber2  =  Math.RandomNumber(lengthOfNumber);

            if(randomNumber1.toString().length != lengthOfNumber)
                assert.fail('Random Number doesnot  generate of given  length number');
            
            
            if(randomNumber1 === randomNumber2)
              assert.fail('Random Number doesnot  generate  random  number');

            assert(true);

    });

});
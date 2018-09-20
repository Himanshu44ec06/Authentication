const  mongoose  = require('mongoose'),
  config = require('../config/config');

class  Database {
 

    Init(connectionString){
        mongoose.connect(connectionString);
        mongoose.connection
    .once('open',()=>{
        console.log('connected with DB');
    })
    .on('error',(err)=>{ console.warn('ERR => ', err)});
    }

}




module.exports  =  Database;
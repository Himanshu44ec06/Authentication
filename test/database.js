const  mongoose  = require('mongoose'),
  config = require('../config/config');

mongoose.connect(config().Connections.MongoDb);
mongoose.connection
    .once('open',()=>{
        console.log('connected with DB');
    })
    .on('error',(err)=>{ console.warn('ERR => ', err)});

    beforeEach((done)=>{

        done();
    
    
    });
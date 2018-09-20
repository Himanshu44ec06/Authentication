const  Database = require('./database');
const  Server = require('./server');
const   config  = require('../config/config')();


class  StartUp{

        constructor(){}

        Start(){
            
            var database = new  Database();
            database.Init(config.Connections.MongoDb);

            var  server = new Server();
            var  app  = server.Init();


            server.AddListener(app,config.ListeningPort);

        }

}


module.exports  = StartUp;
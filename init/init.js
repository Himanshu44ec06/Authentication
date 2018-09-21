const  Database = require('./database'),
  Server = require('./server'),   
  Routes  = require('./routes'),
  config  = require('../config/config')();



class  StartUp{

        constructor(){}

        Start(){
            
            var database = new  Database();
            database.Init(config.Connections.MongoDb);

            var  server = new Server();
            var  app  = server.Init();

            var routes  = new Routes().GetRoutes();
            for(var route  in  routes){
                server.RegisterRoutes(app,config.basePath + route,routes[route]);
            }
            
            server.AddListener(app,config.ListeningPort);

        }

}


module.exports  = StartUp;
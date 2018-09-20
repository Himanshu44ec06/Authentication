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

            var route  = new Routes();
            route.GetRoutes().map((route)=>{
                server.RegisterRoutes(app,,);

            });


            server.AddListener(app,config.ListeningPort);

        }

}


module.exports  = StartUp;
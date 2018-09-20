const  express  =  require('express'),
 bodyparser  =  require('body-parser');
 

 class  Server {
 
    Init (){
        const app  = express();
        app.use(bodyparser.json());
            return app;
    }
    RegisterRoutes(app,path,instance){

            app.use(path,instance);
            return  app;
    }
    AddListener(app,port){
        app.listen(port,function(){
            console.log("Listening to  port " + port);
        });
        return app;
    }
 }

 module.exports = Server;
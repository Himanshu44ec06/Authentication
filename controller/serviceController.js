const model =  require('../schema/service');
const  ServiceHandler =  require('../handler/serviceHandler');

class ServiceController  {
 
    serviceHandler = null;

    constructor(){
        serviceHandler  = new ServiceHandler();
    }

    AddService(req, res){

            var modelToSave  = new model({
                name :  req.body.name,
                stataus : true
            });

            serviceHandler.AddService(modelToSave).then((d)=>{
                res.send(d);
            }).catch((err)=>{

                 res.status(400).send(err);
            });


    }


}


module.exports  = ServiceController;
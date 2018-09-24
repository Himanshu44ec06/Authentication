const model =  require('../schema/service'),
sharedEnums  = require('../common/sharedenums'),
ServiceHandler =  require('../handler/serviceHandler'),
ErrorHandler =  require('../handler/errorHandler'),
ResponseHandler  = require('../handler/responseHandler');

class ServiceController  {
 
      
    
    constructor(){
        
    }

    
    AlterService(req,res){
        let serviceHandler  = new ServiceHandler();
        let errorHandler = new ErrorHandler();
        let responseHandler = new ResponseHandler();
        if(!req.query.serviceId)
            errorHandler
            .sendValidationError(res,
                {errorCode :  sharedEnums.errorMesaageCode.Eservice03}
            );
        
        serviceHandler.GetServiceById(req.query.serviceId).then((service)=>{
            if(!service)
                errorHandler.sendValidationError(res,
                        {errorCode :  sharedEnums.errorMesaageCode.Eservice03}
                    );
            if(req.body.status)
                    service.status  = req.body.status;
                    

        }).catch((err)=>{

            errorHandler
                .sendServerError(res,
                    {errorCode :  '00', message :  err}
                );
        });
        

    }

    GetService(req,res){
        let serviceHandler  = new ServiceHandler();
        let errorHandler = new ErrorHandler();
        let responseHandler = new ResponseHandler();
        serviceHandler.GetService().then((response)=>{
            responseHandler.send200Respose(res,response);
        }).catch((err)=>{
            errorHandler
                .sendServerError(res,
                    {errorCode :  '00', message :  err}
                );
        })
    }

    AddService(req, res){
       let serviceHandler  = new ServiceHandler();
       let errorHandler = new ErrorHandler();
       let responseHandler = new ResponseHandler();
    

            var modelToSave  = new model({
                name :  req.body.name,
                status : true
            });

            if(!modelToSave.name || modelToSave.name.length < 1) 
                errorHandler
                .sendValidationError(res,
                    {errorCode :  sharedEnums.errorMesaageCode.EService01}
                );

            serviceHandler.AddService(modelToSave).then((d)=>{
                responseHandler.send201Respose(res,d);
            }).catch((err)=>{
                if(err.errors){
                        for(var error  in err.errors){
                            if(error == "name")
                            {
                                errorHandler
                                .sendValidationError(res,
                                    {errorCode :  sharedEnums.errorMesaageCode.EService02}
                                );
                                break;
                            }
                        }

                }
                errorHandler
                .sendServerError(res,
                    {errorCode :  '00', message :  err}
                );
            });


    }


}


module.exports  = ServiceController;
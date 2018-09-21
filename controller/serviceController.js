const model =  require('../schema/service'),
sharedEnums  = require('../common/sharedenums'),
ServiceHandler =  require('../handler/serviceHandler'),
ErrorHandler =  require('../handler/errorHandler'),
ResponseHandler  = require('../handler/responseHandler');

class ServiceController  {
 
      
    
    constructor(){
        
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
                stataus : true
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
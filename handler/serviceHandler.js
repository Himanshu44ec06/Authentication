const  serverModel =  require('../schema/service');


class  ServiceHandler {

    constructor(){}

    AddService(service){
        return service.save();
    }

    GetService(){
        return  serverModel.find({ status :  true });
    }

    GetService(serviceId) {
        return  serverModel.findById(serviceId);
    }


}


module.exports =  ServiceHandler;
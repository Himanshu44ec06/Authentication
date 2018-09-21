const SharedEnums  =  require('../common/sharedenums');


class  ErrorHandler{
 
    constructor(){}

    sendValidationError(res,response){
        this.sendResponse(res,SharedEnums.responseCode["400"],response);
    }

    sendServerError(res,response){
        this.sendResponse(res,SharedEnums.responseCode["500"],response);
    }

    sendResponse(res,status,response){
        res.status(status).send({ errorCode : response.errorCode || '00', message : response.message || 'Something went  wrong'});
    }
}

module.exports =  ErrorHandler;
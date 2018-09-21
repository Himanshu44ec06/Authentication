const sharedEnums  = require('../common/sharedenums');

class ResponseHandler {

    constructor(){}

    send200Respose(res,response){
        this.sendResponse(res,sharedEnums.responseCode["200"],response);
    }

    send201Respose(res,response){
        this.sendResponse(res,sharedEnums.responseCode["201"],response);
    }

    sendResponse(res,status,response){
        res.status(status).send({ body : response});
    }
}

module.exports  = ResponseHandler;
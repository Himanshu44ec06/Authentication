
class Routes {
 
    constructor(){};

    GetRoutes(){

        return {
            "/service" : require('../routes/serviceRoute'),
            //"/Dashboard" :  require("../route/dashboardRoute"),


        }
    } 

}

module.exports = Routes;
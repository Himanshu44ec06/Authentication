const env  = require('./env.json');


function load() {
    var node_env  =  env.ENV['DEV'];
    return  node_env;
}

module.exports = () => {
   return load();
}
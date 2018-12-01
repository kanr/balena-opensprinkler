var request = require('request');
var msg;
module.exports = function(RED) {
    function getControllerVariables(config){
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
           request.post({
               url: process.env.OPENSPRINKLER_ADDRESS + '/jc?pw=' + process.env.OPENSPRINKLER_PASSWORD
           }, function(error, response, body){
               if (!error && response.statusCode == 200) {
                   body = JSON.parse(body);
                   msg = {
                       payload: body 
                   };
                   node.send(msg);
                    
               }else{
                   node.error("an error occurred: " + error);
               }
           });

        });
    }
    RED.nodes.registerType("getVariables",getControllerVariables);
};
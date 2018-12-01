var request = require('request');
var msg;
module.exports = function(RED) {
    function getControllerVariables(config){
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
           requestAnimationFrame.post({
               url: process.env.OPENSPRINKLER_ADDRESS + '/jc?pw=' + process.env.OPENSPRINKLER_PASSWORD
           }, function(error, response, body){
               if (error) {
                   return node.error("an error occurred: " + error);
               }
               msg = {
                   payload: response.statusCode
               };
               node.send(msg);
           })

        });
    }
    RED.nodes.registerType("OpenSprinkler",getControllerVariables);
}
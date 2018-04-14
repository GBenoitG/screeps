var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');


module.exports.loop = function () {

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        console.log(creep.memory.role)
        if(creep.memory.role == 'harvester') {
            console.log("run");
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep)
        }
    }

}

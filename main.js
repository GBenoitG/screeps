var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

var HARVESTER_COUNT = 4;
var UPGRADER_COUNT = 2;

function init() {

    Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], "harvester0");

}

function checkSurvivor() {

    //console.log(_.minBy(Game.creeps, function(o) { return o.ticksToLive; }));

    if(roleHarvester.getNb() < HARVESTER_COUNT) {
        var nbCreeps = HARVESTER_COUNT - harvesters.length

        for(i=1; i<nbCreeps+1; i++){
            roleHarvester.createNewOne("Spawn1")
        }

    }

    if(roleUpgrader.getNb() < UPGRADER_COUNT) {
        var nbCreeps = HARVESTER_COUNT - harvesters.length

        createHarvesters(harvesters.length, nbCreeps)

    }

}



/*function createHarvesters(offset, nbCreeps) {

    for(i=1; i<nbCreeps+1; i++){
        console.log("create one creep")
        Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], "harvester" + offset + i);
    }

}*/

init();

module.exports.loop = function () {

    checkSurvivor();

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        roleHarvester.run(creep);
    }

}

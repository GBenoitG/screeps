var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

var HARVESTER_COUNT = 2;
var UPGRADER_COUNT = 2;

function init() {
    
    Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], "harvester0");
    
}

function checkSurvivor() {
    
    console.log(_.minBy(Game.creeps, function(o) { return o.ticksToLive; }));
    
    var harvesters = _.filter(Game.creeps, function(o) { 
        console.log(o.name.includes("harvester"));
        return o.name.includes("harvester")
    } )
    // var harvesters = Game.creeps.filter( (creep) => { creep.name.includes("harvester"); } )
    console.log("nb harvester : " + harvesters.length)
    if(harvesters.length < HARVESTER_COUNT) {
        var nbCreeps = HARVESTER_COUNT - harvesters.length
        
        createHarvesters(harvesters.length, nbCreeps)
        
    }
    
}

function createHarvesters(offset, nbCreeps) {
    
    for(i=1; i<nbCreeps+1; i++){
        console.log("create one creep")
        Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], "harvester" + offset + i);
    }
    
}

init();

module.exports.loop = function () {
    
    checkSurvivor();

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        roleHarvester.run(creep);
    }
    
}
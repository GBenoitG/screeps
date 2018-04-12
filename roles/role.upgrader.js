var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            if(creep.transfer(Game.room.controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.room.controller);
            }
        }
	}

	createNewOne: function(spawnStr) {
	    Game.spawns[spawnStr].createCreep([WORK, CARRY, MOVE], "upgrader" + (getLast() + 1)) );
	}

	getUpgraders: function() {
	    let upgraders = _.filter(Game.creeps, function(o) { return o.name.includes("upgrader") });
	    console.log("nb upgrader : " + upgraders);
	    return upgraders;
	}
	getLast: function() {
	    return _.max(getUpgraders(), function(o) { return o.name.match(/\d+/)[0] } ).name.match(/\d+/)[0];
	}

	getNb: function() {
	    return getUpgraders().length
	}
};

module.exports = roleUpgrader;

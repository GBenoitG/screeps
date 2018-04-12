var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
        }
	}

	createNewOne: function(spawnStr) {
	    Game.spawns[spawnStr].createCreep([WORK, CARRY, MOVE], "harvester" + (getLast() + 1)) );
	}

	getHarvesters: function() {
	    let harvesters = _.filter(Game.creeps, function(o) { return o.name.includes("harvester" });
	    console.log("nb harvester : " + harvesters);
	    return harvesters;
	}

	getLast: function() {
	    return _.max(getHarvesters, function(o) { return o.name.match(/\d+/)[0] } ).name.match(/\d+/)[0];
	}

	getNb: function() {
	    return getHarvesters.length
	}

};

module.exports = roleHarvester;

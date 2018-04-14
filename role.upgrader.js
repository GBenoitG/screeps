var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            creep.say('⛏ harvest');
        }
        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
            creep.say('🔧 upgrade');
        }
        
	    if(!creep.memory.upgrading) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
	},

    createNewOne: function(spawnStr) {
        Game.spawns[spawnStr].createCreep([WORK, CARRY, MOVE], "upgrader" + (this.getLast() + 1) );
    },

    getUpgraders: function() {
        let upgraders = _.filter(Game.creeps, function(o) { return o.name.includes("upgrader") });
        console.log("nb upgrader : " + upgraders);
        return upgraders;
    },

    getLast: function() {
        if(this.getNb() <= 0) {
            return 0
        }
        return _.max(this.getUpgraders(), function(o) { return o.name.match(/\d+/)[0] } ).name.match(/\d+/)[0];
    },

    getNb: function() {
        return this.getUpgraders().length
    }
};

module.exports = roleUpgrader;

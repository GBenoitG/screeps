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
    },

    createNewOne: function(spawnStr) {
        let name = "harvester" + (this.getLast() + 1);
            console.log("new : " + name);
        if(Game.spawns[spawnStr].canCreateCreep([WORK, CARRY, MOVE], name)) {
            Game.spawns[spawnStr].createCreep([WORK, CARRY, MOVE], name);
            Game.creeps[name].memory.role = "harvester";
        }

    },

    getHarvesters: function() {
        let harvesters = _.filter(Game.creeps, function(o) { return o.name.includes("harvester") });
        return harvesters;
    },

    getLast: function() {
        if(this.getNb() <= 0) {
            return 0
        }
        
        let lastNb = _.max(this.getHarvesters, function(o) {
            console.log("test " + o.name)
            return o.name.match(/\d+/)[0]
        } );
        
        //console.log(lastNb);
        return lastNb;
    },

    getNb: function() {
        let nb = this.getHarvesters().length;
        //console.log("nb harvester : " + nb);
        return nb;
    }

};

module.exports = roleHarvester;

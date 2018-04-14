/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    
    HARVESTER {
        role : "harvester",
        body : [WORK, CARRY, MOVE]
    },
    
    UPGRADER {
        role : "upgrader",
        body : [WORK, CARRY, MOVE]
    },
    
    BUILDER {
        role : "builder",
        body : [WORK, CARRY, MOVE]
    }

};
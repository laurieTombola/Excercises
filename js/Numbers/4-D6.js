'use strict';

var rollDice = function(sides) {
    return Math.ceil(Math.random()*sides);
};

var stats = {};
var roll;
for (var i =0; i < 100000; i++) {
    roll = rollDice(6);
    stats[roll] = stats[roll] ? stats[roll] +1 : 1;
}
console.log(stats);
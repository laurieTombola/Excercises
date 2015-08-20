'use strict';

var MPG = 5, distance = 200;

var calcFuelNeeded = function(milesPerGallon, distanceToTravel){
    return distanceToTravel/milesPerGallon;
};

console.log(calcFuelNeeded(MPG, distance) + ' gallons needed to travel ' + distance + ' miles at ' + MPG + ' miles per gallon.');
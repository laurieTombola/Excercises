'use strict';

var sideA = 10, sideB = 20, hypotenuse;

var calcHyp = function(A, B) {
    return Math.sqrt(Math.pow(A, 2)+Math.pow(B, 2));
};

console.log('Side A = '+sideA+ ' Side B = '+ sideB + ' Hypotenuse = ' + calcHyp(10,20));

var opp = 10, ang = 32;

var calcHypSOH = function(opposite, angle) {
    return opposite / Math.sin(angle);
}

console.log('Opposite = '+opp+ ' Angle = '+ ang + ' Hypotenuse = ' + calcHypSOH(opp, ang));
'use strict';

var myArray = [1,2,3,4,5,6,7,8,9,0];

function toCSV(array) {
    return array.join(',');
}

console.log(toCSV(myArray));
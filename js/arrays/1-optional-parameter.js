'use strict';

function returnEntries(array, upTo) {
    var i = 0;
    var values = [];
    do{
        values.push(array[i]);
        i++;
    }while (upTo > i);
    return values;
}

var myArray = [1,2,3,4,5,6,7,8,9,0];

console.log(returnEntries(myArray));

console.log(returnEntries(myArray, 3));
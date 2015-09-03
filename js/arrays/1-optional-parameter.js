'use strict';

function returnEntries(array, upTo) {
    var values;
    if(upTo !== undefined){
        values = array.slice(0,upTo);
        return values;
    }
    else {
        return array[0];
    }
}

var myArray = [1,2,3,4,5,6,7,8,9,0];

console.log(returnEntries(myArray));

console.log(returnEntries(myArray, 3));
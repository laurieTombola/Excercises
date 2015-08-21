'use strict';

var myArray = [1,2,3,4,5,6,7,8,9,0];

function toCSV(array) {
    var csvValue = '';
    for(var i = 0; i < array.length; i++) {
        csvValue += array[i].toString();
        console.log(csvValue);
        if(i+1 !== array.length) {
            csvValue += ',';
        }
    }
    return csvValue;
}

console.log(toCSV(myArray));
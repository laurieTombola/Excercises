'use strict';

var convertCelciusToFarenheit = function(celcius){
    return ((celcius * (9 / 5)) + 32);
}

console.log('21 Celcius is '+convertCelciusToFarenheit(21)+' Farenheit');
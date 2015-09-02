'use strict';

var myPostCode = 'Random non postcode text SR2 7BY surrounding an actual postcode.#;:][{}<>,.', number = '123', notNumber = 's23';

var validate = function(inputRegex, string){
    var regex = new RegExp(inputRegex);
    return regex.test(string);
};

var validateAlt = function(nonStringRegex, string){
    return nonStringRegex.test(string);
};
var postCodeRegex = /^[\s\S]*[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}[\s\S]*$/i, numberRegex = /^\d+$/i;

console.log(validate(postCodeRegex, myPostCode) ? "Postcode " + myPostCode + " is valid" : "Postcode " + myPostCode + " is Invalid");

console.log(validateAlt(numberRegex, number) ? "Number " + number + " is valid" : "Number " + notNumber + " is Invalid");

console.log(validateAlt(numberRegex, notNumber) ? "Number " + notNumber + " is valid" : "Number " + notNumber + " is Invalid");
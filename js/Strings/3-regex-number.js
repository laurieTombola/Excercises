

var myPostCode = 'SR2 7BY', number = '123', notNumber = 's23';

validate = function(inputRegex, string){
    regex = new RegExp(inputRegex);
    return regex.test(string);
};

validateAlt = function(nonStringRegex, string){
    return nonStringRegex.test(string);
};
var postCodeRegex = '^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$', numberRegex = /^\d+$/i;

console.log(validate(postCodeRegex, myPostCode) ? "Postcode " + myPostCode + " is valid" : "Postcode " + myPostCode + " is Invalid");

console.log(validateAlt(numberRegex, number) ? "Number " + number + " is valid" : "Number " + notNumber + " is Invalid");

console.log(validateAlt(numberRegex, notNumber) ? "Number " + notNumber + " is valid" : "Number " + notNumber + " is Invalid");
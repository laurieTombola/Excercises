'use strict';

var firstName = 'Dan', secondName = 'Kabe';
var calcLove = function(name1, name2){

    var nameLength = name1.length+name2.length-(Math.round(Math.random()*7));

    var result = nameLength*42;

    if(result >100) {
        result = 100;
    }
    return result;
};

console.log(firstName + ' and ' + secondName + ' are ' + calcLove(firstName, secondName) + '% compatible.');
console.log(firstName + ' and ' + secondName + ' are ' + calcLove(firstName, secondName) + '% compatible.');
console.log(firstName + ' and ' + secondName + ' are ' + calcLove(firstName, secondName) + '% compatible.');
console.log(firstName + ' and ' + secondName + ' are ' + calcLove(firstName, secondName) + '% compatible.');
console.log(firstName + ' and ' + secondName + ' are ' + calcLove(firstName, secondName) + '% compatible.');
console.log(firstName + ' and ' + secondName + ' are ' + calcLove(firstName, secondName) + '% compatible.');
console.log(firstName + ' and ' + secondName + ' are ' + calcLove(firstName, secondName) + '% compatible.');
console.log(firstName + ' and ' + secondName + ' are ' + calcLove(firstName, secondName) + '% compatible.');
console.log(firstName + ' and ' + secondName + ' are ' + calcLove(firstName, secondName) + '% compatible.');
console.log(firstName + ' and ' + secondName + ' are ' + calcLove(firstName, secondName) + '% compatible.');
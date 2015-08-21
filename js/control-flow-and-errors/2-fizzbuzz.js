'use strict';

function fizzBuzz(){
    for(var i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0) {
            console.log(i+'! JavaScript!!');
        }
        else if (i % 3 === 0) {
            console.log(i+'! Java');
        }
        else if (i % 5 === 0) {
            console.log(i+'! Script');
        }
    }
}

fizzBuzz();
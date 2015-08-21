'use script';

var fibonacci = [0,1];

function moreFibonacci(array, howMany){
    howMany -= 2;
    return fib(array, howMany);
}

function fib(array, howMany){
    array.push(array[array.length-1]+array[array.length-2]);
    howMany -= 1;
    if(howMany === 0) {
        console.log('fibonacci to ' + num + ' places is: ' + array);
    }
    else {
        fib(array, howMany);
    }
}
var num = 15;
var myArray = moreFibonacci(fibonacci, num);
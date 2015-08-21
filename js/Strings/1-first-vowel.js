console.log('Using JS');
var rand = 'JSDFHDVHUEVDAKNDSEINX';

var Vowels = ['A','E','I','O','U'];
var positions = [];
var earliestVowelPos = 666;
var arrayIndex = 0;
for(var i = 0; i < Vowels.length; i++){
    positions[i] = rand.indexOf(Vowels[i]);
    if(positions[i] < earliestVowelPos && positions[i] >= 0) {
        earliestVowelPos = positions[i];
        arrayIndex = i;
        console.log('New Earliest Vowel found at '+ Vowels[i] + ' at position ' + positions[i]);
    }
}

console.log('Earliest Vowel is '+ Vowels[arrayIndex] + ' at position ' + positions[arrayIndex]);

console.log('Using Regex');

console.log('First Vowel is at Position '+rand.search('[AEIOU]') + ' and is a ' + rand.charAt(rand.search('[AEIOU]')));
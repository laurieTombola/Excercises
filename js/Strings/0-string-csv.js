/**
 * Created by laurie.athey on 19/08/15.
 */
var csvString = '1997,Ford,E350,"SuperLuxurious" truck';

var values = csvString.split(',');

for(var i = 0; i < values.length; i++){
    console.log(values[i]);
}
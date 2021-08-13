'use strict'

// in strict mode variable must be declared before it is used

/*
35. We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

The example:
alert( extractCurrencyValue('$120') === 120 ); // true
*/
function extractCurrencyValue(str) {
    // return parseInt(str.slice(1));
    //alert(+'john');  returns NaN
    return +(str.slice(1));  //unary plus operator converts string representation of number to a number

}

console.log(extractCurrencyValue('$120') === 120);
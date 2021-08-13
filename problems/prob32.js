'use srtict'

/*
32. Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

E.g.:
ucFirst("john") == "John";
*/

function ucFirst(str) {
    // first check if str is a string
    if (typeof (str) === 'string') {

        str = str[0].toUpperCase() + str.slice(1);  //string concatenation str.slice(1) return substring from 1stposition 
        return str;
    }
    else {
        return str;
    }


}

console.log(ucFirst('john'));
console.log(ucFirst(456212));

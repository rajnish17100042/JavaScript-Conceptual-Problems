'use strict'

/*
33. Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise `false.

The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

function checkSpam(str) {
    // check if str is a string  ....done in prob32
    str = str.toLowerCase();   // get rid of case-sensitive

    // if (str.includes('viagra') || str.includes('xxx')) {
    //     return true;
    // }
    // else {
    //     return false;
    // }

    //shorthand 
    return str.includes('viagra') || str.includes('xxx')

}




console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit")); 
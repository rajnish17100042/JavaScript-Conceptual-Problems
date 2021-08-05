// returns true if str contains ‘viagra’ or ‘XXX’, otherwise `false

function checkSpam(str) {
    // check if str is a string  ....done in prob32
    str = str.toLowerCase();
    // if (str.includes('viagra') || str.includes('xxx')) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return str.includes('viagra') || str.includes('xxx')

}




console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit")); 
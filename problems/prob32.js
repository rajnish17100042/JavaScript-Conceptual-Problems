// return the string str with the uppercased first character

function ucFirst(str) {
    // first check if str is a string
    if (typeof (str) === 'string') {
        str = str[0].toUpperCase() + str.slice(1);
        return str;
    }
    else {
        return str;
    }


}

console.log(ucFirst('john'));
console.log(ucFirst(456212));


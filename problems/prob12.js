'use strict'

/*
12. Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
That is: removes all dashes, each word after dash becomes uppercased.

Examples:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/


function camelize(str) {

    // we can't change any character in a string  .. i.e string is immutable
    //so first split the string and get the array of character   ... array elements  can be modified
    //use splice() method to delete an element from an array ... splice() method change the original array
    let strArr = str.split('');
    // alert(`type of strArr is ${typeof strArr} and the strArr is ${strArr}`);
    // alert(strArr.splice(10, 1));
    // alert(strArr);

    for (let i in strArr) {
        if (strArr[i] == '-') {
            // alert(+i + 1);  //here i is a string
            strArr[+i + 1] = strArr[+i + 1].toUpperCase();
            strArr.splice(i, 1);
        }
    }
    // now join all the character array into a single string
    str = strArr.join('');
    return str;
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));
'use strict'

/*
34. Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.

For instance:

truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

truncate("Hi everyone!", 20) = "Hi everyone!"
*/

function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    }
    else {
        // use substr(start,length) method
        return `${str.substr(0, maxlength - 1)} ...`;
    }
}





console.log(truncate("What I'd like to tell on this topic is:", 20))
console.log(truncate("Hi everyone!", 20));
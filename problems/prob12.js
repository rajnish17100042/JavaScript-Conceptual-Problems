// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

function camelize(str) {
    var temp = str.split('');
    for (var i = 0; i < temp.length; i++) {
        if (temp[i] == "-") {
            temp[i + 1] = temp[i + 1].toUpperCase();
            temp.splice(i, 1)
        }
    }
    str = temp.join('');

    return str

};

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));

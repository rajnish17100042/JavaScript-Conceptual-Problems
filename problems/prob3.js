let menu = {
    width: 800,
    height: 900,
    title: "My menu"
}

multiplyNumeric(menu);
function multiplyNumeric(menu) {
    for (const men in menu) {
        if (Number.isInteger(menu[men])) {
            menu[men] *= 2;
        }

    }
}

console.log(menu.width);
console.log(menu.height);
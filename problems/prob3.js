// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2

function multiplyNumeric(menu) {
    for (const men in menu) {
        if (isFinite(menu[men])) {
            menu[men] *= 2;
        }

    }
}

let menu = {
    width: 800,
    height: 900,
    title: "My menu"
}

multiplyNumeric(menu);

console.log(menu.width);
console.log(menu.height);
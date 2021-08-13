'use strict'

/*
3. Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

*/

function multiplyNumeric(menu) {
    //here menu is copied by reference so any change will affect the original object
    //if we don't want that then we have to create new object and copy all properties in that
    // loop through the properies
    for (let prop in menu) {
        if (isFinite(menu[prop])) {
            menu[prop] *= 2;
        }
    }

}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

// alert(menu)  // will not give the correct output  [object object] will take care in onject to primitive conversion
console.log(menu)

multiplyNumeric(menu);

console.log(menu);



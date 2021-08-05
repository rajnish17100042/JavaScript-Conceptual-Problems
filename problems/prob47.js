// Write a function count(obj) that returns the number of properties in the object:

function count(obj) {
    if (typeof obj != 'object') {

        return `input is not an object`;
    }
    return Object.keys(obj).length;

}




let user = {
    name: 'John',
    age: 30
};

let user2 = {};
let user3 = 'Rajnish'

console.log(count(user));
console.log(count(user2));
console.log(count(user3));
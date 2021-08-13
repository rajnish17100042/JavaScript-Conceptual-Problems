'use strict'

/*
6. Add a property to the following object so that the following usage of the object works:

function makeUser() {
  return {
    name: "John"
  };
};

let user = makeUser();
alert( user.ref.name );// this should work and return appropriate name ("John")
*/
function makeUser() {    // returning object(i.e reference) 
    return {
        //name: "John",  //no use for getting the desired output
        ref: {
            name: 'john',
        }
    };
}


let user = makeUser();
alert(user.ref.name);


//another solution 
//we know that keyword 'this' is calculated  at the run time

/*
function makeUser() {
    return {
        name: "John",
        ref: function () {
            return this;
        },
    };
}

user = makeUser();
alert(user.ref().name);
*/
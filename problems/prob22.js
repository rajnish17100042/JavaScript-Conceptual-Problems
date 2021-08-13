'use strict'

/*
22. We have an object:

let user = {
  name: "John",
  years: 30
};

name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false if absent)
The values after the assignment should be:

let user = { name: "John", years: 30 };

// your code to the left side:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false
*/

// object destructuring is used 

let user = { name: "John", years: 30 };

//name proerty of user is stored in name variable   .. years property is stored in age variable
var { name, years: age, isAdmin = false } = user;   // by default isAdmin is set to false

alert(`name of user is ${name}`);
alert(`age of  user is ${age}`);
alert(`Is user an admin?? ${isAdmin}`);

//let set the isAdmin property to true  
user.isAdmin = true;

var { name, years: age, isAdmin = false } = user;

alert(`name of user is ${name}`);
alert(`age of  user is ${age}`);
alert(`Is user an admin?? ${isAdmin}`); 

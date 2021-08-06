
let user = { name: "John", years: 30, isAdmin: 'true' };
//let user = { name: "John", years: 30 };//default case
let { name: name, years: age, isAdmin = 'false' } = user;
alert(name);
alert(age);
alert(isAdmin);
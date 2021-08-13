'use strict'

/*
5. let user = {
  name: "John"
};

alert(user); // toString -&gt; John
alert(user + 500); // toString -&gt; John500
*/

let user = {

    name: 'John',
    money: 1000,


    toString() {
        return this.name;
    },
};

alert(user); //will first call the toString() method , if it is not there the call valueOf()method
alert(user + 500);  //will first call the valueOf() method , if it is not there the call toString()method
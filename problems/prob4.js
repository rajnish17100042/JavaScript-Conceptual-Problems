'use strict'

/*
4. let user = {
  name: "John",
  money: 1000
};

// conversions demo:
alert(user); // should print -&gt; {name: "John"}
alert(+user); // should print -&gt; 1000
alert(user + 500); // should print -&gt; 1500
*/



//object to primitive conversion is used to convert

let user = {

    name: 'John',
    money: 1000,

    //toString() anf valueOf() method is called to handle the primitive conversions

    toString() {
        return this.name;
    },

    valueOf() {
        return this.money;
    }
};


alert(user); //will first call the toString() method , if it is not there the call valueOf()method
alert(+user); //will first call the valueOf() method , if it is not there the call toString()method
alert(user + 500);  //will first call the valueOf() method , if it is not there the call toString()method
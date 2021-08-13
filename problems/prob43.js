'use strict'

/*
43. 
	1.	Create an array styles with items “Jazz” and “Blues”.
	2.	Append “Rock-n-Roll” to the end.
	3.	Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
	4.	Strip off the first value of the array and show it.
	5.	Prepend Rap and Reggae to the array.

	The array in the process:

Jazz, Blues
Jazz, Bues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll
*/

let styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll');

let middle = Math.floor((styles.length - 1) / 2);

styles[middle] = 'Classics';

//delete data from queue
console.log(styles.shift());//shift() will return the deleted element

//push the data into queue
styles.unshift('Rap', 'Reggae');

console.log(styles);
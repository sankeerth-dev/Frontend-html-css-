/* unshift(val) and shift() -FIFO */

var user = ['tom', 'Ayan'];
console.log(`user =`, user);

        //array.unshift('Harry'); //-> add at beginning
user.unshift('Harry');//first in
console.log(`after unshift =`, user);

user.unshift('John');//first in
console.log(`after unshift =`, user);

console.log(`\n`);

user.shift(); //-> remove from beginning
console.log(`after shift =`, user);

user.shift(); //-> remove from beginning
console.log(`after shift =`, user);

user.shift(); //-> remove from beginning
console.log(`after shift =`, user);
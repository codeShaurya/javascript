var one   = 1;     //number type
var two   = '2';    // string type
var three = 'three';   //string type
var four  = ["Saab", "Volvo", "BMW", "NANO"]; //array object type
/*
   variable "five" is object which contains key-value
    syntax is  (KEY:VALUE)
 */
var five = {
    one  : 1,
    two  : 2,
    three: 3,
    four : 4,
    five : 5
};

//defining functions
// function six() {
//   console.log('six  is function.');
// }
//other  way to define functions
var six = function() {
    console.log('six function.');
};
var seven = new Number(12);
var eight = new String('Eight');
var nine  = new Array("Saab", "Volvo", "BMW");

//typeof tutesnode
// console.log(1, typeof one);
// console.log(2, typeof two);
// console.log(3, typeof three);
// console.log(4, typeof four);
// console.log(5, typeof five);
// console.log(6, typeof six);
// console.log(7, typeof seven, seven);
// console.log(8, typeof eight, eight);
// console.log(9, typeof nine, nine);
// console.log('null', typeof null);
// console.log('undefined', typeof undefined);
// console.log('NaN', typeof NaN);
/*output of above code
1 'number'
 2 'string'
 3 'string'
 4 'object'
 5 'object'
 6 'function'
 7 'object' [Number: 12]
 8 'object' [String: 'Eight']
 9 'object' [ 'Saab', 'Volvo', 'BMW' ]
 null object
 undefined undefined
 NaN number
 */


//-------------------------------------------------------------------------------
//JSON tutes
console.log(five); // it will print{ one: 1, two: 2, three: 3, four: 4, five: 5 }

console.log(five.one);//way to access keyvalue of object "five"
console.log(five['one']);//other way to access keyvalue of object "five"

five.six = 6;  //adding new key to object "five"
// five["six"] = 6;//other way for adding new key to object "five"
console.log(five);//output-{ one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 }
delete five.two; // deleting any key of object
console.log(five);//output-{ one: 1, three: 3, four: 4, five: 5, six: 6 }

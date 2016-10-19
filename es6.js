'use strict';
//How to define a variable in es6 version of javascript
//new way to define variable using "let"
let one = 1;
let two = '2';
/*this example shows scope of local variable is within the block only
and local variable hides global variable*/
function test1() {
   let two = 22;
   console.log(one);
   console.log(two);

   if(true) {
     let two = 'string two';
     console.log(two);
   }
}
test1();
//-----------------------------------------------------------------------------------
/*this is same example as above but using "var" instead of "let"
 sometime using var multiple times throws error on browser*/
var three = 3;

console.log(three);
function test2() {
  var three = 'three is this.';

  console.log(three);

  if(true) {
    var three = "string three.";
    console.log(three);
  }
}

test2();


///////////////////////////////
//ES5 version to define function
function first() {
  console.log('This is first.');
}

//ES6 verion to define function
let third = () => {
  console.log('this is third function.');
};
//we can avoid parenthesis if it contains only or two statements
let fourth = () => console.log('This is fourth function.');
//"12345" is a return value of func "fifth"
let fifth = () => 12345;
let sixth = (value) => value * 2;
//we can avoid brackets of parameters if it contain one value
let seven = value  => value * 2;
//two arguments using es6 version of defining functions
let eight = (value1, value2) => value1 * value2;

third();
fourth();
console.log(fourth());
console.log(fifth());
console.log(sixth(5));
console.log(seven(10));
/* output of above six line code
this is third function.
 This is fourth function.
 This is fourth function.
 undefined
 12345
 10
 20*/


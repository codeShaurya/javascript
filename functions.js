function first() {
  console.log('first Function called.');
}
/*setTimeout is used to delay in printing or returning
  syntax  setTimeout(function,time_in_ms)*/
function second() {
  setTimeout(function() {
    console.log('second function called.');
  }, 2000);
}

function third() {
  setTimeout(function() {
    console.log('third function called. print');
    return 'third function called. return';
  }, 2000);
}
//forexample
third();
second();
first();
/*above code output
 first Function called.
 third function called. print
 second function called.
 */

//otherexample
console.log(third());// it will return "undefined" as it will not wait for 2 sec for return
/*output of above line
 undefined
 third function called. print
 */
//-------------------------------------------------------------------------------------------------
//use of callback is a function
//defining function using callback
function something(value, callback) {
    callback(value * 20);
}
//deining callback function
function somethingCallback(callbackValue) {
    console.log(callbackValue);
}
//calling main function
something(5,somethingCallback);//output -  100
//in this we are passing a callback function as parameter of main function
//------------------------------------------------------------------------------------------------
//callback function with two argument
function fourth(value, callback) {
    setTimeout(function() {
        callback(value * 2, value + 20);
    }, 1000);
}
//in this instead of defining callback function we directly called by defining function during calling
fourth(10, function (value1, value2) {
    console.log(value1, value2);}
    );
/*output -  20 30
callback is used so that it can return value after the delay also.
but in above example "undefined" is return due to delay*/
//-------------------------------------------------------------------------------------
//multiple callbacks
function fifth (value, success, error) {//success & error are name given to callback
  if(value > 10) {
    success('greater than 10');
  }
  else {
    error('less than 10');
  }
}

//there is two callbacks so we have to pass two functions()
fifth(
  5,
  function(str) {
    console.log('first callback', str);
  },
  function(str) {
    console.log('second callback', str);
  }
);
//output-second callback less than 10
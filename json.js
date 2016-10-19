var json = {
  //Number
  number : 1,
  decimal: 1.2,

  //String
  string: 'this is string',

  //Types of arrays
  //empty array
  emptyArray : [],

  //Array of Numbers
  arrayOfNumbers: [1, 2, 3, 4, 5],
  //array of string
  arrayOfStrings: ['one', 'two', 'three', 'four'],

  //2-D array
  //Array of Arrays
  arrayOfArrays: [
    [1,  2,  3,  4,  5],
    [11, 12, 13, 14, 15],
    [21, 22, 23, 24, 25],
    [31, 32, 33, 34, 35]
  ],

  //3-D array
  '3DArray' : [
    [
      [1, 2, 3, 4, 5]
    ],
    [
      [6, 7, 8, 9, 10]
    ]
  ],

  //Array of Objects
  arrayOfObjects: [
    {
      userId: 1,
      username: 'hbarve1'
    },
    {
      userId: 2,
      username: 'yukta'
    },
    {
      userId: 3,
      username: 'mayash'
    }
  ],

  //Simple Function
  func: function() {
    console.log('This is a function');
  },

  //Array of functions.
  arrayOfFunction: [
    function() {
      console.log('This is an array function one');
      return 'This is an return string from an array function one.';
    },

    function() {
      console.log('This is an array function two');
    }
  ],

  //Object of Functions.
  objectOfFunctions: {
    funcOne: function() {
      console.log('This is a first function of objectOfFunctions');
    },

    funcTwo: function() {
      console.log('This is a second function of objectOfFunctions');
    }
  }
};


// console.log(json.number);
// console.log(json.string);
// console.log(json.emptyArray);
// console.log(json.arrayOfNumbers);
// console.log(json.arrayOfStrings);
// console.log(json.arrayOfArrays);
// console.log(json['3DArray']);
// console.log(json.arrayOfObjects);
// console.log(json.arrayOfFunction);
// console.log(json.objectOfFunctions);
/*output of above code
 1
 this is string
 []
 [ 1, 2, 3, 4, 5 ]
 [ 'one', 'two', 'three', 'four' ]
 [ [ 1, 2, 3, 4, 5 ],
 [ 11, 12, 13, 14, 15 ],
 [ 21, 22, 23, 24, 25 ],
 [ 31, 32, 33, 34, 35 ] ]
 [ [ [ 1, 2, 3, 4, 5 ] ], [ [ 6, 7, 8, 9, 10 ] ] ]
 [ { userId: 1, username: 'hbarve1' },
 { userId: 2, username: 'yukta' },
 { userId: 3, username: 'mayash' } ]
 [ [Function], [Function] ]
 { funcOne: [Function], funcTwo: [Function] }
 */


//---------------------------------------------------------------------------


//One method of calling all values of an array.
var i = 0;
/*
  defining an object "arrayOfNumbers" which contain value of Object "JSON"-key"arrayOfNumbers"
  NOTE: it is only for convenience so we have not to access value again.
*/
var arrayOfNumbers = json.arrayOfNumbers;
// for(i = 0; i < arrayOfNumbers.length; i++) {
//    console.log(arrayOfNumbers[i]);
// }
//-----------------------------------------------------------------------------------
//Second method of calling all values of an array.
// function numberInArray(value, index) {
//    console.log(value, index);
// }

//[].forEach() is an in-build method.-- which work same as "for" loop.
//[].forEach() will call a function for every value in array.
// arrayOfNumbers.forEach(numberInArray);

// var arrayOfStrings = json.arrayOfStrings;
// /*Here I have defined new function inside an [].forEach() method.
// It will work same as for loop*/
// arrayOfStrings.forEach(function stringOfArray(str, index) {
//   console.log(index, str);
// });
//


//-----------------------------------------------------------------------------------------


/*Printing 2D-array*/
var arrayOfArrays = json.arrayOfArrays;
// var j = 0;
// var k = 0;
// for(j = 0; j < arrayOfArrays.length; j++) {
//  for(k = 0; k < arrayOfArrays[j].length; k++) {
//    console.log('arrayOfArrays[' + j + '][' + k + '] = ' + arrayOfArrays[j][k]);
//  }
// }

//[].map() and [].forEach() are same.

/*using nested map is same as printing 2D-array via "for" loop
given below*/
// arrayOfArrays.map(function (array, index1) {
//  console.log(index1, array);
//  array.map(function(value, index2) {
//      console.log('arrayOfArrays[' + index1 + '][' + index2 + '] = ' + value);
//  });
// });


//---------------------------------------------------------------------------------------------


// var arrayOfObjects = json.arrayOfObjects;
// arrayOfObjects.map(function (obj, index) {
//    console.log(index, obj, obj.userId, obj.username);
// });

/*output for above
 0 { userId: 1, username: 'hbarve1' } 1 'hbarve1'
 1 { userId: 2, username: 'yukta' } 2 'yukta'
 2 { userId: 3, username: 'mayash' } 3 'mayash'
 */


//-----------------------------------------------------------------------------------------------

//For calling a function which is inside a JSON
// json.func();
//
// /*other way to call function*/
// var temp = json.func();
// temp;



//----------------------------------------------------------------------------------------------


//Array of functions
var arrayOffunctions = json.arrayOfFunction;

//First method.
arrayOffunctions[0]();
arrayOffunctions[1]();

//Second method

/*it will also use return values*/
arrayOffunctions.map(function(func, index) {
   console.log(index, func());
});

//-----------------------------------------------------------------------------------------------


//calling objectoffunctions
json.objectOfFunctions.funcOne();
json.objectOfFunctions.funcTwo();







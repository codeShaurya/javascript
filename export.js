'use strict';
//how to export data from this file
export let first = 10;

function second() {
  return 300;
}

//ES5
// module.exports = {
//   first: first,
//   second: second
// };

//ES6
const INT = 1000;

export const third = () => {
  console.log('This is third exported function.');
};

export const fourth = () => {
  console.log('This is third exported function.');
};


export default INT;
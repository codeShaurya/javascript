/** 
 * We defined square with only one parameter. Yet when we call it with 
 * three, the language doesn’t complain. It ignores the extra arguments 
 * and computes the square of the first one.
 * @param {int} x :value to be passes 
 * @example  :output  = 16
 */

function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));


/**
 * avaScript is extremely broad-minded about the number of arguments you pass
 *  to a function. If you pass too many, the extra ones are ignored. If you pass
 *  too few, the missing parameters get assigned the value undefined.
 * @param {int} a :first number
 * @param {int} b :second number
 */
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5
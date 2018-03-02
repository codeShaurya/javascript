/**
 * There is only one value in JavaScript that is not equal to itself, and that is NaN (“not a number”).
 */

console.log(NaN == NaN);

/**
 * NaN is supposed to denote the result of a nonsensical computation, and as such, it isn’t equal to the result of any other nonsensical computations.
 */


console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true

console.log(null == undefined);
// → true
console.log(undefined == undefined);
// → true

console.log(null == 0);
/**
 * ->  false
 * That behavior is often useful. When you want to test whether a value has a real value instead of null or undefined, you can compare it to null with the == (or !=) operator.
 */

console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
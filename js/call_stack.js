function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
// console.log(chicken() + " came first.");
console.log("1" + chicken() + " came first.");
// → ??
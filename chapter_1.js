function myFunc() {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}
myFunc("a", "b", "c");

function myFunc(...args) {
  console.log(args[0]);
  console.log(args[1]);
  console.log(args[2]);
}
myFunc("a", "b", "c");

const factorial = function innerFact(n) {
  if (n === 0) {
    return 1;
  }
  return n * innerFact(n - 1);
};
console.log(factorial(3));

const fnA = () => {};
const fnB = (x) => {};
const fnC = x => {};
const fnD = (x, y) => {};
const mulA = x => { return x * x };
const mulB = x => x * x;

const array = [1, 2, 3];
const doubleArray = array.map(function(value) {
  return value * 2;
});

const array = [1, 2, 3];
const doubleArray = array.map(value => value * 2);

const object = {
  method() {
    return "this is method";
  }
};

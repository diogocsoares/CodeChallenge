let counter = 0;
function inception() {
   if (counter > 3) {
      return 'done';
   }
   counter++;
   // inception(); this will not return anything because only the last call will return, but other calls return undefined. to solve this must add return inception that will put the entire function on the call stack instead only the return value.
   return inception();
}
//console.log(inception());

// 1 - Identify the base case.
// 2 - Identify the recursive case.
// 3 - Get closer and closer and return when needed. Usually you have two returns. One for the base case and other for the recursive case at the end of the function.

function findFactorialRecursive(number) {
   if (number < 2) {
      return 2;
   }
   return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(5));
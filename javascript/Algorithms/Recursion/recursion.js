//Recursion is when you define something in terms of itself, simply, it's a function that refers to itself inside of the function.
function closureForRecursionFunction(count) {
   let counter = 0; //Incremented inside the recursi`on.
   let countUntil = count;
   inception();
   function inception() {
      //debugger // This add a debug in console.
      if (counter >= countUntil) {
         return 'done!';
      }
      counter++;
      // inception(); this will not return anything because only the last call will return, but other calls return undefined. to solve this must add return inception that will put the entire function on the call stack instead only the return value.
      console.log(counter);
      return inception();
   }
   return "Done";
}
//console.log(closureForRecursionFunction(10));
//console.log(inception());

// 1 - Identify the base case.
// 2 - Identify the recursive case.
// 3 - Get closer and closer and return when needed. Usually you have two returns. One for the base case and other for the recursive case at the end of the function.


function recursiveMultiply(num1, num2) {
   //   console.log(num1, num2 - 1);

   if (num1 === 0 || num2 === 0)
      return 0;

   //Base case when recursion ends
   if (num2 === 1)
      return num1;

   //recursive case
   //num2 - 1 lead to the base use case
   //return (num1 + num1 + num1 + num1 + num1...)
   return (num1 + recursiveMultiply(num1, num2 - 1));
}

console.log(recursiveMultiply(2, 8));
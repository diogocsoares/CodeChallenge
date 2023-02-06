let calculations = 0;
let calculationsMaster = 0;
function fibonacci(number) {
   calculations++;
   if (number < 2)
      return number;

   return fibonacci((number - 1)) + fibonacci(number - 2);
} //Time complexity O(2ˆn);

//console.log(fibonacci(30)); //2.269.806.339
// console.log(calculations);

function fibonacciMaster() {
   let cache = {};
   return function fib(number) {
      calculationsMaster++;
      if (number in cache) {
         return cache[number];
      } else {

         if (number < 2)
            return number;
         else {
            cache[number] = fib((number - 1)) + fib(number - 2);
            return cache[number];
         }
      }
   }
} //Time Complexity O(n)

const fasterFibonacci = fibonacciMaster();

console.log(fasterFibonacci(30)); //87
console.log(calculationsMaster);

function fibonacciInteractive(number) {
   let answer = [0, 1];
   for (let i = 2; i <= number; i++)
      answer.push(answer[i - 1] + answer[i - 2]);
   console.log(answer.length);
   return answer.pop();
}

console.log(fibonacciInteractive(800)); //2.269.806.339

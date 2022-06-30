

function closure(count) {
   let counter = 0;
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
console.log(closure(10));
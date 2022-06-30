function findingRecurringCharacter(array) {
   const visited = new Set();
   if (array.length < 2)
      return undefined;
   for (let i = 0; i < array.length; i++) {
      if (visited.has(array[i]))
         return array[i];
      else
         visited.add(array[i]);
   };
   return undefined;
}

function findingRecurringCharacter2(array) {
   const visited = {} //Space complexity O(n)
   if (array.length < 2)
      return undefined
   for (let i = 0; i < array.length; i++) {
      //      if (visited[array[i]] !== undefined) is the same
      if (visited[array[i]] === true)
         return array[i];
      else
         visited[array[i]] = true;
   };
   return undefined;
}

function findingRecurringCharacter3(array) {
   for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
         if (array[i] === array[j])
            return array[i];
      }
   }
   return undefined;
} //O(nˆ2) Time complexity //O(1) Space complexity


console.log(findingRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
console.log(findingRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]));
console.log(findingRecurringCharacter3([2, 5, 5, 2, 3, 5, 1, 2, 4])); //it will return 2 instead 5
/*  */
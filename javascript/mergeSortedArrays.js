function mergedSortedArrays(array1, array2) {
   const mergedArray = [];
   let array2Item = 0;
   if (array2.length === 0)
      return array1;
   if (array1.length === 0)
      return array2;
   for (let array1Item = 0; array1Item < array1.length; array1Item++) {
      if (array1[array1Item] === array2[array2Item]) {
         mergedArray.push(array1[array1Item], array2[array2Item])
         array2Item++;
      } else {
         if (array1[array1Item] < array2[array2Item] || array2[array2Item] === undefined) {
            mergedArray.push(array1[array1Item])
         } else {
            if (array2[array2Item] < array1[array1Item]) {
               mergedArray.push(array2[array2Item]);
               array2Item++;
               array1Item--;
            }
         }
      }
   }
   while (array2Item < array2.length) {
      mergedArray.push(array2[array2Item]);
      array2Item++
   }
   return mergedArray;
}

function mergedSortedArrays2(array1, array2) {
   if (array2.length === 0)
      return array1;
   if (array1.length === 0)
      return array2;
   const mergedArray = [];
   let array1Item = array1[0];
   let array2Item = array2[0];
   let i = 1;
   let j = 1;

   while (array1Item || array2Item) {
      if (!array2Item || array1Item < array2Item) {
         mergedArray.push(array1Item)
         array1Item = array1[i];
         i++;
      } else {
         mergedArray.push(array2Item)
         array2Item = array2[j];
         j++;
      }
   }
   return mergedArray;
}

console.log(mergedSortedArrays([0, 3, 4, 31, 33, 36, 38, 39], [4, 6, 30, 34, 35, 36]))
console.log(mergedSortedArrays2([0, 3, 4, 31, 33, 36, 38, 39], []))
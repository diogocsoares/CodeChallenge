var merge = function (intervals) {
   if (intervals.length === 1)
      return intervals;
   let sorted = intervals.sort((a, b) => a[0] - b[0]);
   let result = [[sorted[0][0], sorted[0][1]]];
   for (let i = 1; i < sorted.length; i++) {
      //Case 1 - A completely overlaps B
      if (result[result.length - 1][0] <= sorted[i][0] &&
         result[result.length - 1][1] >= sorted[i][1]) {
         continue;
      }

      //Case 2 - A overlap B
      if (result[result.length - 1][1] >= sorted[i][0]) {
         result[result.length - 1][1] = sorted[i][1];
         continue;
      }

      //Case 3 - Do not overlap
      result.push([sorted[i][0], sorted[i][1]]);
   }
   return result;
};

// console.log(merge([[2, 6], [15, 18], [1, 3], [8, 10]]));
// console.log(merge([[2, 6], [15, 18], [1, 3], [6, 10]]));
// console.log(merge([[1, 4], [2, 3]]));
// console.log(merge([[1, 4], [0, 2], [3, 5]]));
console.log(merge([[2, 3], [5, 5], [2, 2], [3, 4], [3, 4]]));

//console.log(merge([[1, 4], [4, 5]]));
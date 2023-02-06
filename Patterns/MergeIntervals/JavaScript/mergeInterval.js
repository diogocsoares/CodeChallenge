var merge = function (intervals) {
   if (intervals.length === 1)
      return intervals;
   intervals.sort((a, b) => a[0] - b[0]);
   let result = [[intervals[0][0], intervals[0][1]]];
   for (let i = 1; i < intervals.length; i++) {
      //Case 1 - A completely overlaps B
      if (result[result.length - 1][0] <= intervals[i][0] &&
         result[result.length - 1][1] >= intervals[i][1]) {
         continue;
      }

      //Case 2 - A overlap B
      if (result[result.length - 1][1] >= intervals[i][0]) {
         result[result.length - 1][1] = intervals[i][1];
         continue;
      }

      //Case 3 - Do not overlap
      result.push([intervals[i][0], intervals[i][1]]);
   }
   return result;
};

console.log(merge([[2, 6], [15, 18], [1, 3], [8, 10]]));
console.log(merge([[2, 6], [15, 18], [1, 3], [6, 10]]));
console.log(merge([[1, 4], [2, 3]]));
console.log(merge([[1, 4], [0, 2], [3, 5]]));
console.log(merge([[2, 3], [5, 5], [2, 2], [3, 4], [3, 4]]));
console.log(merge([[1, 4], [4, 5]]));


var merge2 = function (intervals) {
   intervals.sort((a, b) => a[0] - b[0])
   const res = [intervals[0]]
   let prev;
   for (let curr of intervals) {
      prev = res[res.length - 1]
      if (prev[1] >= curr[0]) {
         prev[1] = Math.max(curr[1], prev[1])
      } else {
         res.push(curr)
      }
   }
   return res
};

// console.log(merge2([[2, 6], [15, 18], [1, 3], [8, 10]]));
// console.log(merge2([[2, 6], [15, 18], [1, 3], [6, 10]]));
// console.log(merge2([[1, 4], [2, 3]]));
// console.log(merge2([[1, 4], [0, 2], [3, 5]]));
// console.log(merge2([[2, 3], [5, 5], [2, 2], [3, 4], [3, 4]]));

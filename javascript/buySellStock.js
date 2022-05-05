/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
   let profit = 0
   let day = 0;
   let wallet = prices[0];

   while (day < prices.length) {
      if (wallet > prices[day])
         wallet = prices[day];
      else {
         if (profit < prices[day] - wallet) {
            profit = prices[day] - wallet;
         }
      };
      ++day;
   };
   return profit;
};


console.log(maxProfit([7, 1, 5, 3, 6, 7]));
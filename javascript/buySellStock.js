/**2
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


//console.log(maxProfit([7, 1, 5, 3, 6, 4]));


var maxProfit2 = function (prices) {
   let profit = 0
   let day = 0;
   let wallet = prices[0];

   while (day < prices.length) {
      if (wallet > prices[day])
         wallet = prices[day];
      else {
         console.log(prices[day] - wallet);
         profit = profit + prices[day] - wallet;
         wallet = prices[day];
      };
      ++day;
   };
   return profit;
};

//console.log(maxProfit2([7, 1, 5, 3, 7, 8]));

var maxProfit3 = function (prices) {
   let profit1 = 0
   let profit2 = 0
   let profitAux = 0;
   let day = 0;
   let wallet = prices[0];

   while (day < prices.length) {
      if (wallet >= prices[day] || wallet + profit1 > prices[day]) {
         wallet = prices[day];
         if (profit1 > profit2) {
            profitAux = profit2;
            profit2 = profit1;
            profit1 = profitAux;
         }
      } else {
         if (profit1 < prices[day] - wallet) {
            profit1 = prices[day] - wallet;
         }
      }
      ++day;
   }
   return profit1 + profit2;
};

//console.log(maxProfit3([1, 2, 3, 4, 5]));
//console.log(maxProfit3([3, 3, 5, 0, 0, 3, 1, 4]));
//console.log(maxProfit3([1, 4, 2]));
//console.log(maxProfit3([6, 1, 3, 2, 4, 7]));
//console.log(maxProfit3([1, 2, 4, 2, 5, 7, 2, 4, 9, 0]));


var maxProfit4 = function (prices) {
   let topBDB = 1;
   let secondBDB = 1;
   let wallet = prices[0];
   let profit = 0;
   let day = 1;
   let dayEnd = prices.length;

   while (day < dayEnd) {
      if (prices[day] > prices[topBDB])
         topBDB = day;
      ++day;
   }
   day = 1;
   
   while (day < prices.length) {
      if (prices[day] > prices[secondBDB] && day != topBDB)
         if (day+1 === topBDB)
            day = prices.length;
         else
            secondBDB = day
      ++day;
   }
   day = 0;
   while (day < prices.length) {
      if (wallet > prices[day]) {
         wallet = prices[day];
      }
      if (day === topBDB || day === secondBDB) {
         profit = profit + prices[day] - wallet;
         wallet = prices[day];
      }
      ++day;
   }
   return [prices[topBDB], prices[secondBDB], topBDB, secondBDB, profit];
}

// console.log(maxProfit3([1, 2, 3, 4, 5]));
// console.log(maxProfit3([3, 3, 5, 0, 0, 3, 1, 4]));
// console.log(maxProfit3([1, 4, 2]));
// console.log(maxProfit3([6, 1, 3, 2, 4, 7]));
// console.log(maxProfit3([1, 2, 4, 2, 5, 7, 2, 4, 9, 0]));

// console.log('V4');

// console.log(maxProfit4([1, 2, 3, 4, 5]));
// console.log(maxProfit4([3, 3, 5, 0, 0, 3, 1, 4]));
// console.log(maxProfit4([1, 4, 2]));
// console.log(maxProfit4([6, 1, 3, 2, 4, 7]));
// console.log(maxProfit4([1, 2, 4, 2, 5, 7, 2, 4, 9, 0]));
// console.log(maxProfit4([3, 3, 5, 0, 0, 3, 1, 4]));
console.log(maxProfit3([2,1,2,0,1]));


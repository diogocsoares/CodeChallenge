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
//Work
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

//console.log(maxProfit2([14, 9, 10, 12, 4, 8, 1, 16]));
//fail
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

//fail
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
   while (day < dayEnd) {
      if (prices[day] > prices[secondBDB] && day != topBDB && day - 1 != topBDB)
         if (day + 1 === topBDB)
            day = prices.length;
         else
            secondBDB = day
      if (day === prices.length - 1 && prices[day] === prices[secondBDB])
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
   return [prices[topBDB], prices[secondBDB], profit];
}

//fail
var maxProfit5 = function (prices) {
   let day = 1;
   let wallet = 0;
   let BDS = 0;

   while (day < prices.length) {
      if (prices[wallet] < prices[day] && prices[day] > prices[BDS]) {
         BDS = day
         if (prices.length > 3)
            day = prices.length;
      } else {
         if (prices[wallet] > prices[day]) {
            wallet = day;
            if (BDS <= wallet)
               BDS = wallet
         }
      }
      ++day;
   }

   console.log(prices);
   console.log(`wallet: ${prices[wallet]}`);
   console.log(`profit:${prices[BDS] - prices[wallet]}`);
   console.log(``);

   if (prices.length <= 3)
      return prices[BDS] - prices[wallet];
   else
      return maxProfit5(prices.slice(wallet, BDS + 1)), maxProfit5(prices.slice(BDS));
}


//console.log(maxProfit5([1, 2, 3, 4, 5]));
//console.log(maxProfit5([3, 3, 5, 0, 0, 3, 1, 4]));
// console.log(maxProfit5([1, 4, 2]));
//console.log(maxProfit5([6, 1, 3, 2, 4, 7]));
// console.log(maxProfit5([1, 2, 4, 2, 5, 7, 2, 4, 9, 0]));
// console.log(maxProfit5([3, 3, 5, 0, 0, 3, 1, 4]));
// console.log(maxProfit5([2, 1, 2, 0, 1]));
// console.log(maxProfit5([3, 2, 6, 5, 0, 3]));
//console.log(maxProfit5([14, 9, 10, 12, 4, 8, 1, 16]));
//console.log(maxProfit5([14, 9, 10, 12, 4, 8, 1, 16]));

//work
var maxProfit7 = function (prices) {
   let buy1 = Infinity;
   let sell1 = 0;
   let buy2 = Infinity;
   let sell2 = 0;
   for (const day of prices) {
      buy1 = Math.min(buy1, day);
      sell1 = Math.max(sell1, day - buy1);
      buy2 = Math.min(buy2, day - sell1);
      sell2 = Math.max(sell2, day - buy2);
   }
   return sell2;
};

console.log(maxProfit7([14, 9, 10, 12, 4, 8, 1, 16]));
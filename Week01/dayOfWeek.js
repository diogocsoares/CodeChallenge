
const mostFrequentDays = (year) => {
   var date = new Date(year, 0, 1, 0, 0, 0);
   let topCount = 0;
   let result = [];
   let dayOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
   ];

   let countDays = new Array(7).fill(0);
   while (date.getFullYear() < year + 1) {
      countDays[date.getDay()]++;
      topCount = topCount < countDays[date.getDay()] ? countDays[date.getDay()] : topCount;
      date.setHours(24);
   }

   for (let i = 0; i < countDays.length; i++) {
      if (countDays[i] === topCount)
         result.push(dayOfWeek[i]);
   }

   if (result[0] === 'Sunday')
      return result.reverse();
   else
      return result;
}; //o(n)


function mostFrequentDaysOfYear(year = new Date().getFullYear()) {
   let d = new Date(year, 0);
   let mostFrequent = [d.toLocaleString('en', { weekday: 'long' })];
   let isLeap = new Date(year, 1, 29).getDate() == 29;
   if (isLeap) {
      d.setDate(d.getDate() + 1);
      mostFrequent.push(d.toLocaleString('en', { weekday: 'long' }))
   }
   if (mostFrequent[0] === 'Sunday')
      return mostFrequent.reverse();
   else
      return mostFrequent;
}//o(1)


[2018, 2020, 2022, 212, 1984].forEach(year => console.log(
   `${year}: ${mostFrequentDays(year)}`
));

[2018, 2020, 2022, 212, 1984].forEach(year => console.log(
   `${year}: ${mostFrequentDaysOfYear(year)}`
));
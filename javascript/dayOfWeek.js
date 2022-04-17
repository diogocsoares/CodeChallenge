
const mostFrequentDays = (year) => {
   var date = Date.parse(year.toString() + "-01-01");
   let sameYear = true;

   let dayOfWeek = [
      [0, "Sunday"],
      [0, "Monday"],
      [0, "Tuesday"],
      [0, "Wednesday"],
      [0, "Thursday"],
      [0, "Friday"],
      [0, "Saturday"]
   ];

   while (sameYear) {
      new Date(date);
      date = date + 86400000;
      let date2 = new Date(date);
      sameYear = (date2.getFullYear() === year)
      if (sameYear) {
         switch (date2.getDay()) {
            case 0:
               dayOfWeek[0][0] = dayOfWeek[0][0];
               break;
            case 1:
               dayOfWeek[1][0] = ++dayOfWeek[1][0];
               break;
            case 2:
               dayOfWeek[2][0] = ++dayOfWeek[2][0];
               break;
            case 3:
               dayOfWeek[3][0] = ++dayOfWeek[3][0];
               break;
            case 4:
               dayOfWeek[4][0] = ++dayOfWeek[4][0];
               break;
            case 5:
               dayOfWeek[5][0] = ++dayOfWeek[5][0];
               break;
            case 6:
               dayOfWeek[6][0] = ++dayOfWeek[6][0];
               break;
         }
      }
   }

   let testTopDay = dayOfWeek.sort();
   //   while (testTopDay[testTopDay.length - 1][0] > testTopDay[0][0]) {
   //      testTopDay.shift();
   //   }
   let topDay = [];
   testTopDay.forEach(elements => {
      topDay.push(elements[1]);
   })

   return JSON.stringify(topDay.sort());
};

console.log(mostFrequentDays(2185));
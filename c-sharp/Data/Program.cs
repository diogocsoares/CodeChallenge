using System;
using System.Globalization;

namespace Data
{
    class Program
    {
        static void Main(string[] args)
        {
            
            var myData = new DateTime(); //This is a struct value type, default value is 1/1/0001 12:00:00 AM
            Console.WriteLine(myData); //Do not exists null date.

            myData = new DateTime(2020,10,12, 13, 23, 14);
            Console.WriteLine(myData);
            Console.WriteLine(myData.Year);
            Console.WriteLine(myData.Month);
            Console.WriteLine(myData.Day);
            Console.WriteLine(myData.Hour);
            Console.WriteLine(myData.Minute);
            Console.WriteLine(myData.Second);

            myData = DateTime.Now;
            Console.WriteLine(myData);

            //Formatting
            Console.WriteLine(String.Format("{0:yyyy}", myData));
            Console.WriteLine(String.Format("{0:y}", myData));
            Console.WriteLine(String.Format("{0:yy}", myData));
            Console.WriteLine(String.Format("{0:M}", myData));
            Console.WriteLine(String.Format("{0:yyyy-MM-dd}", myData));
            Console.WriteLine(String.Format("{0:yyyy/MM/dd}", myData));
            Console.WriteLine(String.Format("{0:yyyy * MM * dd hh:mm:ss ff z}", myData));
            Console.WriteLine(String.Format("{0:t}", myData));
            Console.WriteLine(String.Format("{0:d}", myData));
            Console.WriteLine(String.Format("{0:T}", myData));
            Console.WriteLine(String.Format("{0:D}", myData));
            Console.WriteLine(String.Format("{0:G}", myData));
            Console.WriteLine(String.Format("{0:F}", myData));
            Console.WriteLine(String.Format("{0:r}", myData)); // Default
            Console.WriteLine(String.Format("{0:s}", myData)); // used on Json, mongoDB
            Console.WriteLine(String.Format("{0:u}", myData)); // universal

            //Adding days.
            var day = myData.Day + 1; //Avoid this because don't change month automatically.
            
            Console.WriteLine(myData.AddDays(23)); //Don't modify the original date only calc and return.
            Console.WriteLine(myData.AddMonths(1)); 
            Console.WriteLine(myData.AddYears(1));

            //Date comparing.
            DateTime? dataNull = null; //transforming date in nullable type.
            Console.WriteLine(dataNull);

            if (myData == DateTime.Now); //Will never be equal because seconds.

            Console.WriteLine((myData < DateTime.Now.Date));
            //Culture info.
            //var pt = new System.Globalization.CultureInfo("pt-BR"); 
            var pt = new CultureInfo("pt-PT"); //using System.Globalization;
            var br = new CultureInfo("pt-BR");
            var en = new CultureInfo("en-US");
            var de = new CultureInfo("de-DE");
            var currentCulture = CultureInfo.CurrentCulture;

            Console.WriteLine(DateTime.Now.ToString("d")); //same to String.Format;
            Console.WriteLine(DateTime.Now.ToString("D"));
            Console.WriteLine(DateTime.Now.ToString("D", pt));
            Console.WriteLine(DateTime.Now.ToString("D", de));
            Console.WriteLine(DateTime.Now.ToString("D", en));
            Console.WriteLine(DateTime.Now.ToString("D", br));
            Console.WriteLine(DateTime.Now.ToString("D", currentCulture));

            //Timezone
            //In a global application with multiple servers. Obtain the base hour.
            var globalDateTime = DateTime.UtcNow;
            Console.WriteLine(globalDateTime);
            Console.WriteLine(globalDateTime.ToLocalTime()); //Convert to UTC to LocalTime.

            var timezoneNewZealand = TimeZoneInfo.FindSystemTimeZoneById("New Zealand Standard Time");
            Console.WriteLine(timezoneNewZealand);
            var horaNewZealand = TimeZoneInfo.ConvertTimeFromUtc(globalDateTime, timezoneNewZealand);
            Console.WriteLine(horaNewZealand);

            var timeZones = TimeZoneInfo.GetSystemTimeZones();
            foreach (var timeZone in timeZones) {
                Console.WriteLine(timeZone.Id);
                Console.WriteLine(timeZone);
                Console.WriteLine(TimeZoneInfo.ConvertTimeFromUtc(globalDateTime, timeZone));
                Console.WriteLine("---------");
            }

            //Time Spam - Return time until nano seconds.
            var timeSpanNanoSeconds = new TimeSpan(1);
            Console.WriteLine(timeSpanNanoSeconds);

            var timeSpanHorMinuteSecond = new TimeSpan(5, 12, 8);
            Console.WriteLine(timeSpanHorMinuteSecond);

            var timeSpanDayHorMinuteSecond = new TimeSpan(3, 5, 50, 10);
            Console.WriteLine(timeSpanDayHorMinuteSecond);

            var timeSpanDayHourSecondMilSecond = new TimeSpan (15, 12, 55, 8, 100);
            Console.WriteLine(timeSpanDayHourSecondMilSecond);

            var timeSpanHorMinuteSecondMilSecond = new TimeSpan(0, 12, 55, 8, 102);
            Console.WriteLine(timeSpanHorMinuteSecondMilSecond);

            Console.WriteLine(timeSpanHorMinuteSecond - timeSpanDayHorMinuteSecond);
            Console.WriteLine(timeSpanDayHorMinuteSecond.Days);
            Console.WriteLine(timeSpanDayHorMinuteSecond.Add(new TimeSpan(12, 0, 0)));

            //How many days a month have.
            Console.WriteLine(DateTime.DaysInMonth(2020, 2)); //it is una enumerator not an array, starts in 1.

            //Test if is a weekend day or not.
            Console.WriteLine(IsWeekDay(DateTime.Now.DayOfWeek));
            //Test if is a day light saving time (horário de verão);
            Console.WriteLine(DateTime.Now.IsDaylightSavingTime());

        }

        static bool IsWeekDay(DayOfWeek today) {
            return today == DayOfWeek.Saturday || today == DayOfWeek.Sunday;
        }

    }
}

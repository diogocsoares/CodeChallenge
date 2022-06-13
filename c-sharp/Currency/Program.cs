using System;
using System.Globalization;

namespace Currency
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Clear();
            //Decimal is a common type used for currency because of precision, but use more memory space, is bigger then double and float.

            decimal value = 10536.25m;
            Console.WriteLine(value);
            //using System.Globalization;
            Console.WriteLine(value.ToString(CultureInfo.CreateSpecificCulture("en-US")));
            Console.WriteLine(value.ToString(CultureInfo.CreateSpecificCulture("pt-BR")));
            Console.WriteLine(value.ToString("G", CultureInfo.CreateSpecificCulture("pt-BR")));
            Console.WriteLine(value.ToString("C", CultureInfo.CreateSpecificCulture("pt-BR")));
            Console.WriteLine(value.ToString("C", CultureInfo.CreateSpecificCulture("fr-FR")));
            Console.WriteLine(value.ToString("C", CultureInfo.CreateSpecificCulture("en-US")));
            Console.WriteLine(value.ToString("E04", CultureInfo.CreateSpecificCulture("pt-BR")));
            Console.WriteLine(value.ToString("F", CultureInfo.CreateSpecificCulture("pt-BR")));
            Console.WriteLine(value.ToString("N", CultureInfo.CreateSpecificCulture("pt-BR")));
            Console.WriteLine(value.ToString("P", CultureInfo.CreateSpecificCulture("pt-BR")));

            //Conversion and round upper down.

            Console.WriteLine(Math.Round(value)); //Cut decimal
            Console.WriteLine(Math.Ceiling(value));// Round upper
            Console.WriteLine(Math.Floor(value)); //Round down.
        }
    }
}

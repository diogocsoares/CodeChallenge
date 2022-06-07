using System;
using System.Text;

namespace Strings
{
    class Program
    {
        static void Main(string[] args)
        {
            // Comparing Strings.
            var text = "Testing";
            Console.WriteLine(text.CompareTo("Testing"));
            Console.WriteLine(text.CompareTo("testing"));
            Console.WriteLine(text.CompareTo("testing"));
            Console.WriteLine(text.Contains("testing", StringComparison.OrdinalIgnoreCase));
            Console.WriteLine(text.Contains("Testing"));

            // Starts Ends With 
            var textStartEndsWith = "This text starts with this and ends with end";
            Console.WriteLine($"Start With This: {textStartEndsWith.StartsWith("This")}");
            Console.WriteLine($"Start With this: {textStartEndsWith.StartsWith("this")}");
            Console.WriteLine($"Ends With end: {textStartEndsWith.EndsWith("end")}");
            
            //Equals. 
            Console.WriteLine(text.Equals("testing"));
            Console.WriteLine(text.Equals("testing", StringComparison.OrdinalIgnoreCase));

            var testNumber = 33;
            var testNumber2 = 33;
            Console.WriteLine(testNumber.Equals(34)); 
            Console.WriteLine(testNumber.Equals(testNumber2));

            //Index
            string indexTextIsAList = "This text is an list or array with same methods of array";
            Console.WriteLine($"Tis string have length: {indexTextIsAList.Length}");
            Console.WriteLine($"IndexOf for list: {indexTextIsAList.IndexOf("list")}");
            Console.WriteLine($"For the last letter s: {indexTextIsAList.LastIndexOf("s")}");

            string toLower = indexTextIsAList.ToLower();
            var toUpper = indexTextIsAList.ToUpper();
            Console.WriteLine(toLower);
            Console.WriteLine(toUpper);
            Console.WriteLine(toLower.Insert(4, text.Insert(0, " ")));
            Console.WriteLine(toLower.Remove(4, 5));

            //Replace
            Console.WriteLine(indexTextIsAList.Replace('s', 'X'));

            //Split
            var eachWord = indexTextIsAList.Split(" ");
            Console.WriteLine(eachWord[0]);
            Console.WriteLine(eachWord[1]);
            Console.WriteLine(eachWord[2]);
            Console.WriteLine(eachWord[3]);


            //Substring
            var subString = indexTextIsAList.Substring(5, 3);
            Console.WriteLine(subString);

            //String Builder

            string stringConcat = "This is a value object";
            stringConcat += " creating other temp variable to concat";
            Console.WriteLine(stringConcat);

            var usingStringBuilder = new StringBuilder("Let we construct an other string"); //Add using System.Text
            usingStringBuilder.Append(" using builder");
            usingStringBuilder.Append(" this way don't create a new temp variable to hold");
            usingStringBuilder.Append(" the text, good for bid data and space complexity");
            
            Console.WriteLine(usingStringBuilder.ToString()); //Work without ToString.
        }
    }
}

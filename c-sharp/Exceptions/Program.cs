using System;

namespace Exceptions
{
    class Program
    {
        static void Main(string[] args)
        {  
            Console.Clear();
            var myArray = new int[8];
            //System.IndexOutOfRangeException
            try {
                for (var index = 0; index < 8; index++) {
                    myArray[index] = index;
                    Console.WriteLine(myArray[index]);
                }
                Register(""); //Can't raise this exception if one happens in the for loop. 
            } //Cath from more specific to more generic;
            catch(IndexOutOfRangeException varException) {
              Console.WriteLine($"We have only {myArray.Length} positions, then we can't count until 10");  
            } //Specific exception
            catch(ArgumentNullException) {
                Console.WriteLine($"Can't register with an null text");
            }
            catch(MyException varException) {
                Console.WriteLine($"My Exception happens at: {varException.WhenHappens.ToString()}");
            }
            catch (Exception varException) { //Only Catch {} will ignore details about Exception //Generic exception;
                Console.WriteLine($"Ops something wrong happens: {varException.Message} and {varException.InnerException}");
            } finally { //will ever be executed
                Console.WriteLine("We finally end despite may exceptions");
            }
        }

        private static void Register(string text) {
            if (string.IsNullOrEmpty(text)) {
                //throw new Exception("The text can't be null or empty"); //Generic type.
                //throw new ArgumentNullException("The text cant't be null or empty");
                throw new MyException(DateTime.Now);
            }
        }

        public class MyException : Exception {
            public MyException(DateTime date) {
                WhenHappens = date;
            }
            public DateTime WhenHappens { get; set; }
        }

    }
}

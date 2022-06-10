using System;

namespace Variables
{
    class Program
    {
        static void Main(string[] args)
        {
            //C# is a language strongly typed and managed.
            // Type placed before. 
            int age; //Correctly start with zero.
            int ageInitialized = 25;
            var ageInitialized2 = 25; //Value define the variable type. Save a lot of space.
            //var age; Wrong way type was't defined.

            var text = "Testing";
            Console.WriteLine(text);

            //Constant
            const int MINIMAL_AGE;
            const int MINIMAL_AGE_INIT = 25;
            //const var MINIMAL_AGE_INIT = 25 //Wrong
            //const var MINIMAL_ATE; //Wrong

            //built-in types

            //byte(8-bits) 0 until 255
            //sbyte(8-bit) -128 until 127 (Signed byte)

            byte myByte = 127;

            //Integer "u" represent unsigned type.
            //short/ushort (16-bit) -32768 to 32767 / u 0 to 6535
            //int/uint (32-bit)
            //long/ulong (64-bit)

            uint uageInt = 25;
            int ageInt = -25;
            
            //float (F notation) don't have U for unsigned, (32-bit)
            //double (64-bit)
            //decimal (M Notation) (128-bit)

            var salary = 2.500 //will be double;
            //float salary = 2.500 //can't be automatically defined.
            float salary2 = 2.500f // F can be used to specified            
            //complex types.
            
            //boolean 
            // bool (8-bit) true or false

            bool userFound = true;
            var userNotFound = false;

            //Object can be anything accept any value type. Don't have intellisense.
            object ageObj = 25; //will be an object type;
            object name = "Diogo"; //Will be an object type;

            //Nullable types.
            //Can be compared with null, don't have an default value.
            
            int? ageNull = null; //Force to be null
            //int ageNull = null; //wrong don't can be null without ?

            //Alias: 

            int ageAlias = 25; //Alias
            Int32 ageInt32 = 25; //Original type.

            string nameStringAlias = "Diogo" //Alias.
            String nameString = "Diogo" //Alias.
            System.String name = "Diogo" //Original type.


            //Default Values
            /*
            int => 0;
            float => 0;
            decimal => 0;
            bool => false;
            char => '\0'
            String => ""
            */

            //Implicit Converting (or casting)
            float val = 25.8f;
            int other = 25;
            val = other; //Implicit convertion because a float can fit a int number but.
            other = val; //Impossible because an float can't fit on a int number.

            //Explicit conversion happens when the types are not compatibles

            int valInt = 100;
            uint valIntWithoutSignal = (uint)valInt; //it forces a int value with signal to be un signal.

            //Parse
            int valInteger = int.Parse("180") //try to convert a string to int. If it is not possible will raise an error.

            //Convert
            int valIntegerConvert = Convert.ToInt32("100") //Is an object (class) convert any type to other. Try to convert if is not possible will raise an error.

            //Examples

            int exValInt = 100;
            float exDollar = 25.5f

            exValInt = (int)exDollar; //Will ignore float
            //exValInt = exValInt.Parse(exDollar.ToString()); //don't work
            exValInt = Convert.ToInt32(exDollar); //will round.

        }
    }
}

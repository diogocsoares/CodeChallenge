using System;

namespace Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            var myArray = new int[10]; //must have an length.
            int[] myArray2 = new int[3] {1, 3, 8}; // Initializing each position.
            myArray[0] = 10; 
            var arrayPosition = myArray[0];
            Console.WriteLine(arrayPosition);
            Console.WriteLine(myArray2[2]);

            var myArrayStruct = new ObjStructArray[2] {new ObjStructArray(), new ObjStructArray() };
            myArrayStruct[0].Id = 15;
            myArrayStruct[1].Id = 22;
            Console.WriteLine(myArrayStruct[0].Id);

            for (int i = 0; i < myArray2.Length; i++)
                Console.WriteLine(myArray2[i]);

            foreach (var item in myArray2)
                Console.WriteLine(item);

            foreach (var item in myArrayStruct)
                Console.WriteLine(item.Id);        
        }

        struct ObjStructArray
        {
            public int Id;
        }

    }
}

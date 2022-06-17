using System;
namespace ObjectOriented {
   public class DataContext<T, A>  where A : Animals { //this T represent any Type. Inside the class it will be a type.
     
      public void Save(T myEntityAnyType) {
         Console.WriteLine($"An {myEntityAnyType.GetType()} was saved");
      }

      public void Save(A myEntityAnyType) {
         Console.WriteLine($"An Animal was saved");
      }
   }
}
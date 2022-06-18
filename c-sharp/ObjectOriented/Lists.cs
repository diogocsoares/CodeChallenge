using System;
using System.Collections.Generic;
using System.Linq;
namespace ObjectOriented {
   public class LabLists {
         
      public void TestList() {
         var dogs = new List<Mammals>(); //Have more methods;
         ICollection<HumanBean> persons = new List<HumanBean>(); //More simple type of list, most used.
         IEnumerable<Animals> animals = new List<Animals>(); //As we can instantiate an interface we must to define as a type. As List implements IEnumerable only this implementation will be connected to the new object animals.IEnumerable will create basically an read only list.

         dogs.Add(new Mammals("Dog", new DateTime(2020, 01, 24)));
         dogs.Add(new Mammals("Bog", new DateTime(2019, 01, 24)));
         dogs.Add(new Mammals("Dog", new DateTime(2018, 01, 24)));
         dogs.Add(new Mammals("Dog", new DateTime(2017, 01, 24)));
         dogs.Add(new Mammals("Dog", new DateTime(2016, 01, 24)));

         foreach (var dog in dogs) {
            Console.WriteLine($"I am a {dog.Specie} and I have {dog.Age.ToString()} years old");
            dog.Breath();
            Console.WriteLine($"AM I Alive? {dog.AMIAlive}");
            dog.suckle();
            Console.WriteLine("---------------------------------------------------------\n");
         }

         var oldDogs = dogs.Where(x => x.Age > 4);
         foreach (var dog in oldDogs) {
            Console.WriteLine($"I am a {dog.Specie} and I have {dog.Age.ToString()} years old"); //If we omit ToString() it will be called implicit.
         }
         Console.WriteLine("---------------------------------------------------------\n");
      }
   }
}
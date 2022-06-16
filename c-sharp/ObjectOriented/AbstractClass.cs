using System;

namespace ObjectOriented {
    //When a class modeling an abstract concept that is the base element for other real tangible elements that class can be defined as an abstract class, it will block direct instantiation. Only child classes can be instantiated.

    public interface ISeres {
        public DateTime BirthDay { get; set; }
        public DateTime Deceased { get; set; }
        public int Age { get; }
        public bool AMIAlive { get; }
        public void Breath ();
        public void Death(DateTime deceaseDate);
    }
    
    public interface IAnimals {
        public int NumberOfPaws { get; set; }
        public string Specie { get; set; }
        //public string OnlyToTryValidImplementation {get; set;} // It wil throw the exception 'Animals' does not implement interface member 'IAnimals.OnlyToTryValidImplementation'
    }


    public abstract class Seres {
        public DateTime BirthDay { get; set; }
        public DateTime Deceased { get; private set; }
        public int Age { get => _CalcAge();}
        public bool AMIAlive { get => _AMIAlive(); }
    
        public Seres (DateTime birthDay) {
            BirthDay = birthDay;
        }
        
        public void Breath () {
            Console.WriteLine("I can Breath");
        }
        
        private int _CalcAge () {
            if (Deceased == DateTime.MinValue) 
                return (DateTime.Now - BirthDay).Days / 365;
            else
                return (Deceased - BirthDay).Days / 365;
        }

        public void Death(DateTime deceaseDate) {
            Deceased = deceaseDate; 
        }

        private bool _AMIAlive() {
            return (Deceased == DateTime.MinValue);
        }
    }

     public class HumanBean : Seres{
         public HumanBean(DateTime birthDay) :base(birthDay) {}
         public void Talk() {
             Console.WriteLine("I can talk!");
         }
    }

    public class Animals : Seres, IAnimals {
        public int NumberOfPaws { get; set; }
        public string Specie { get; set; }
        public Animals(DateTime birthDay) :base(birthDay) {

        }
    }

    public class Mammals : Animals {
        public Mammals(string specie, DateTime birthDay ) :base(birthDay) {
            Specie = specie;
        }

        public void suckle () {
            Console.WriteLine("Im sucking milk");
        }
    } 
}
using System;
namespace ObjectOriented
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Clear();
            Console.WriteLine("\n===== START =====\n");
            Console.WriteLine("===== CREATING A SIMPLE CLASS =====");
            var simpleClass = new SimpleClass(); //As a reference type it will create an instance object in the Heap memory and point to the variable customerSimple in the stack memory.
            simpleClass.FirstName = "Diogo";
            simpleClass.LastName  = "Soares";
            simpleClass.Age = 12;

            Console.WriteLine($"My name is: {simpleClass.FirstName} {simpleClass.LastName} and I have {simpleClass.Age.ToString()} years old");
            simpleClass.AnMethod();
            //simpleClass.AnInternalMethod(); Don't wort because is private;
            Console.WriteLine("---------------------------------------------------------\n");

            Console.WriteLine("===== INHERITED =====");
            var childClass = new ChildClassOfSimpleClass();
            childClass.FirstName = "Carla";
            childClass.LastName = "Soares";
            childClass.Age = 10;
            childClass.PropertyOfChild = "Its only a child have";

            Console.WriteLine($"My name is: {childClass.FirstName} {childClass.LastName} and I have an special property {childClass.PropertyOfChild}");
            childClass.AnMethod(); //Have the same object.
            Console.WriteLine("");
            var childClassCalledBaseConstructor = new ChildClassOfSimpleClass(true);
            Console.WriteLine("---------------------------------------------------------\n");

            Console.WriteLine("===== POLYMORPHISM =====");
            var polymorphicClass = new PolymorphicChildClass();
            simpleClass.MethodCanBeOverrideOnChild();
            polymorphicClass.MethodCanBeOverrideOnChild();
            polymorphicClass.MethodCallParentClass();
            Console.WriteLine("---------------------------------------------------------\n");

            Console.WriteLine("===== USING CLASS AS COMPLEX TYPES =====");
            var typeComplex = new UsingComplexTypesCreated(1580);
            var typeComplexParameterLess = new UsingComplexTypesCreated();
            typeComplex.MyTypeComplex.FirstName = "First name Complex";
            Console.WriteLine(typeComplex.MyTypeComplex.FirstName);
            Console.WriteLine("---------------------------------------------------------\n");

            Console.WriteLine("===== CREATING PROPERTIES =====");
            var labProperties = new BetterWayToCreateProperties();
            labProperties.MyPropertyFull = "Set an value";
            string reading = labProperties.MyPropertyFull;
            Console.WriteLine("---------------------------------------------------------\n");

            Console.WriteLine("===== USING METHODS =====");
            var allMethods = new AllFormsOfMethods();
            allMethods.DifferentSignatures("With one parameter");
            allMethods.DifferentSignatures("With two parameters", 182);
            allMethods.DifferentSignatures("With two parameters", true);
            allMethods.DifferentSignatures("With two parameters", false);
            Console.WriteLine("---------------------------------------------------------\n");

            Console.WriteLine("===== DESTROY OBJECTS =====");
            var createDestroyObject = new HowGarbageCollectorWorks();
            createDestroyObject.Dispose();
            //The approach above depend of the use of method Dispose, the object only will be destroyed throw a calling of method dispose.
            //To force an destruction can be use the approach bellow.
            using (var forceCreateDestroyObject = new HowGarbageCollectorWorks()){
                Console.WriteLine(" --- > Do it after destroy the object");
            }
            Console.WriteLine("---------------------------------------------------------\n");

            Console.WriteLine("===== STATIC CLASSES =====");
            //var myStaticClass = new ClassNoInstanceAble(); // It is not valid because is a static class.
            ClassNoInstanceAble.DoYourJOb();
            ClassNoInstanceAble.MyStaticProperty = "Un static class can have properties";
            Console.WriteLine(ClassNoInstanceAble.MyStaticProperty);
            Console.WriteLine("---------------------------------------------------------\n");

            Console.WriteLine("===== PARTIAL CLASSES =====");
            var partialClassUnified = new ClassDividedInTwoParts();
            partialClassUnified.PropPart1 = "Is the same object but divided in parts";
            partialClassUnified.MethodInPart01();
            partialClassUnified.MethodInPart02();
            Console.WriteLine("---------------------------------------------------------\n");

            Console.WriteLine("===== INTERFACES =====");
            var interfaceImplemented = new Person();
            interfaceImplemented.OtherProperty = 10;
            interfaceImplemented.Jump(5);
            interfaceImplemented.Jump(11);
            interfaceImplemented.PropertyForContract = "Value for first property implemented";
            Console.WriteLine($"{interfaceImplemented.SaySomeThing()} said twice because the interface return the same sentence");
            Console.WriteLine("---------------------------------------------------------\n");

            Console.WriteLine("===== ABSTRACT CLASS =====");
            //var serer = new Seres(); //It will not work because we can't create an object for an abstract class.
            var man = new HumanBean( new DateTime(1980, 01, 24));
            man.Talk();
            man.Breath();
            Console.WriteLine($"I have {man.Age.ToString()} years old");
            Console.WriteLine($"AM I Alive? {man.AMIAlive}");
            //man.Deceased = DateTime.Now; //Don't work because set is private.
            man.Death(DateTime.Now);
            Console.WriteLine($"AM I Alive? {man.AMIAlive}");

            Console.WriteLine("");
            //var dog = new Animals(new DateTime(2020, 01, 24)); //Don't work is an abstract class
            var dog = new Mammals("Dog", new DateTime(2020, 01, 24));
            dog.NumberOfPaws = 4;
            Console.WriteLine($"I am a {dog.Specie} and I have {dog.NumberOfPaws} paws");
            //dog.Talk(); //Don't work because only HumanBean can talk;
            dog.Breath();
            Console.WriteLine($"I have {dog.Age.ToString()} years old");
            Console.WriteLine($"AM I Alive? {dog.AMIAlive}");
            dog.suckle();
            Console.WriteLine("---------------------------------------------------------\n");

            Console.WriteLine("===== UPCAST DOWNCAST =====");
            //Upcast.
            
            var dogIsMammalAndAnimal = new Animals(new DateTime(2020, 01, 24)); //Base class
            dogIsMammalAndAnimal = new Mammals("Dog", new DateTime(2020, 01, 24)); //Child class has all parent properties can be interchange. An Mammal is an Animal.
            Console.WriteLine($"I am a Dog created with upcast");
            dogIsMammalAndAnimal.Breath();

            var myAnimal = new Animals(new DateTime(2020, 01, 24));
            //MyAnimal = dogIsMammalAndAnimal; //Will not work Cannot implicitly convert type 'ObjectOriented.Animals' to 'ObjectOriented.Mammals'.
            myAnimal = (Animals)dogIsMammalAndAnimal;  //Downcast need to specify. Cast in the same level is impossible, only upper or down.
            Console.WriteLine("I am an animal but before I was an dog");
            Console.WriteLine($"I have {myAnimal.Age.ToString()} years old my age still the same");

            Console.WriteLine("---------------------------------------------------------\n");

            Console.WriteLine("===== COMPARE OBJECTS =====");
            var dogA = new Animals(new DateTime(2020, 01, 24));
            var dogB = new Animals(new DateTime(2020, 01, 24));
            Console.WriteLine(dogA == dogB); //Are reference type pointing to distinct position in memory.
            Console.WriteLine(dogA.Equals(dogB)); //Implementing interface IEquatable
            Console.WriteLine("---------------------------------------------------------\n");

            Console.WriteLine("===== DELEGATES =====");
            var protector = new Mammals.Protect(ClassNoInstanceAble.ProtectAnimals);
            protector("Ninita");
            Console.WriteLine("---------------------------------------------------------\n");

            Console.WriteLine("===== END =====\n");

        }
        
        //Access modifiers: Placed in the start of declaration.
        //Private: Visible only inside the class; Default!
        //Protected: Visible only inside the class and their children.
        //Internal: Visible only inside the namespace. Less used.
        //Public: Visible every where.

        class SimpleClass {
            //Object is a reference type. Struct is a value type.
            //Class is like a model for the object.
            //Objects contain: Property, Methods and events.
            public string FirstName; //Variables are the properties.
            public string LastName;
            public int Age;
            
            public SimpleClass() {
                Console.WriteLine("Base Constructor was called");
            }

            public void AnMethod(){ //Methods are the functions.
                Console.WriteLine("An public method for SimpleClass");
                AnInternalMethod(); //Works because is private.
            }
            
            private void AnInternalMethod() {
                Console.WriteLine("It can be called internally but not externally");
            }
            //virtual allow override
            public virtual void MethodCanBeOverrideOnChild () {
                Console.WriteLine("It is an original implementation on parent class");
            }

            protected void MethodCanBeCalledForChildClasses() {
                Console.WriteLine("This method can be called for child classes using base.");
            }

        }

        //Inherited from SimpleClass
        class ChildClassOfSimpleClass : SimpleClass {
            public string PropertyOfChild;
            public ChildClassOfSimpleClass(bool callBase = false) :base() { //Force to call Base constructor.
                Console.WriteLine("Child Constructor call base constructor and executed this");
            }

        }

        class PolymorphicChildClass : SimpleClass {
            //override ignore implementation on class parent.
            public override void MethodCanBeOverrideOnChild() {
                Console.WriteLine("In a child method the message is other");
            }
            public void MethodCallParentClass() {
                base.MethodCanBeCalledForChildClasses();
            }
        }

        class UsingComplexTypesCreated {
            public SimpleClass MyTypeComplex;
            public int MyProperty { get; set; }
            
            //Shortcut CTOR: Constructor method;
            public UsingComplexTypesCreated(int myProperty) {
                MyTypeComplex = new SimpleClass();
                MyProperty = myProperty;
                Console.WriteLine($"The object UsingComplexTypesCreated and SimpleClass were created and MyProperty now have {MyProperty} as value");
            }

            //Constructor parameterless.
            public UsingComplexTypesCreated() {
                MyTypeComplex = new SimpleClass();
                Console.WriteLine($"The object UsingComplexTypesCreated and SimpleClass for the constructor parameterless");
            }

        }


        class BetterWayToCreateProperties {
            //using the shortcut prop. (Can be obtain and set)
            public int MyPropertyBasic { get; set; }

            //using the shortcut prop full. (Use a internal variable tha can be processed)
            private string myVar;
            public string MyPropertyFull
            {
                get { 
                    Console.WriteLine("Read value");
                    return myVar; 
                }
                set { 
                    Console.WriteLine("Value was set");
                    Console.WriteLine($"Set have reserved word value that can be accessible like this: {value}");
                    myVar = value; 
                }
            }

            //using the shortcut propg. (like a read only property);
            public string MyPropertyReadOnly { get; private set; }
        }

        class AllFormsOfMethods {
            
            public void DifferentSignatures(string param1){
                Console.WriteLine("With one param");
            }
            
            public void DifferentSignatures(string param1, int param2) {
                Console.WriteLine($"Param1 = {param1} and param2 = {param2.ToString()}");
            }

            public void DifferentSignatures(string param1, bool print = false) {
                if (print)
                    Console.WriteLine($"Param1 = {param1}");
                else 
                    Console.WriteLine("Was called with an optional parameter at the end of the method");
            }
        }

        class HowGarbageCollectorWorks :IDisposable {
            //To call directly we can use GC.Collect but it is not recommended because it is a automatic process.
            //To force destroy we have to implement an interface called IDisposable. (CTRL . to implement it) 
            public HowGarbageCollectorWorks() {
                Console.WriteLine("The object was created");
            }

            public void Dispose() {
                Console.WriteLine("The object was destructed");
            }
        }

        public static class ClassNoInstanceAble {
            //Static class are single instance and automatically created when the application starts.
            public static string MyStaticProperty { get; set; }

            public static void DoYourJOb() {
                Console.WriteLine("I did my job");
            }
            
            //Function used as delegate on class Mammals
            public static void ProtectAnimals(string name) {
            Console.WriteLine($"Don't worry {name} you are protected");
            }
        }

        public sealed class ClassCanNotBeExtended {
            //This is a way to protect the class to be modified pro other programmer. Need to be used in specific cases.
        }
    }
    

}

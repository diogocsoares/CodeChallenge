using System;

namespace ObjectOriented
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Clear();
            var simpleClass = new SimpleClass(); //As a reference type it will create an instance object in the Heap memory and point to the variable customerSimple in the stack memory.
            simpleClass.FirstName = "Diogo";
            simpleClass.LastName  = "Soares";
            simpleClass.Age = 12;

            Console.WriteLine($"My name is: {simpleClass.FirstName} {simpleClass.LastName} and I have {simpleClass.Age.ToString()} years old");
            simpleClass.AnMethod();
            //simpleClass.AnInternalMethod(); Don't wort because is private;

            var childClass = new ChildClassOfSimpleClass();
            childClass.FirstName = "Carla";
            childClass.LastName = "Soares";
            childClass.Age = 10;
            childClass.PropertyOfChild = "Its only a child have";

            Console.WriteLine($"My name is: {childClass.FirstName} {childClass.LastName} and I have an special property {childClass.PropertyOfChild}");
            childClass.AnMethod(); //Have the same object.

            var childClassCalledBaseConstructor = new ChildClassOfSimpleClass(true);

            var polymorphicClass = new PolymorphicChildClass();
            simpleClass.MethodCanBeOverrideOnChild();
            polymorphicClass.MethodCanBeOverrideOnChild();
            polymorphicClass.MethodCallParentClass();

            var typeComplex = new UsingComplexTypesCreated(1580);
            var typeComplexParameterLess = new UsingComplexTypesCreated();
            typeComplex.MyTypeComplex.FirstName = "First name Complex";
            Console.WriteLine(typeComplex.MyTypeComplex.FirstName);

            var labProperties = new BetterWayToCreateProperties();
            labProperties.MyPropertyFull = "Set an value";
            string reading = labProperties.MyPropertyFull;

            var allMethods = new AllFormsOfMethods();
            allMethods.DifferentSignatures("With one parameter");
            allMethods.DifferentSignatures("With two parameters", 182);
            allMethods.DifferentSignatures("With two parameters", true);
            allMethods.DifferentSignatures("With two parameters", false);
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

    }
}

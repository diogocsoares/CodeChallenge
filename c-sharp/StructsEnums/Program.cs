using System;

namespace StructsEnums
{
    class Program
    {
        //Structs are value types used to create our own types. Are composed by properties and methods. Remember class are reference types, structs are value types.        
        struct Product {
            //Constructor don't have return and have the same name of the class.
            public Product(int id, string title, float price) {
                Id = id;
                Title = title;
                Price = price;
            }
            public int Id;
            public float Price;
            public string Title;

            public float PriceInDollar(float dollar) {
                return Price * dollar;
            }
        }
        //Innumerable is an integer can make our code more readable 
        enum EMaritalState {
            Single = 1,
            Married = 2,
            Divorced = 3,
            Widow = 4
        }

        struct Client {
            public Client(string name, EMaritalState maritalState) {
                Name = name;
                MaritalState = maritalState;
            }
            public string Name;
            public EMaritalState MaritalState;
        }

        static void Main(string[] args)
        {
            var product = new Product();
            product.Id = 1;
            product.Price = 23.0f;
            product.Title = "Mouse Gamer";
            Console.WriteLine(product.Id);
            Console.WriteLine(product.Title);
            Console.WriteLine(product.Price);
            Console.WriteLine(product.PriceInDollar(4.98f));

            var product2 = new Product(2, "Computer", 2320.90f);
            
            Console.WriteLine(product2.Id);
            Console.WriteLine(product2.Title);
            Console.WriteLine(product2.Price);
            Console.WriteLine(product2.PriceInDollar(4.98f));

            var clientMarta = new Client("Diogo Soares", EMaritalState.Married);
            Console.WriteLine(clientMarta.MaritalState);
            Console.WriteLine((int)clientMarta.MaritalState);
            Console.WriteLine(clientMarta.Name);
        }
    }
}

using System;
namespace ObjectOriented {

    public interface IContractForClass {
        //An interface is like a contract that define which a class must do or implement. It can be, properties, methods, events that one class must implement. As happens with enum should be named starting with I in uppercase. Un interface should never contain any implementation. Shortcut CTRL . option implement interface.

        public string PropertyForContract { get; set; }
        public int OtherProperty { get; set; }

        public void Jump (int timesToJump);
        public string SaySomeThing ();
    }

    public class Person : IContractForClass {
        public string PropertyForContract {get; set;}
        public int OtherProperty {get; set;}
        
        public void Jump (int timesToJump) {
            if (OtherProperty > timesToJump)
                Console.WriteLine($"I jumped {OtherProperty} times because it is my minimal jump times");
            else
                Console.WriteLine($"I jumped {timesToJump} times");
        }

        public string SaySomeThing() {
            var sentence = "I can jump many times as you wish";
            Console.WriteLine(PropertyForContract);
            Console.WriteLine(sentence);
            return sentence;
        }
    }
}
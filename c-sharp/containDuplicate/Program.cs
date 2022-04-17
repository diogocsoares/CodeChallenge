using System;
using System.Collections.Generic;
using System.Linq;

namespace containDuplicate
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Type a sequence of numbers seppared with an space");
            string[] sNumbers = Console.ReadLine().Split(' ');
            int[] nums = Array.ConvertAll<string, int> (sNumbers, int.Parse);
            Console.WriteLine($" Contain Duplicate HashSet: {containDuplicateV1(nums).ToString()}");
            Console.WriteLine($" Contain Duplicate ICollection: {containDuplicateV2(nums).ToString()}");
            Console.WriteLine($" Contain Duplicate HashSet2: {containDuplicateV3(nums).ToString()}");
            Console.WriteLine($" Contain Duplicate Queue: {containDuplicateV4(nums).ToString()}");

        }

        static Boolean containDuplicateV1 (int[] nums) {
            HashSet<int> mySet = new HashSet<int>(nums);
            return (mySet.Count != nums.Length); 
        }

        static bool containDuplicateV2 (int[] nums) {
            ICollection<int> uniqueV2 = new List<int>();
            uniqueV2.Add(nums[0]);
            for (int i = 1; i < nums.Length; i++) {
                if (uniqueV2.Contains(nums[i])) {
                    return true;
                } else {
                    uniqueV2.Add(nums[i]);
                }
            }
            return false;
        }

        static bool containDuplicateV3 (int[] nums) {
            var uniqueV3 = new HashSet<int>();
            if (nums.Length <= 1 ) return false;
            for (int i = 0; i < nums.Length; i++) {
                if (uniqueV3.Contains(nums[i])) 
                    return true;
                else
                    uniqueV3.Add(nums[i]);
            }
            return false;
        }

        static bool containDuplicateV4 (int[] nums) {
            var uniqueV4 = new Queue<int>();
            if (nums.Length <= 1 ) return false;
            for (int i = 0; i < nums.Length; i++) {
                if (uniqueV4.Contains(nums[i]))
                    return true;
                else
                    uniqueV4.Enqueue(nums[i]);
            }
            return false;
        }
    }
}

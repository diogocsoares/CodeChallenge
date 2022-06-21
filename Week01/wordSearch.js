// @ts-nocheck
//Given an m x n grid of characters board and a string word, return true if word exists in the grid.

//The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

//Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
//Output: true

//Example 2:
//Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
//Output: true

//Example 3:
//Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
//Output: false

// Constraints:

// m == board.length (number of lines)
// n = board[i].length (number of characters for each line)
// 1 <= m, n <= 6 (on line minimal and no more than 6 characters per line)
// 1 <= word.length <= 15 (word can have less than 16 characters )
// board and word consists of only lowercase and uppercase English letters.

//Follow up: Could you use search pruning to make your solution faster with a larger board?

//word: "ABCCED"
//["A*", "B*", "C*", "E"]
//["S",  "F",  "C*", "S"]
//["A",  "D*", "E*", "E"]

//if line is equal to 0 do not test UP
//if line is equal to the length - 1 do not test down
//if colum is equal to the length - 1 do not test down 

var exist = function (board, word) {
   let totLin = board.length;
   let totCol = board[0].length;
   let totChar = word.length;
   let currentChar = 0;
   let lin = 0;
   let col = 0;

   if (totLin > totLin * totCol)
      return false;

   while (lin < totLin && col < totCol) {
      if (word[currentChar] === board[lin][col]) {
         if (findPath(0, lin, col))
            return true;
         else
            moveForward();
      } else {
         moveForward();
      }
   }
   return false;

   function findPath(position, foundLin, foundCol) {
      const left = -1;
      const right = +1;
      const up = -1;
      const down = +1;

      if (totChar === position)
         return true;

      if (foundLin < 0 || foundCol < 0 || foundLin >= totLin || foundCol >= totCol)
         return false;

      if (board[foundLin][foundCol] === word[position]) {
         let tempChar = board[foundLin][foundCol];
         board[foundLin][foundCol] = '#';

         let result = findPath(position + 1, foundLin + down, foundCol) |
            findPath(position + 1, foundLin + up, foundCol) |
            findPath(position + 1, foundLin, foundCol + left) |
            findPath(position + 1, foundLin, foundCol + right);

         board[foundLin][foundCol] = tempChar;
         return result;

      } else
         return false;
   }

   function moveForward() {
      if (col < totCol - 1) {
         col++;
      } else if (lin < totLin) {
         lin++;
         col = 0;
      }
   }
};



//console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"));
//console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE")); //true
//console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB")); //false
//console.log(exist([["a", "b"], ["c", "d"]], "abdc")); //true
//console.log(exist([["a", "b"], ["c", "d"]], "abcd")); //False
//console.log(exist([["a", "b"]], "ab")); //true
//console.log(exist([["a", "b"], ["c", "d"]], "acdb")); //true
//console.log(exist([["a", "a"]], "a")); //true
//console.log(exist([["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"]], "AAB")); //true
console.log(exist([["A", "B", "C", "E"], ["S", "F", "E", "S"], ["A", "D", "E", "E"]], "ABCESEEEFS")); //true
//console.log(exist([["a", "a", "a", "a"], ["a", "a", "a", "a"], ["a", "a", "a", "a"]], "aaaaaaaaaaab")); //true
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
   let answer = new Object(); // index is equal to word position 0 position word[0]... 
   let traversalBoard = (board.length >= 1 && board[0].length <= 6);
   let currentChar = 0;
   let line = 0;
   let colum = 0;
   while (traversalBoard && currentChar <= word.length && line < board.length) {
      if (word[currentChar] === board[line][colum]) {
         answer[currentChar] = [line, colum];
         console.log(answer[currentChar]);
         lookAround(currentChar + 1, line, colum);
         if (Object.keys(answer).length === word.length) {
            return true;
         } else {
            answer = {};
            moveForward();
         }
      } else {
         moveForward();
      }
   }
   return false;

   function lookAround(position, foundLine, foundColumn) {
      const left = -1;
      const right = +1;
      const up = -1;
      const down = +1;
      let found;
      let border = {
         up: (foundLine === 0),
         down: (foundLine === board.length - 1),
         left: (foundColumn === 0),
         right: (foundColumn === board[0].length - 1)
      }

      if (position === word.length)
         return position;

      //Right
      if (!border.right && !found) {
         //Test right
         if (word[position] === board[foundLine][foundColumn + right])
            found = [foundLine, foundColumn + right];
      }

      //Down + Right | Down 
      if (!border.down && !border.right && !found) {
         if (word[position] === board[foundLine + down][foundColumn + right])
            found = [foundLine + down, foundColumn + right];
         if (word[position] === board[foundLine + down][foundColumn])
            found = [foundLine + down, foundColumn];
      }

      //Left + Down
      if (!border.down && !board.left && !found) {
         if (word[position] === board[foundLine + down][foundColumn + left])
            found = [foundLine + down, foundColumn + left];
      }

      //Left
      if (!border.left && !found) {
         //Test right
         if (word[position] === board[foundLine][foundColumn + left])
            found = [foundLine, foundColumn + left];
      }

      //Up + Left | UP
      if (!border.up && !border.left && !found) {
         if (word[position] === board[foundLine + up][foundColumn + left])
            found = [foundLine + up, foundColumn + left];
         if (word[position] === board[foundLine + up][foundColumn])
            found = [foundLine + up, foundColumn];
      }

      //UP + Right
      if (!border.up && !border.right && !found) {
         if (word[position] === board[foundLine + up][foundColumn + right])
            found = [foundLine + up, foundColumn + right];
         if (word[position] === board[foundLine + up][foundColumn])
            found = [foundLine + dow, foundColumn];
      }
      console.log(found);
      if (found) {
         answer[position] = [found[0], found[1]];
         return lookAround(position + 1, found[0], found[1]);
      } else {
         return false;
      }

   }

   function moveForward() {
      if (colum < board[line].length - 1) {
         colum++
      } else {
         if (line < board.length) {
            line++
            colum = 0;
         } else {
            traversalBoard = false;
         }
      }
   }
};



//console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"));
//console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE"));
//console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB"));







      //    //console.log(border);
      //    if (border.up) {
      //       if (border.left) {
      //          //console.log('UP y left', position);


      //       } else if (border.right) {
      //          console.log('UP y right', position);
      //          return found;
      //       } else {
      //          console.log('UP', position);
      //          return found;
      //       }
      //    }


      // if (border.down) {
      //    if (border.left) {
      //       console.log('DOWN y left', position);
      //       return found;
      //    } else if (border.right) {
      //       console.log('DOWN y right', position);
      //       return found;
      //    } else {
      //       console.log('DOWN', position);
      //       return found;
      //    }
      // }

      // if (!border.up && !border.down) {
      //    if (border.left) {
      //       console.log('middle Left ', position);
      //       return found;
      //    } else if (border.right) {
      //       console.log('middle right ', position);
      //       return found;
      //    } else {
      //       console.log('middle', position);
      //       return found;
      //    }
      // }

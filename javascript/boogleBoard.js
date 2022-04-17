let board = [
   ["E", "A", "R", "A"],
   ["N", "L", "E", "C"],
   ["I", "A", "I", "S"],
   ["B", "Y", "O", "R"]
];

function checkWord(board, word) {
   if (board instanceof Array && typeof word === 'string') {
      let lines = board.length > 0 ? board.length : 0;
      let boardWord = word.split('');

      let tail = boardWord[boardWord.length - 1];
      let start = boardWord[0];
      let l = 0
      let result;
      while (l < lines) {
         result = findChar(board, l, lines, tail, boardWord.length - 2, boardWord, 'reverse');
         if (result) return true;
         l = ++l;
      }
      if (result === undefined || !result) {
         l = 0;
         while (l < lines) {
            result = findChar(board, l, lines, start, 1, boardWord);
            if (result) return true;
            l = ++l;
         }
      }

      return result === undefined ? false : result;
   }
   else {
      return false;
   }
}

function checkAround(board, lin, col, key, found) {
   let edges = checkEdges(board, lin, col);

   if (edges.top) {
      if (edges.left) {
         if (board[lin][col + 1] === key) return [lin, col + 1]; //right
         if (board[lin + 1][col + 1] === key) return [lin + 1, col + 1]; //right bottom
         if (board[lin + 1][col] === key) return [lin + 1, col]; //bottom
      };
      if (edges.right) {
         if (board[lin][col - 1] === key) return [lin, col - 1]; // left   
         if (board[lin + 1][col - 1] === key) return [lin + 1, col - 1]; //left bottom
         if (board[lin + 1][col] === key) return [lin + 1, col]; //bottom
      }
      if (!edges.left && !edges.right) {
         if (board[lin][col + 1] === key) return [lin, col + 1]; //right
         if (board[lin + 1][col + 1] === key) return [lin + 1, col + 1]; //right bottom
         if (board[lin + 1][col] === key) return [lin + 1, col]; //bottom
         if (board[lin + 1][col - 1] === key) return [lin + 1, col - 1]; //left bottom
         if (board[lin][col - 1] === key) return [lin, col - 1]; // left   
      }
   }

   if (edges.bottom) {
      if (edges.left) {
         if (board[lin][col + 1] === key) return [lin, col + 1]; //right
         if (board[lin - 1][col + 1] === key) return [lin - 1, col + 1]; //top right
         if (board[lin - 1][col] === key) return [lin - 1, col]; // top
      }
      if (edges.right) {
         if (board[lin][col - 1] === key) return [lin, col - 1]; // left
         if (board[lin - 1][col - 1] === key) return [lin - 1, col - 1]; // left top
         if (board[lin - 1][col] === key) return [lin - 1, col]; // top
      }
      if (!edges.left && !edges.right) {
         if (board[lin][col + 1] === key) return [lin, col + 1]; //right
         if (board[lin - 1][col + 1] === key) return [lin - 1, col + 1]; //top right
         if (board[lin - 1][col] === key) return [lin - 1, col]; // top
         if (board[lin - 1][col - 1] === key) return [lin - 1, col - 1]; // left top
         if (board[lin][col - 1] === key) return [lin, col - 1]; // left   
      }
   }

   if (edges.left && !edges.top && !edges.bottom) {
      if (board[lin - 1][col] === key) return [lin - 1, col]; // top
      if (board[lin - 1][col + 1] === key) return [lin - 1, col + 1]; //top right
      if (board[lin][col + 1] === key) return [lin, col + 1]; //right
      if (board[lin + 1][col + 1] === key) return [lin + 1, col + 1]; //right bottom
      if (board[lin + 1][col] === key) return [lin + 1, col]; //bottom
   }

   if (edges.right && !edges.top && !edges.bottom) {
      if (board[lin - 1][col] === key) return [lin - 1, col]; // top
      if (board[lin - 1][col - 1] === key) return [lin - 1, col - 1]; // left top
      if (board[lin][col - 1] === key) return [lin, col - 1]; // left
      if (board[lin + 1][col - 1] === key) return [lin + 1, col - 1]; //left bottom
      if (board[lin + 1][col] === key) return [lin + 1, col]; //bottom
   }

   if (!edges.bottom && !edges.left && !edges.right && !edges.top) {
      if (board[lin - 1][col] === key) return [lin - 1, col]; // top
      if (board[lin - 1][col + 1] === key) return [lin - 1, col + 1]; //top right
      if (board[lin][col + 1] === key) return [lin, col + 1]; //right
      if (board[lin + 1][col + 1] === key) return [lin + 1, col + 1]; //right bottom
      if (board[lin + 1][col] === key) return [lin + 1, col]; //bottom
      if (board[lin + 1][col - 1] === key) return [lin + 1, col - 1]; //left bottom
      if (board[lin][col - 1] === key) return [lin, col - 1]; // left
      if (board[lin - 1][col - 1] === key) return [lin - 1, col - 1]; // left top
   }

   // if (board[lin]?.[col + 1] === key) return [lin, col + 1]; //right
   // if (board[lin + 1]?.[col + 1] === key) return [lin + 1, col + 1]; //right bottom
   // if (board[lin + 1]?.[col] === key) return [lin + 1, col]; //bottom
   // if (board[lin + 1]?.[col - 1] === key) return [lin + 1, col - 1]; //left bottom
   // if (board[lin]?.[col - 1] === key) return [lin, col - 1]; // left
   // if (board[lin - 1]?.[col - 1] === key) return [lin - 1, col - 1]; // left top
   // if (board[lin - 1]?.[col] === key) return [lin - 1, col]; // top
   // if (board[lin - 1]?.[col + 1] === key) return [lin - 1, col + 1]; //top right
   return undefined;
}

function checkEdges(board, lin, col) {
   let edges = {
      right: (board[lin].length - 1 === col),
      bottom: (board.length - 1 === lin),
      left: (col === 0),
      top: (lin === 0)
   }
   return edges;
}

function findChar(board, line, lines, key, wordIndex, boardWord, direction) {
   let element = board[line].indexOf(key);
   let around = [];
   let traversal = {
      keep: (lines > 0),
      found: []
   }
   let a;
   if (element != -1) {
      traversal.found.push([line, board[line].indexOf(key)].toString())
      around = checkAround(board, line, element, boardWord[wordIndex], traversal.found);
      if (direction === 'reverse')
         traversal.keep = (around != undefined && wordIndex >= 0);
      else
         traversal.keep = (around != undefined && wordIndex <= boardWord.length - 1);

      if (traversal.keep) {
         traversal.found.push(around.toString())
      }
      while (traversal.keep) {
         if (direction === 'reverse')
            wordIndex = --wordIndex;
         else
            wordIndex = ++wordIndex;

         if (wordIndex >= 0)
            around = checkAround(board, around[0], around[1], boardWord[wordIndex], traversal.found);

         if (direction === 'reverse') {
            traversal.keep = (around != undefined && wordIndex >= 0 && traversal.found.indexOf(around.toString()) === -1);
         }
         else
            traversal.keep = (around != undefined && wordIndex <= boardWord.length - 1 && traversal.found.indexOf(around.toString()) === -1);
         if (traversal.keep) {
            traversal.found.push(around.toString());
         }
      }
   }
   //   if (traversal.found.length === boardWord.length && wordIndex < 0) {
   if (traversal.found.length === boardWord.length) {
      return true;
   };
}

console.log('Word found: ' + checkWord(board, "CEREAL"));

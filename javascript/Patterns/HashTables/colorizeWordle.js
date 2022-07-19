// const colorizeWordle = (guessedWord, hiddenWord) => {
//    const hiddenWordHash = {};
//    let result = '';

//    for (let i = 0; i < hiddenWord.length; i++) {
//       if (!hiddenWordHash[hiddenWord[i]])
//          hiddenWordHash[hiddenWord[i]] = { [i]: { green: false }, hint: false };
//       else
//          hiddenWordHash[hiddenWord[i]][i] = { green: false };
//    };

//    for (let j = 0; j < guessedWord.length; j++) {
//       let guessChar = hiddenWordHash[guessedWord[j]];
//       if (!guessChar)
//          result += 'B';
//       else if (!guessChar[j].hint && !guessChar[j][].green) {
//          result += 'Y';
//          guessChar.hint = true;
//       } else if (guessChar.position.includes(j)) {
//          result += 'G';
//          guessChar.green = true;
//       } else
//          result += 'B';
//    }
//    return result;
// };



const colorizeWordle = (guessedWord, hiddenWord) => {
   const hiddenWordHash = {};
   let result = new Array(5);

   for (let position = 0; position < hiddenWord.length; position++) {
      const hiddenChar = hiddenWord[position];
      if (!hiddenWordHash[hiddenChar])
         hiddenWordHash[hiddenChar] = { [position]: hiddenWord[position] };
      else
         hiddenWordHash[hiddenChar][position] = hiddenWord[position];
   };

   for (let position = 0; position < guessedWord.length; position++) {
      const guessChar = hiddenWordHash[guessedWord[position]];
      let colored = 'B'
      if (!guessChar)
         colored = 'B';
      else if (guessChar[position])
         colored = 'G';
      else {
         colored = 'Y';
      }

      if (colored !== 'B')
         deleteKey(hiddenWordHash, guessedWord[position], position);
      result[position] = colored;
   }

   return result.join('');
};

function deleteKey(hiddenWordHash, guessChar, position) {
   if (Object.keys(hiddenWordHash[guessChar]).length > 1)
      delete hiddenWordHash[guessChar][position];
   else
      delete hiddenWordHash[guessChar];
}

// console.log(colorizeWordle('mamma', 'maxim')); // GGYBB
// console.log(colorizeWordle('alpha', 'truck')); // BBBBB
// console.log(colorizeWordle('truck', 'truck')); // GGGGG
// console.log(colorizeWordle('truck', 'track')); // GGBGG
// console.log(colorizeWordle('track', 'crack')); // BGGGG
// console.log(colorizeWordle('reeks', 'elder')); // YYYBB
// console.log(colorizeWordle('preen', 'alien')); // BBBGG


const colorizeWordle2 = (guessedWord, hiddenWord) => {
   const hiddenWordHash = new Map();
   let result = new Array(guessedWord.length);
   let queue = [];

   for (let position = 0; position < hiddenWord.length; position++) {
      if (guessedWord[position] === hiddenWord[position])
         result[position] = 'G'
      else {
         if (!hiddenWordHash.has(hiddenWord[position]))
            hiddenWordHash.set(hiddenWord[position], [position]);
         else
            hiddenWordHash.get(hiddenWord[position]).push(position);
         queue.push(position);
      }
   }

   while (queue.length > 0) {
      const current = queue.shift();
      if (hiddenWordHash.has(guessedWord[current])) {
         result[current] = 'Y'
         if (hiddenWordHash.get(guessedWord[current]).length > 1)
            hiddenWordHash.get(guessedWord[current]).shift();
         else
            hiddenWordHash.delete(guessedWord[current]);
      }
      else
         result[current] = 'B';
   }

   return result.join('');
};

console.log(colorizeWordle2('mamma', 'maxim')); // GGYBB
console.log(colorizeWordle2('alpha', 'truck')); // BBBBB
console.log(colorizeWordle2('truck', 'truck')); // GGGGG
console.log(colorizeWordle2('truck', 'track')); // GGBGG
console.log(colorizeWordle2('track', 'crack')); // BGGGG
console.log(colorizeWordle2('reeks', 'elder')); // YYYBB
console.log(colorizeWordle2('preen', 'alien')); // BBBGG
console.log(colorizeWordle2('iiwis', 'swift')); // YBYBY

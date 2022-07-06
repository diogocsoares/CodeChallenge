class TrieNode {
   constructor() {
      this.children = {};
      this.endOfWord = false;
      this.max = 0;
   }
}

class WordDictionary {
   constructor() {
      this.root = new TrieNode();
      this.max = 0;
   }

   addWordSubSet(word) {
      let currentNode = this.root;
      const subSets = this.subSets(word);

      for (let j = 0; j < subSets.length; j++) {
         for (let i = 0; i < word.length; i++) {
            if (!(subSets[j][i] in currentNode.children)) {
               currentNode.children[subSets[j][i]] = new TrieNode();
            }
            currentNode = currentNode.children[subSets[j][i]];
         }

         currentNode.endOfWord = true;
         currentNode = this.root;
      }
   }

   addWord(word) {
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
         currentNode.max = Math.max(currentNode.max, word.length)

         if (!(word[i] in currentNode.children)) {
            currentNode.children[word[i]] = new TrieNode();
         }
         currentNode = currentNode.children[word[i]];
      }

      currentNode.max = Math.max(currentNode.max, word.length)
      currentNode.endOfWord = true;
   }

   searchFast(word) {
      let currentNode = this.root;

      for (let i = 0; i < word.length; i++) {
         const currChar = word[i];

         if (currentNode.max < word.length)
            return false;

         if (currChar === '.') {
            const kids = Object.keys(currentNode.children);

            for (let j = 0; j < kids.length; j++) {
               const res = this.searchFast(kids[j] + word.slice(i + 1));
               if (res === true)
                  return true;
            }
            return false;
         }

         if (!currentNode.children[currChar])
            return false

         currentNode = currentNode.children[currChar];
      }
      return !!currentNode.endOfWord;
   }

   searchRecursive(word) {
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
         if (word[i] === '.') {
            for (let char of Object.keys(currentNode.children)) {
               let anyWord = [...word];
               anyWord[i] = char;
               if (this.searchRecursive(anyWord.join('')))
                  return true;
            }
            return false;
         } else {
            if (!(word[i] in currentNode.children))
               return false;
            currentNode = currentNode.children[word[i]];
         }
      }
      return currentNode.endOfWord === true;
   }// Time Limit Exceeded 

   search(word) {
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
         if (!(word[i] in currentNode.children))
            return false;
         currentNode = currentNode.children[word[i]];
      }
      return currentNode.endOfWord === true;
   }

   subSets(word) {
      const subSetCount = Math.pow(2, word.length);
      const result = [];
      for (let i = 0; i < subSetCount; i++) {
         const binaryString = i.toString(2).padStart(word.length, '.'); //Convert positive numbers in binary strings;
         const subSet = [];
         for (let j = 0; j < binaryString.length; j++) {
            if (binaryString[j] === '1')
               subSet.push(word[j]);
            else
               subSet.push('.');
         }
         result.push(subSet.join(''));
      }
      return result;
   }
}

let trie = new WordDictionary()
trie.addWord('bad');
trie.addWord('dad');
trie.addWord('mxd');
//trie.addWord('.ad');
//trie.addWord('b..');
//console.log(trie.searchFast('dac'))
console.log(trie.searchFast('.ad'));
console.log(trie.searchFast('m..'));
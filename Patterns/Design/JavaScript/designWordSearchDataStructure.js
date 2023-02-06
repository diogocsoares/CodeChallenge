class WordDictionary {
   constructor() {
      this.children = {};
      this.endOfWord = false;
      this.max = 0;
   }

   addWord(word) {
      let currentNode = this;
      for (let i = 0; i < word.length; i++) {
         currentNode.max = Math.max(currentNode.max, word.length)

         if (!(word[i] in currentNode.children)) {
            currentNode.children[word[i]] = new WordDictionary();
         }
         currentNode = currentNode.children[word[i]];
      }

      currentNode.max = Math.max(currentNode.max, word.length)
      currentNode.endOfWord = true;
   }

   search(word) {
      let currentNode = this;

      for (let i = 0; i < word.length; i++) {
         const currChar = word[i];

         if (currentNode.max < word.length)
            return false;

         if (currChar === '.') {
            const charKeys = Object.keys(currentNode.children);

            for (let j = 0; j < charKeys.length; j++) {
               const res = currentNode.children[charKeys[j]].search(word.slice(i + 1))
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
}

let trie = new WordDictionary()
trie.addWord('bad');
trie.addWord('dad');
trie.addWord('mxd');
//trie.addWord('.ad');
//trie.addWord('b..');
//console.log(trie.searchFast('dac'))
console.log(trie.search('.ad'));
console.log(trie.search('m..'));
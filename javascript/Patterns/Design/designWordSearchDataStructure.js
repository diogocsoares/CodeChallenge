class TrieNode {
   constructor() {
      this.children = {};
      this.endOfWord = false;
   }
}

class WordDictionary {
   constructor() {
      this.root = new TrieNode();
   }

   addWord(word) {
      let currentNode = this.root;
      let dotNode = this.root;
      let dotWord = new Array(word.length).fill('.');
      for (let i = 0; i < word.length; i++) {
         if (!(word[i] in currentNode.children)) 
            currentNode.children[word[i]] = new TrieNode();
         dotWord[i] = word[i];
    
         for (let j = 0; j < dotWord.length; j++) {
            if (!(dotWord[j] in dotNode.children)) {
               dotNode.children[dotWord[j]] = new TrieNode();
            }
            dotNode = dotNode.children[dotWord[j]];
         }
         dotWord.fill('.');
         dotNode.endOfWord = true;
         currentNode = currentNode.children[word[i]];
         dotNode = dotNode = this.root;
      }
      currentNode.endOfWord = true;  
   }

   search(word) {
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
         //         if (word[i] === '.') {
         //            for (let char of Object.keys(currentNode.children)) {
         //               let anyWord = [...word];
         //              anyWord[i] = char;
         //               if (this.search(anyWord.join('')))
         //                  return true;
         //            }
         //            return false;
         //         } else {
         if (!(word[i] in currentNode.children))
            return false;
         currentNode = currentNode.children[word[i]];
         //       }
      }
      return currentNode.endOfWord === true;
   }
}

let trie = new WordDictionary()
trie.addWord('bad');
trie.addWord('dad');
trie.addWord('mad');
//trie.addWord('.ad');
//trie.addWord('b..');
console.log(trie.search('dad'))
console.log(trie.search('.ad'));
console.log(trie.search('b..'));
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
      for (let i = 0; i < word.length; i++) {
         if (!(word[i] in currentNode.children)) {
            currentNode.children[word[i]] = new TrieNode();
         }
         currentNode = currentNode.children[word[i]];
      }
      currentNode.endOfWord = true;
   }

   search(word) {
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
         if (word[i] === '.') {
            for (let char of Object.keys(currentNode.children)) {
               let anyWord = [...word];
               anyWord[i] = char;
               if (this.search(anyWord.join('')))
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
   }
}

let trie = new WordDictionary()
trie.addWord('bad');
trie.addWord('dad');
trie.addWord('mad');
console.log(trie.search('dad'))
console.log(trie.search('.ad'));
console.log(trie.search('b..'));

// ["WordDictionary", "addWord", "addWord", "search", "search", "search", "search", "search", "search"]
// [[],                ["a"],     ["a"],     ["."],    ["a"],    ["aa"],   ["a"],    [".a"],   ["a."]]
class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
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
            if (!(word[i] in currentNode.children))
                return false;
            currentNode = currentNode.children[word[i]];
        }
        return currentNode.endOfWord === true;
    }

    startWith(prefix) {
        let currentNode = this.root;
        for (let i = 0; i < prefix.length; i++) {
            if (!(prefix[i] in currentNode.children))
                return false;
            currentNode = currentNode.children[prefix[i]];
        }
        return true;
    }
}

let trie = new Trie();
trie.insert('diogo');
trie.insert('diego');
trie.insert('daniel');
trie.insert('carla');
trie.insert('carlos');
console.log(trie.search('diogo'));
console.log(trie.search('carl'));
console.log(trie.startWith('ccarla'));

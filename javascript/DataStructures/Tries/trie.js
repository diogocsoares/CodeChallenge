class TrieNode {
    constructor (char) {
        if (char)
            this.children = {};
        this.endOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word){
        let currentNode = this.root;
        for (let i=0; i < word.length; i++) {
            if (currentNode.children.word[i] === undefined)
                currentNode.children[word[i]] = new TrieNode();
        }
        currentNode.endOfWord = true;
    }

    search(word){
        let currentNode = this.root;
        for (let i = 0; i < word.length; i++){
            if (currentNode.children[word[i]] === undefined)
                return false;
        }
        return currentNode.endOfWord === true;
    }

    startWith(prefix) {
        let currentNode = this.root;
        if (currentNode.children[prefix[i]] === undefined)
        return false;

        return true;
    }
}

let trie = new Trie();
trie.insert('diogo');
console.log(trie.search('diog'));
console.log(trie.startWith('dddio'));

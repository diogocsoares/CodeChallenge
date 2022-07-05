function subsets(word) {
    let resultSubSets = [new Array(word.length).fill('.')];

    function BFS(char, position, subSet) {
        if (subSet > resultSubSets.length-1)
            return;
        
        let tempSubSet = new Array(word.length).fill('.')

        if (subSet === 0) {
            tempSubSet[position] = char
            resultSubSets.push(tempSubSet)
        }
        else if (resultSubSets[subSet]) {
            tempSubSet = resultSubSets;
            tempSubSet[position] = char;
            resultSubSets.push(tempSubSet);
         }
        
        BFS(char, position, subSet + 1);
    }

    for (let i = 0; i < word.length; i++){
        BFS(word[i], i, 0);
    }

    return resultSubSets;
}

console.log(subsets('aba'));

// ['A','B','A']


// Result = ['.','.','.']

// char [A]
//     BFS(A, 0, 1)
//     Result = ['.','.','.'] ['A','.','.']
//     BFS(A, 0, 2)

// char [B]
//     BFS(B, 1, 1)
//     Result = ['.','.','.'] ['A','.','.']['.','B','.']
//     BFS(B, 1, 2)
//     Result = ['.','.','.'] ['A','.','.']['.','B','.']['A','B','.']
//     BFS(B, 1, 3)


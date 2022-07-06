function printSubSets(word, depth, current) {
    if (depth == word.length)
        return;

    for (let i = depth + 1; i < word.length; i++) {
        current += word[i];
        printSubSets(word, i, current);
        current = current.substring(0, current.length - 1);
    }
    console.log(current);
}
//printSubSets('abc', -1, '');



function subSetsRecursive(word, depth = 0, subset = [], results = []) {
    if (depth === word.length) {
        results.push(subset);
    } else {
        subSetsRecursive(word, depth + 1, subset, results);
        subSetsRecursive(word, depth + 1, [...subset, word[depth]], results);
    }
    return results;
};
//console.log(subSetsRecursive(['a', 'b', 'c']));

//Is a depth first search in a decision tree.
function subSetsRecursiveBackTracking(word, depth = 0, subset = [], results = []) {
    if (depth === word.length) {
        results.push([...subset]);
    } else {
        subSetsRecursiveBackTracking(word, depth + 1, subset, results);
        subset.push(word[depth]);
        subSetsRecursiveBackTracking(word, depth + 1, subset, results);
        subset.pop();
    }
    return results;
};
//console.log(subSetsRecursiveBackTracking(['a', 'b', 'c']));

function subSetsBinary(word) {
    const subSetCount = Math.pow(2, word.length);
    const result = [];
    for (let i = 0; i < subSetCount; i++) {
        const binaryString = i.toString(2).padStart(word.length, '0'); //Convert positive numbers in binary strings;
        const subSet = [];
        for (let j = 0; j < binaryString.length; j++) {
            if (binaryString[j] === '1')
                subSet.push(word[j]);
        }
        result.push(subSet);
    }
    return result;
}
console.log(subSetsBinary(['a', 'b', 'c']));

function subSetsBinary2(word) {
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

console.log(subSetsBinary2(['a', 'b', 'c']));

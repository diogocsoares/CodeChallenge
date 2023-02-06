function computeXOR(n) {
  if (n % 4 == 0)
    return n;
  if (n % 4 == 1)
    return 1;
  if (n % 4 == 2)
    return n + 1;
  else
    return 0;
}

console.log(computeXOR(9));


function subSetsBinary(word) {
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
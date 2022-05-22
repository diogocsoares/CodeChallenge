//To manipulate strings we can think a string as an array.

function reverse(string) {
   if (!string || string.length < 2 || typeof string !== 'string')
      return 'it is not a string';
   let stringReverse = '';
   for (let i = string.length - 1; i >= 0; i--)
      stringReverse = stringReverse.concat(string[i]);
   return stringReverse;
}

function reverse2(string) {
   return string.split('').reverse().join('');
}

const reverse3 = string => string.split('').reverse().join('');

const reverse4 = string => string = [...string].reverse().join('');

console.log(reverse('Reverse'));
console.log(reverse2('Reverse'));
console.log(reverse3('Reverse'));
console.log(reverse4('Reverse'));

let array = [1, 0, 2, 2, 0, 1];

let node = {
    val: null,
    next: null
};

//console.log(typeof node);
//console.log(Object.keys(node));

function createList() {
    let point = node;
    for (let i = 0; i < array.length - 1; i++) {
        point.val = array[i];
        point.next = {
            val: array[i + 1],
            next: null
        }
        point = point.next;
    }
}

function printList(node) {
    let point = node.next;
    console.log(node.val);
    console.log(node.next);
    while (point.next != null) {
        console.log(point.val);
        console.log(point.next);
        point = point.next;
    }
}

function isPalindromeV1(head) {
    let point = head;
    let arrayA = [];
    while (point.next != null) {
        arrayA.push(point.val);
        point = point.next;
    }
    arrayA.push(point.val);
    let middle = Math.floor(arrayA.length / 2);
    let arrayB = arrayA.slice(middle);
    let testPalindrome = 0;
    for (let i = 0; i < arrayB.length; i++) {
        if (arrayB[i] === arrayA[arrayB.length - 1 - i]) {
            testPalindrome++;
        }
    }
    return (testPalindrome === arrayB.length);
}

function isPalindromeV2(head) {
    function check(node) {
        if (node === null) return true
        //        console.log(` head.val: ${head.val} node.val ${node.val} `)
        let bool = check(node.next) && (head.val == node.val)
        head = head.next
        //        console.log(node.next);
        console.log(node);
        console.log(head);
        console.log(bool);
        return bool
    }
    console.log(head);
    return check(head)
}


createList();
//printList(node);

console.log("Is Palindrome: " + isPalindromeV2(node));



function isPalindromeV3(head) {
    let point = head;
    let i = 0, pal = 0;
    let testPalindrome = []
    while (point.next != null) {
        testPalindrome.push(point.val);
        if (point.next.val === testPalindrome[i]) {
            pal++;
            i--
            point = point.next;
        } else {
            point = point.next;
            i++;
        }
    }
    testPalindrome.push(point.val);

    if (testPalindrome.length === 1)
        return true;

    if ((testPalindrome.length === 3) && (testPalindrome[0] === testPalindrome[2]))
        return true;

    if ((testPalindrome.length === 3) && (testPalindrome[0] != testPalindrome[2]))
        return false;

    return ((Math.floor(testPalindrome.length / 2)) === pal);
}

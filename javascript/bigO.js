// ===== Constant time algorithm =====
// An algorithm is said to run in constant time. It means that as you increase the size of the input ti the function. The execution time remains the same.

//O(1) time (constant time)

function printFirsElementOfArray (array) {
    console.log(`First Element of array is ${array[0]}`);
    return null;
}

// ===== Linear time algorithm =====
//The execution time of the function is directly proportional to the input size. The run time of the function grows as the input grows, and we mark it as O(n).

//O(n) means that the growth rate is linear - as N increases, the processing time increases at the same rate.

function printAllElementOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Element of array is ${array[i]}`)
    }
    return null;
}

// ===== Logarithmic algorithm =====
// An algorithm is said to run in logarithmic time if its time execution is proportional to the logarithm of the input size, and we mark it as O(log n).

//O(log n) algorithms never look to all elements in the input. logarithmic time complexities usually apply to algorithms that eliminate large amounts of input elements in each step.

//Once a list is ordered, it can be searched using a divide-and-conquer strategy.
function binarySearch (array, val) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end)/2);
        if (array[middle] === val) {
            return middle;
        } else if (array[middle] < val) {
            start = middle + 1;
        } else {
            end = middle -1;
        }
    }
    return -1;
}

// ===== Quadratic algorithm =====
// The quadratic algorithm is almost the reverse of the logarithmic algorithm. The number of steps required by the quadratic algorithms is the square root of input size. If the input size is 2, then the required steps are 4. if the input is size 8, it will take 64, and so on and we mark it as O(n²).

// Bubble sort algorithm is O(n²).

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}


// ===== Linearithmic algorithm =====
// A linearithmic algorithm or log-linear algorithm it's slightly slower than a linear algorithm. And we mark it as O(n log n)

// Merge sort O (n log n)

function mergeSort (array) {
    if (array.length === 1) return array;
    let middle = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, middle));
    let right = mergeSort(array.slice(middle));

    return merge(left, right);
}

function merge(left, right) {
    let indexLeft = 0;
    let indexRight = 0;
    let result = [];

    while(indexLeft < left.length && indexRight < right.length) {
        if(left[indexLeft] < right[indexRight]) {
            result.push(left[indexRight]);
            indexRight++
        } else {
            result.push(right[indexRight]);
        }
    }

    while (indexLeft < left.length) {
        result.push(left[indexLeft]);
        indexLeft++;
    }
    while (indexRight < right.length) {
        result.push(right[indexRight]);
        indexRight++;
    }

    return result;
}

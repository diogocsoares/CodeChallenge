//Strategy: Obtain the biggest face and divide for the short face. If the result have rest it means, that this part need to be divided again until the rest be 0.
// 1 - BigFace x ShortFace.
// 2 - BigFace / ShortFace = RestResult
// 3 - if rest redefine the BigFace x ShortFace call the function again.
//Time Complexity of Euclidean Algorithm: https://www.geeksforgeeks.org/time-complexity-of-euclidean-algorithm/
// 


function euclideanGDC(big, small) {
    console.log(big, small);
    if (small === 0)
        return big;
    return euclideanGDC(small, big % small); 
}

console.log(euclideanGDC(180, 640));
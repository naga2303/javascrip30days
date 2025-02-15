/****************************************************************
 *              CODERBYTE ARRAY SIMILAR CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Two arrays are called similar if one can be obtained from    *
 * another by swapping at most one pair of elements in one of   *
 * the arrays. Given two arrays a and b, check whether they are *
 * similar.                                                     *
 *                                                              *
 * Examples                                                     *
 * Input 1: a = [1, 2, 3] and b = [1, 2, 3]                     *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: [1, 2, 3] and b = [2, 1, 3]                         *
 * Output 2: true                                               *
 * Explanation: We can obtain b from a by swapping 2 and 1 in b.*
 *                                                              *
 * Input 3: [1, 2, 2] and b = [2, 1, 1]                         *
 * Output 3: false                                              *
 * Explanation: Any swap of any two elements either in a or b   * 
 * won't make a and b equal                                     *
 *                                                              *
 ***************************************************************/
let ar1 = [1,2,3]
    let ar2 = [2,1,3]
console.log(arraySimilar(ar1,ar2))

function arraySimilar(a,b){
    let counter =0

let diffArray = new Array()
if(a.length !== b.length){
    return false;
}
for(let i =0;i<ar1.length;i++){
    
    if(a[i]!==b[i]){
        diffArray.push(i)
    }
    if(diffArray.lenght>2){
        return false;
    }
    
}
if(diffArray.length ==0){
    return true;
}

if(diffArray.length ==2){
    [leftIndex, rightIndex] = diffArray;
    [a[leftIndex], a[rightIndex]] = [a[rightIndex],a[leftIndex]]
    if(JSON.stringify(a) === JSON.stringify(b) ){
        return true;
    }
}
return false;
}
/****************************************************************
 *                 CODERBYTE MAX SUBARRAY CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function MaxSubarray(arr) take the array of numbers *
 * stored in arr and determine the largest sum that can be      *
 * formed by any contiguous subarray in the array.              *
 * For example, if arr is [-2, 5, -1, 7, -3] then your program  *
 * should return 11 because the sum is formed by the subarray   *
 * [5, -1, 7]. Adding any element before or after this subarray *
 * would make the sum smaller.                                  *
 *                                                              *
 * Examples                                                     *
 * Input 1: [1, -2, 0, 3]                                       *
 * Output 1: 3                                                  *
 *                                                              *
 * Input 2: [3, -1, -1, 4, 3, -1]                               *
 * Output 2: 8                                                  *
 *                                                              *
 ***************************************************************/

console.log(MaxSubarray([1, -2, 0, 3]))

function MaxSubarray(arr){
    let temp=0;
    let max=0;
    if(arr.length==1){
        return arr[0]
    }
    for(let i=0;i<arr.length;i++){
        for(let j=arr[i];j<arr.length;j++){
            temp+=arr[i]
        }
        if(temp>=max){
            max=temp;
        }
        temp=0;
    }
    return max;
}

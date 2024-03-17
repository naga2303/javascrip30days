/****************************************************************
 *              CODERBYTE ARRAY MATCHING CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ArrayMatching(strArr) read the array of    *
 * strings stored in strArr which will contain only two elements*
 * both of which will represent an array of positive integers.  *
 * For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], *
 * then both elements in the input represent two integer arrays *
 * and your goal for this challenge is to add the elements in   *
 * corresponding locations from both arrays. For the example    *
 * input your program should do the following additions:        *
 * [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then             *
 * equals [6, 4, 13, 17]. Your program should finally return    *
 * this resulting array in a string format with each element    *
 * separated by a hyphen: 6-4-13-17.                            *
 * If the two arrays do not have the same amount of elements,   *
 * then simply append the remaining elements onto the new array *
 * (example shown below). Both arrays will be in the            *
 * format: [e1, e2, e3, ...] where at least one element will    *
 * exist in each array.                                         *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["[5, 2, 3]", "[2, 2, 3, 10, 6]"]                   *
 * Output 1: 7-4-6-10-6                                         *
 *                                                              *
 * Input 2: ["[1, 2, 1]", "[2, 1, 5, 2]"]                       *
 * Output 2: 3-3-6-2                                            *
 *                                                              *
 ***************************************************************/

console.log(ArrayMatching( ["[5, 2, 3]", "[2, 2, 3, 10, 6]"]))

function ArrayMatching(arr){
    let first_Array = arr[0]
    let second_Array = arr[1]
     let fArray = JSON.parse(first_Array).filter(Number.isFinite)
     let sArray = JSON.parse(second_Array).filter(Number.isFinite)
    let final_Array = [];
    
    for(let i =0 ; i< Math.max(fArray.length, sArray.length);i++){
        final_Array.push((fArray[i] || 0) + (sArray[i] || 0))
        //result.push(arr1[i] + (arr2[i] || 0)); 
    }
    console.log (final_Array.join("-"))
    
   
}
//https://stackoverflow.com/questions/50170614/js-sum-of-two-arrays-where-arrays-can-be-of-unequal-length
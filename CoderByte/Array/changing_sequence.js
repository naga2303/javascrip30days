/****************************************************************
 *             CODERBYTE CHANGING SEQUENCE CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ChangingSequence(arr) take the array of    *
 * numbers stored in arr and return the index at which the      *
 * numbers stop increasing and begin decreasing or stop         *
 * decreasing and begin increasing.                             *
 * For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your       *
 * program should return 3 because 6 is the last point in the   *
 * array where the numbers were increasing and the next number  *
 * begins a decreasing sequence. The array will contain at least*
 * 3 numbers and it may contains only a single sequence,        *
 * increasing or decreasing. If there is only a single sequence *
 * in the array, then your program should return -1.            *
 * Indexing should begin with 0.                                *
 *                                                              *
 * Examples                                                     *
 * Input 1: [-4, -2, 9, 10]                                     *
 * Output 1: -1                                                 *
 *                                                              *
 * Input 2: [5, 4, 3, 2, 10, 11]                                *
 * Output 2: 3                                                  *
 *                                                              *
 ***************************************************************/

console.log(ChangingSequence([5, 4, 3, 2, 10, 11]))

function ChangingSequence(ar){
  let ChangingSequenceIndex =-1;
  let findSequence = new String(" ")
  if(ar[0] < ar[1]) findSequence = "increasing"
  else if (ar[0]>ar[1]) findSequence = "decreasing"
  else return -1;

  for(let i=0;i<ar.length;i++){
    if(findSequence == "increasing" && ar[i] > ar[i+1]){
        ChangingSequenceIndex = i;
        
    }
    else if(findSequence === "decreasing" && ar[i] < ar[i+1]){
    ChangingSequenceIndex = i;
    break;
    }
  }
  return ChangingSequenceIndex;;
}
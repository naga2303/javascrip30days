/****************************************************************
 *              CODERBYTE DISTINCT LIST CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function DistinctList(arr) take the array of numbers*
 * stored in arr and determine the total number of duplicate    *
 * entries. For example if the input is [1, 2, 2, 2, 3] then    *
 * your program should output 2 because there are two duplicates*
 * of one of the elements.                                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: [0,-2,-2,5,5,5]                                     *
 * Output 1: 3                                                  *
 *                                                              *
 * Input 2: [100,2,101,4]                                       *
 * Output 2: 0                                                  *
 *                                                              *
 ***************************************************************/

console.log(DistinctList([100,2,101,4]))

function DistinctList(arr){
    let firstDup=0;
    let finalDup=0;
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]==arr[j]){
                firstDup++;
            }
            else{
                continue;
            }

        }
        if(firstDup>finalDup){
            finalDup=firstDup;
        }
        firstDup=0;
    }
    if(finalDup==0){
        return 0;
    }
    else{
    return (finalDup+1);
    }
}
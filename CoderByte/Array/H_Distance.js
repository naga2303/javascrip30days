/****************************************************************
 *                CODERBYTE H DISTANCE CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function HDistance(strArr) take the array of strings*
 * stored in strArr, which will only contain two strings of     *
 * equal length and return the number of characters at each     *
 * position that are different between them.                    *
 *                                                              *
 * For example: if strArr is ["house", "hours"] then your       *
 * program should return 2. The string will always be of equal  *
 * length and will only contain lowercase characters from the   *
 * alphabet and numbers.                                        *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["10011", "10100"]                                  *
 * Output 1: 3                                                  *
 *                                                              *
 * Input 2: ["abcdef", "defabc"]                                *
 * Output 2: 6                                                  *
 *                                                              *
 ***************************************************************/

console.log(HDistance(["10011", "10100"]))

function HDistance(arr)
{
    let str1 = arr[0];
    let str2 = arr[1];
 
    let counter=0;
    for(let i =0,j=0; i<str1.length && j<str2.length;i++,j++)
     {
        
                if(str1.charAt(i)!=str2.charAt(j))
                {
                    counter++;
                }
                else{
                    continue;
                }
            
        
     }
     return counter;
}
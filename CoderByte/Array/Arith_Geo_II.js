/****************************************************************
 *             CODERBYTE ARITHMETC GEOMETRIC II CHALLENGE       *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ArithGeo(arr) take the array of numbers    *
 * stored in arr and return the string "Arithmetic" if the      *
 * sequence follows an arithmetic pattern or return "Geometric" *
 * if it follows a geometric pattern. If the sequence doesn't   *
 * follow either pattern return -1. An arithmetic sequence is   *
 * one where the difference between each of the numbers is      *
 * consistent, where as in a geometric sequence, each term after*
 * the first is multiplied by some constant or common ratio.    *
 * Arithmetic example: [2, 4, 6, 8] and                         *
 * Geometric example: [2, 6, 18, 54]. Negative numbers may be   *
 * entered as parameters, 0 will not be entered, and no array   *
 * will contain all the same elements.                          *
 *                                                              *
 * Examples                                                     *
 * Input 1: new int[] {5,10,15}                                 *
 * Output 1: Arithmetic                                         *
 *                                                              *
 * Input 2: new int[] {2,4,16,24}                               *
 * Output 2: -1                                                 *
 *                                                              *
 ***************************************************************/

console.log(ArithGeo([2,6,19,54]))

function ArithGeo(ar){
    
    let diff = ar[1]-ar[0];
    let qut = ar[1]/ar[0]
    for(let i = 1;i<ar.length-1;i++){
        let diffNum = ar[i+1] - ar[i]
        let qutNum = ar[i+1]/ar[i]
        if(diff == diffNum){
          if(i+1==ar.length-1){
            return 'Arith'
          }
          else{
            continue;
          }
        }
       else if(qut == qutNum){
        if(i+1==ar.length-1){
          return 'Geo'
      }
      else{
        continue;
      }
       }
      
      else
      {
        return -1;
      }
        
        
      
    }
    
   
   // return 'Geo'
}
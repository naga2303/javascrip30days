/****************************************************************
 *           CODERBYTE EQUIVALENT KEYPRESSES CHALLENGE          *
 *                                                              *
 * Problem Statement                                            *
 * Have the function EquivalentKeypresses(strArr) read the array*
 * of strings stored in strArr which will contain 2 strings     *
 * representing two comma separated lists of keypresses.        *
 * Your goal is to return the string true if the keypresses     *
 * produce the same printable string and the string false if    *
 * they do not.                                                 *
 *                                                              *
 * A keypress can be either a printable character or a backspace*
 * represented by -B.                                           *
 *                                                              *
 * You can produce a printable string from such a string of     *
 * keypresses by having backspaces erase one preceding character*
 *                                                              *
 * For example: if strArr contains ["a,b,c,d", "a,b,c,c,-B,d"]  *
 * the output should return true because those keypresses       *
 * produce the same printable string.                           *
 *                                                              *
 * The array given will not be empty. The keypresses will only  *
 * contain letters from the alphabet and backspaces.            *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["a,b,c,d", "a,b,c,d,-B,d"]	                        *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: ["c,a,r,d", "c,a,-B,r,d"]                           *
 * Output 2: false                                              *
 *                                                              *
 ***************************************************************/

console.log(EquivalentKeypresses(["c,a,r,d", "c,a,-B,r,d"]))

function EquivalentKeypresses(arr){
    
    let firstArray = arr[0].split(",");
    let firstArrayLen = firstArray.length;
    let secondArray = arr[1].split(",")
   // console.log(secondArray.length)
    let counter=0;
    for(let i=0;i<secondArray.length;i++){
      if(secondArray[i]=="-B"){
         counter--;
        }
        else
        {
            counter++;
        }
    }
    console.log(counter)
    if(counter==firstArrayLen){
        return true;
    }
    else{
        return false;
    }
  
    
  

    
}
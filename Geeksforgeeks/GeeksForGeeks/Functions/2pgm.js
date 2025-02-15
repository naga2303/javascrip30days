//What is currying function in JavaScript ?
/**
 * It is a technique in function programming, that tranforms the function of multiple arguments into several functions 
 * of a single argument in sequence. 
 */
console.log(calsValue(3)(4)(5))
function calsValue(length)
{
    return function(breadth){
        return function (height)
        {
            return length*breadth*height
        }
    }
}
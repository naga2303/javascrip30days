//JavaScript Program to Reorder an Array According to Given Indexes

const originalArray =  
    ['HTML', 'CSS', 'JavaScript', 'React.js']; 
const indexesArray = [3, 1, 2, 0]; 
const reorderedArray =     reorderArrayByIndexes(originalArray, indexesArray); 
console.log(reorderedArray);

function reorderArrayByIndexes(oa,ia){
    return ia.map(index => oa[index])
}
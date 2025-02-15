//How to get the day and month of a year using JavaScript ?
var d = new Date();
console.log(d.getDate())

console.log(d.getMonth()+1)
let month = d.getMonth()+1;
switch(month){
    case 1: console.log('Jan')
            break;
    case 2: console.log('Feb') 
            break;
    case 3: console.log('Mar')
            break;
    case 4: console.log('Apr')
            break;
    case 5: console.log('May')
            break;
    case 6: console.log('Jun')
            break;
    case 7: console.log('Jul')
            break;
    case 8: console.log('Aug')
            break;
    case 9: console.log('sep')
            break;
    case 10: console.log('Oct')
            break;
    case 11: console.log ('Nov')
            break;
    case 12: console.log('Dec')
            break;
}
//How do you display JavaScript datetime in 12 hour AM/PM format ?

let d1 = new Date()

let hours = new Date(d1.setHours(19));

console.log(hours.getHours())

let mins = d1.getMinutes();

newFormat = hours > 12 ? 'PM': 'AM'

hours = hours%12;

hours = hours?hours:12

mins = mins > 10?mins: '0'+mins;

console.log(hours +":" + mins + newFormat)
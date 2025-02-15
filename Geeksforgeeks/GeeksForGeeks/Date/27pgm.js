//How to compare date part only without comparing time in JavaScript?

var d1 = new Date()
d1.setHours(0,0,0,0)

var d2 = new Date()
d2.setHours(0,0,0,0)

if(d1==d2){
    console.log ('same')
}

else if(d1>d2){
    console.log('d1 grtr')
}
else{
    console.log('d2 grt')
}
//How to store all dates in an array present in between given two dates in JavaScript ?

var d1 = new Date('11/27/2023')
var d2 = new Date('11/29/2023');

var result = getDiffDates(d1,d2)
console.log(result)

function getDiffDates(sd,ed){
    let ar=[];
    let cd = new Date(sd)
    while (cd<ed){
        ar.push(new Date(cd))
        cd.setDate(cd.getDate()+1)
       
    }
    return ar;

}

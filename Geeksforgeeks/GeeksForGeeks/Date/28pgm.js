//How to calculate days left until next Christmas using JavaScript ?

let d1 = new Date();

let cyear = d1.getFullYear()

if(d1.getMonth() ==11 && d1.getDate()>25){
    cyear = cyear +1;

}
let yr = new Date()
console.log(cyear)
yr = new Date(cyear,11,25).getTime()
d1 = d1.getTime()


let diff = (yr-d1)
console.log(Math.round((((diff/1000)/60)/60)/24)) 
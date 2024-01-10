//Get the Difference between Two Sets using JavaScript
let a = [1,2,35,6]
let b = [23,56,21,,1,4]
let st1 = new Set(a)
let st2 = new Set(b)

let stt = new Set(st1)
for(const ele of st2){
    stt.delete(ele)
}
console.log([...stt])
//How to compare Arrays of Objects in JavaScript ?

let ar1 = [
    {
        empid:1,
        empName: 'Ashish'
    },
    {
        empid:2,
        empName: 'Akash'
    },
    {
        empid:3,
        empName: 'Nagarajan'
    }
]

let ar2 = [
    {
        empid:1,
        empName: 'Ashish'
    },
    {
        empid:2,
        empName: 'Akash'
    },
    {
        empid:3,
        empName: 'Nagarajan'
    }
]
console.log(ar1.length === ar2.length)
console.log(ar1.every((el)=>{
    ar2.some((el2)=>{
        el.empid == el2.empid
        el.empName === el2.empName
    })
}))
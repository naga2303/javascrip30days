//How to call the map method only if the element is an array?

let obj ={
    first_name: 'John',
    last_name: 'Doe',
    skill_set: ['C++', 'python', 'java',
                'javascript', 'pascal', 'C#'],
    fav_numbers: [10, 19, 17, 62.98, 76, 32.9],
    email: 'john@someplace.com'
}

let valuess = Object.values(obj).filter(function (per){
    return (typeof per) ==='object'
})
console.log(valuess.forEach((vals)=>{
    console.log(vals.join(' '))
}))
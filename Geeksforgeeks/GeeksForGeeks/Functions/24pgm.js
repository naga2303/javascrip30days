//How to wait for a promise to finish before returning the variable of a function ?
/* using set timeout
const wait = ms =>new Promise(resolve => setTimeout(resolve,ms))
function failureCallBack(){
    console.log("failed")
}
wait(4*1000).then(()=>{
    console.log('Waited for 4 seconds')
    throw new Error('error occurred')
}).catch(()=>{
    failureCallBack()
})

wait(2*1000).then(()=>{console.log("Waited for 2 seconds")})
*/

//Async - await



let first_promise = function (){
    console.log('first promise')
    return new Promise(resolve =>{
        setTimeout(function (){
        resolve('First promise resolved')
        console.log("After resolved")
    }),2000})
}



let second_promise = function(){
    console.log('second promise')
    return new Promise(resolve =>{
        setTimeout(function(){
        resolve('Second promise resolved')
        console.log('After second promise')
    },4000)
})
}

async function test(){
    let f1 = first_promise()
    console.log("after 2 seconds")
    console.log(first_promise)

    let f2 = second_promise()
    console.log('After 4 seconds')
    console.log(second_promise)
}
test()
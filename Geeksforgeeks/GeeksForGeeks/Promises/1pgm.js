const p = new Promise((resolve,reject)=>{
    resolve("Resolved successfully")
})

/*function test(){
    p.then((message)=>{
        console.log(message)
    })
    console.log("Before")
}*/

async function test(){
    await p.then((message)=>{
        console.log(message)
    })
    console.log("before")
}
test()
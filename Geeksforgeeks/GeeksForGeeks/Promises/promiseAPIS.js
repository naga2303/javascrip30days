p1 = Promise.reject(50+"rejected");
p2 = Promise.reject("Rejected")
p3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, 'geek');
});
 
//If any one of the promises fails then other promise messages are ignored.
Promise.all([p1, p2, p3]).then(function (values) {
    
    console.log(values);
}
)
.catch((message)=>{
    console.log(message)
});

/**This will return the array of promises, even if any one of the promises fails still it waits for other
 * promises to complete. return type is array.
 */
Promise.allSettled([p1,p2,p3]).then((message)=>{
    console.log(message)
})
.catch((message)=>{
    console.log(message)
})

/**This will print the first promise which is completed, if the promise which completes is success 
 * then it prints the success message else the rejected message.
 */
Promise.race([p1,p2,p3]).then((message)=>{
    console.log("race: "+message)
})
.catch((message)=>{
    console.log("race: "+message)
})

/**This will wait untill one promise is resolved, if all rejected then the return type is array. (array 0f issues) */
Promise.any([p1,p2,p3]).then((message)=>{
    console.log("any: "+message)
})
.catch((message)=>{
    console.log("any: "+message)
})
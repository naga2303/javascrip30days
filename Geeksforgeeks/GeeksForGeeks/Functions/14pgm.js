//How to find out the caller function in JavaScript?

function foo()
{
    console.log(foo.caller.name)
}
function bar()
{
    foo()
}
bar();
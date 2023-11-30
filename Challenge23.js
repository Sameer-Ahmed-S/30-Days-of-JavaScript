/*
**Challenge 23**
Problem : Closure Challenge
Description:
Write a function counter that returns a new function on each invocation.
The returned function, when called, should increment the counter value and return it.
Solution Approach:
Utilize closure to maintain the state of the counter.
*/
function counter()
{
    let count = 0;
    return function()
    {
        return count++;
    };
}
var counter1 = counter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

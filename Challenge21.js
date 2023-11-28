/*

**Challenge 21**  
Problem Statement: Write an asynchronous loop function that iterates over an array and performs an asynchronous operation on each element.  
Description: The function should take an array and an async function, applying the async function to each element in the array in sequence.  
Solution Approach: Use async/await within a for...of loop.

*/

async function asyncLoop(arr, asyncFunc)
{
    for(let elem of arr)
    {
        await asyncFunc(elem);
    }
}

console.log(asyncLoop([1, 2, 3, 4, 5], async (x) => console.log(x))); // 1 2 3 4 5
console.log(asyncLoop([1, 2, 3, 4, 5], async (x) => console.log(x * x))); // 1 4 9 16 25

/*
**Challenge 13**
Problem Statement: Implement a memoization function.
Description: Write a function that takes a function as its argument and returns a memoized version of the function.
Solution Approach: Store the function's results for previous inputs and return the stored result for repeated inputs.
*/

const add = (n) => (n + 10);
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];  // just taking one argument here
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}
const memoizedAdd = memoize(add);
console.log(memoizedAdd(3));  // calculated
console.log(memoizedAdd(3));  // Cacheed
console.log(memoizedAdd(10));  // calculated
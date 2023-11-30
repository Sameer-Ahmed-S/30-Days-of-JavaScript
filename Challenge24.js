/*
**Challenge 24**  
Description:  
Implement a debounce function that takes a function and a delay as arguments. 
The returned function should ensure that the original function is not called more than once in the specified delay.  
Solution Approach:  
Use a timer and clear it on each invocation to delay the function execution.

*/

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  function saveInput(value){
    console.log('Saving data',value);
  }
var debounceFn = debounce(saveInput,1000);

debounceFn("hello");
debounceFn("Welcome");
debounceFn("Hi");
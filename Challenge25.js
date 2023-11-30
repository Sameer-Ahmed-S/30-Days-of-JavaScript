/*

**Challenge 25**  
Description:  
Write a function getData that returns a Promise. Use this function to fetch data from two different APIs sequentially, and return the combined result.  
Use any random API that you want  
Solution Approach:  
Utilize the .then method to chain promises.

*/

function getData(url) {
    return new Promise((resolve) => {
            fetch(url).then(response=>{
                resolve(response.json())
            })             
    });
}

getData('https://jsonplaceholder.typicode.com/todos/1').then(firstDataSet => {    
    getData('https://jsonplaceholder.typicode.com/todos/2').then(secondDataSet => {
        var result =[];
        console.log(result.concat(firstDataSet,secondDataSet));       
    })});

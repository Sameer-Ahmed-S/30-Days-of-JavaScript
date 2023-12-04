/*
**Challenge 27**  
Description:  
Write a generator function range that takes two arguments, start and end, and yields all the numbers in that range.  
Solution Approach:  
Use the function* syntax for generator functions and the yield keyword.
*/

function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
    }

    for (let i of range(1, 10)) {
    console.log(i);
    }
    // 1 2 3 4 5 6 7 8 9 10
    console.log([...range(1, 10)]);
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(Array.from(range(1, 10)));
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let gen=range(1,10);
    console.log(gen.next().value);
    // 1
    console.log(gen.next().value);
    // 2
    console.log(gen.next().value);
    

        



/*
**Challenge 22**  
Problem Statement: Write a function to deeply compare two objects for equality.  
Description: Given two objects, the function should return true if they are deeply equal and false otherwise.  
Solution Approach: Recursively compare properties of both objects.
*/
function deepEqual(obj1, obj2)
{
    if(typeof obj1 == "object" && typeof obj2 == "object")
    {
        let keys1 = Object.keys(obj1);
        let keys2 = Object.keys(obj2);
        if(keys1.length != keys2.length)
        {
            return false;
        }
        for(let key of keys1)
        {
            if(!keys2.includes(key))
            {
                return false;
            }
            if(!deepEqual(obj1[key], obj2[key]))
            {
                return false;
            }
        }
        return true;
    }
    else
    {
        return obj1 === obj2;
    }
}

console.log(deepEqual({a: 1, b: 2}, {a: 1, b: 2})); // true
console.log(deepEqual({a: 1, b: 2}, {a: 1, b: 3})); // false
/*
**Challenge 29**  
Description:  
Write a function raceWithTimeout that takes an array of promises and a timeout value. The function should resolve when the first promise 
resolves or reject if none resolve within the given timeout.  
Solution Approach:  
Use Promise.race and a timeout promise.
*/

function sleep(time, value, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfill") {
                return resolve(value);
            } else {
                return reject(new Error(value));
            }
        }, time);
    });
}

function raceWithTimeout(promises, timeout) {
    return Promise.race([...promises,
    new Promise((resole,reject) => {
        setTimeout(() =>  {return reject(new Error('Time Exceeded'))}, timeout)
    })
    ])
}

const p1 = sleep(500, "one", "fulfill");
const p2 = sleep(100, "two", "fulfill");

raceWithTimeout([p1, p2], 150).then((value) => {
    console.log(value)
}).catch((err) => console.log(err));



/*
**Challenge 28**  
Description:  
Create a proxy object that intercepts and logs all property access.  
Solution Approach:  
Use the Proxy object to create a wrapper around another object.
*/

let person = {
    name: 'Sameer',
    age: 50,
    country: 'INDIA',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'Programmer',
    address: {
        street: 'Bangalore',
        pobox: 560008,
        city: 'Bangalore'
    },
    getPersonInfo: function () {
        return `I am ${this.name} and I live in ${this.country}. I am ${this.age}.`
    }
}

let handler = {
    get: function (target, propName) {
        return (propName in target) ? target[propName] : 'Property does not exist'
    }
}

let proxy = new Proxy(person, handler)
console.log(proxy.name) // Sameer
console.log(proxy.skills)// ['HTML', 'CSS', 'JS']
console.log(proxy.age) // 50
console.log(proxy.country) // INDIA 
console.log(proxy.location1) // Property does not exist
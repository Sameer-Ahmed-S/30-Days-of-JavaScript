/*

**Challenge 15**
Problem Description -
create a string_chop function that takes a string and chop factor(size) and chops out the string into the factor(size) that has been passed
Test Data :
console.log(string_chop('Scaler'));
console.log(string_chop('Scaler',2));
["Scaler"]
['Sc' , 'al' ,'er']


*/

function string_chop(str, size) {
    let arr = [];
    if(size === undefined || size === 0)
        size = str.length;
    for (let i = 0; i < str.length; i += size) {
        arr.push(str.slice(i, i + size));
    }
    return arr;
}


console.log(string_chop('Scaler'));
console.log(string_chop('Scaler', 2));
console.log(string_chop('Scaler', 4));
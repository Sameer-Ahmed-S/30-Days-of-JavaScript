/*
#Challenge 6
Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
*/

function sum(num1,num2){
    var sum=num1 + num2;
    if(num1===num2){
        return 3*sum;
    }
    return sum;
}


console.log(sum(2,2));
console.log(sum(2,3));
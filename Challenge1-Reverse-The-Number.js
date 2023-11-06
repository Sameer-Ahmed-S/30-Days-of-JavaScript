/*
Challenge 1:
Write a JavaScript program that reverse a number.   

Sample :
x = 32243;
Expected Output : 34223

*/

function reverseNumber(num){
    let reverse = 0;
    while(num>0)
    {
        digit= num % 10;

        reverse = (reverse * 10) + digit;

        num= Math.floor(num / 10);
    }
    return reverse;
}


num = 32243;
reversedNumber=reverseNumber(num);
console.log(reversedNumber);
/*
**Challenge 7**  
Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
*/

function check(num1,num2){
    let sum = num1+num2;
  if(num1===50 || num2===50 || sum===50){
    return true;
  }

  return false;
}


console.log(check(45,5)); //true

console.log(check(5,5)); //false

console.log(check(50,1)); //true

console.log(check(1,50)); //true
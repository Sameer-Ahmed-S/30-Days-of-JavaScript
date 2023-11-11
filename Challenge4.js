/*
#Challenge 4: 
Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
*/

function areaOfTriangle(side1,side2,side3){
    //using Heron's formula for area of a triangle
    var semiPerimeter= (side1+side2+side3)/2;
    var area = Math.sqrt(semiPerimeter*(semiPerimeter-side1)*(semiPerimeter-side2)*(semiPerimeter-side3));
    return area;
}

console.log(areaOfTriangle(5,6,7));
/*

## Challenge 5: 
Write a JavaScript exercise to get the filename extension.

*/

function getExtension(filename){    
    var extension = filename.split('.').pop();
    return extension;   
}


console.log(getExtension('index.html'));
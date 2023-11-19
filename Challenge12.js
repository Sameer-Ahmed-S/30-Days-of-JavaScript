/*
Challenge 12
Write a JavaScript program to create a clock.
Note: The output will come every second.
Expected Console Output:
"14:37:42"
"14:37:43"
 "14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"
 Hour should be in 24 hours format.
*/

function clock() {
    var date = new Date();
    let formattedTime = date.toLocaleTimeString('en-US',  { hour12: false }); 
    console.log(formattedTime);
    }

setInterval(clock, 1000);

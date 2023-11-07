/*

## Challenge 2:
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

Example string: 'the quick brown fox'
Expected Output: 'The Quick Brown Fox '

*/

function capitalize(str) {
    let words =str.split(' ');
    let capitalizedWords=[];

    for(let i=0;i<words.length;i++){
        let word = words[i];
        let capitalizedWord = word[0].toUpperCase() + word.slice(1);
        capitalizedWords.push(capitalizedWord);
    }
    return capitalizedWords.join(' ');

}

console.log(capitalize('the quick brown fox'));

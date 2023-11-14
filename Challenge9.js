/*
**Challenge 9**  
Write a JavaScript function to find the first not repeated character.  
Sample arguments : 'abacddbec'  
Expected output : 'e'
*/

function firstNotRepeatedCharacter(string){

    var map= {}

    for(var i=0;i<string.length;i++){
        if(map[string[i]]){
            map[string[i]]++;
        }
        else{
            map[string[i]]=1;
        }
    }

    for(var i=0;i<string.length;i++)
    {
        if(map[string[i]]==1)
        {
            return string[i];
        }
        
    }
    return null;
}

console.log(firstNotRepeatedCharacter('abacddbec'));
    
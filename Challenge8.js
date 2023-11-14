/*
**Challenge 8**  
 Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.  
Sample array : [1, 2, 3] and subset length is 2  
Expected output :[ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]
*/
function GenerateSubset(array,subsetLength){
    var n= array.length;

    var totalSubsets= 1 << n; 
    var subsets=[];
    for(var bitmask=0;bitmask<totalSubsets;bitmask++){
        var count=0;
        var temp = bitmask;
        while(temp>0){
                count+= temp & 1;
                temp>>=1;
        }
       if(count==subsetLength){
        var subset= [];           
            for(var i=0;i<n;i++){
                if((bitmask & (1 << i)) > 0){                    
                    subset.push(array[i]);
                }               
            }
            subsets.push(subset);
        }
    }
    return subsets;
}

var array=[1,2,3];
console.log(GenerateSubset(array,2));

// Time Complexity : O(2^n)
// Space Complexity : O(n+subsetLength)
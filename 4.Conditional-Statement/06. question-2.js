/*
    Consider the integer values, and find the minimum values among the given input values.
    
    e.g : x=10, y=20, z=6,
            Output -> 6
    e.g : x=10, y=3, z=100,
            Output -> 3
*/
let x = 10, y = 30, z=60;

if((x<y) && (x<z)){
    console.log(x,"is smallest");
}
else {
    if(y<x){
        console.log(y,"is smallest");
    }
    else {
        console.log(z,"is smallest");
    }
}
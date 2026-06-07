
/*
    Given a value n(positive Integer), print the following pattern on the screen.

    let n = 4
            * 
            * * 
            * * * 
            * * * *
    let n = 3
                * 
                * *
                * * *
 */

    patter_two(4);



function patter_two(n){
    for(let i = 1; i <= n; i++) {
        let str = "";
        
        for(let j = 1; j <= i; j++){
            str += "*";
        }
        console.log(str);
    } 
}

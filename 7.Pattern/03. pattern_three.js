/*
    Given a value n(positive Integer), print the following pattern on the screen.

    let n = 4
            _ _ _ * 
            _ _ * *
            _ * * *
            * * * *
    let n = 3
            _ _ *
            _ * *
            * * *
 */

    pattern_three(4);

function pattern_three(n) {

    
    for(let i = 0; i <= n; i++){

        let str = "";
        //spaces
        let spaces = n - i;
        for(let sp = 1; sp <= spaces; sp++){
            str += "   ";
        }
        //star
        let stars = i;
        for(let st = 1; st <= stars; st++){
            str += " * ";
        }
        console.log(str);
    }
    
   



}
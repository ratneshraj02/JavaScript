/*
    Given a value n(positive Integer), print the following pattern on the screen.

    let n = 4
            
    let n = 3
            
 */

    pattern_four(4);


    function pattern_four(n) {

       
        for(let i = 1; i <= n; i++){

             let str = "";
            //space
            for(let sp = 1; sp <= n - i; sp++) {
                str += "   ";
            }

            //stars
            for(let star = 1; star <= (2*i) - 1; star++){
                str += " * "
            }
            console.log(str);
        }
        
    };

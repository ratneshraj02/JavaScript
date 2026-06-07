/*
    Given a value n(positive Integer), print the following pattern on the screen.

    let n = 4
            
    let n = 3
            
 */

    patter_five(4);

    function patter_five(n) {

        for(let i = 1; i <= n; i++){
            
            //stars
            let str = "";
            for(let st = 1; st <= n - i+1; st++){
                str += "*";
            }
            console.log(str);
        }

    };
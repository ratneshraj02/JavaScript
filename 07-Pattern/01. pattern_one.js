/*
    Given a value n(positive Integer), print the following pattern on the screen.

    let n = 4
            * * * *
            * * * *
            * * * *
            * * * *
    let n = 3
                * * *
                * * *
                * * *
 */

    pattern_one(3);

function pattern_one(n) {
    for(let i=1; i<=n; i++){

        let str = "";
        for(let j=1; j<=n; j++){
            str += " * ";
        }
        console.log(str);
    }
}




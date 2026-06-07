
pattern_seven(5);


function pattern_seven(n) {
    upperpart(n);
    middlepart(n);
    lowerpart(n);

};

function upperpart(n) {
    
    for(let i = 1; i <= (n-1)/2; i++){
        
        let str = "";
        //stars
        for(let st = 1; st <= i; st++){
            str += " * ";
        }
        //spaces
        for(let sp = 1; sp <= n - 2*i; sp++){
            str += "   ";
        }
        //stars
        for(let st = 1; st <= i; st++){
            str += " * ";
        }
        console.log(str);
    }
}
function middlepart(n) {
    let str = "";
    for(let i = 1; i <= n; i++) {
        str += " * ";
    }
    console.log(str);
}

function lowerpart(n){

    
    for(let i = 1; i <= (n-1)/2; i++){

        let str = "";

        for(let st = 1; st <= (n-1)/2 - i+1; st++){
            str += " * ";
        }

        for(let sp = 1; sp <= 2*i-1;sp++){
            str += "   ";
        }

        for(let st = 1; st <= (n-1)/2 - i+1; st++){
            str += " * ";
        }
        console.log(str);
    }
    
};
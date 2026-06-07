
pattern_six(3);
pattern_six(5);
pattern_six(9);

function pattern_six(n) {
    upperTriangle(n);
    lowerTriangle(n);

};

function upperTriangle(n){
    for(let i = 1; i <= n; i++){
        let str = "";

        //sp
        for(let sp = 1; sp <= n - i; sp++){
            str += " ";
        }
        //stars
        for(let st = 1; st <= 2*i-1; st++){
            str += "*";
        }
        console.log(str);
    }
};

function lowerTriangle(n){
    for(let i = 1; i <= n - 1; i++){
        let str = "";
        //space
        for(let sp = 1; sp <= i; sp++){
            str += " ";
        }

        //stars
        let k = 2*(n-i) - 1;
        for(let st = 1; st <= k; st++){
            str += "*";
        }
        console.log(str);     
    }
};


function fun() {
    return new Promise(function process(resolve,reject){
        setTimeout(function add(a, b) {
            let aa = 12;
            let bb = 9;
            console.log("addition");
            resolve(aa, bb);
        },3000);
    });
}

let x = fun();
x.then(function addition(aa, bb){
    console.log("Addition of the a+b :",aa+bb);
});

x.then(function power(aa,bb){
    console.log("power of the number :",aa**bb);
});

// This is the not working i execpt